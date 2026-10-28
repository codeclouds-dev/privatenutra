import geometry from '@/content/hero-label-geometry.json';

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const fade = (start: number, end: number, progress: number) => {
  const t = clamp((progress - start) / (end - start));
  return t * t * t * (t * (t * 6 - 15) + 10);
};

// Fit the straight body, excluding the shoulder and rounded base. The base's
// silhouette changes with the camera angle and must not bend a printed label.
const rawPoses = geometry.map(rows => {
  const body = rows.slice(1, 6);
  const meanY = body.reduce((sum, row) => sum + row[1], 0) / body.length;
  const meanX = body.reduce((sum, row) => sum + (row[0] + row[2]) / 2, 0) / body.length;
  const slope = body.reduce((sum, row) => sum + (row[1] - meanY) * ((row[0] + row[2]) / 2 - meanX), 0)
    / body.reduce((sum, row) => sum + (row[1] - meanY) ** 2, 0);
  const angle = -Math.atan(slope);
  const centerY = rows[4][1];
  const widths = body.map(row => row[2] - row[0]).sort((a, b) => a - b);
  return {
    x: meanX + slope * (centerY - meanY), y: centerY, angle,
    radius: widths[2] * Math.cos(angle) * .465,
    height: (rows[7][1] - rows[0][1]) / Math.cos(angle) * .9,
  };
});
// A small symmetric filter removes pixel-edge noise without delaying the pose.
const weights = [1, 4, 6, 4, 1];
const poses = rawPoses.map((_, index) => {
  const pose = { x: 0, y: 0, angle: 0, radius: 0, height: 0 };
  for (const key of Object.keys(pose) as (keyof typeof pose)[]) {
    pose[key] = weights.reduce((sum, weight, offset) => sum
      + rawPoses[Math.max(0, Math.min(rawPoses.length - 1, index + offset - 2))][key] * weight, 0) / 16;
  }
  return pose;
});
function poseAt(position: number) {
  const index = Math.floor(position), blend = position - index;
  const first = poses[index], next = poses[Math.min(index + 1, poses.length - 1)];
  return {
    x: first.x + (next.x - first.x) * blend,
    y: first.y + (next.y - first.y) * blend,
    angle: first.angle + (next.angle - first.angle) * blend,
    radius: first.radius + (next.radius - first.radius) * blend,
    height: first.height + (next.height - first.height) * blend,
  };
}

export const HERO_LABEL_EXAMPLES = [
  { id: 'energy-shot', name: 'Energy Shot', src: '/images/hero-labels-v1/energy-shot.webp', paper: [253, 250, 240] },
  { id: 'b12-overload', name: 'B12 Overload', src: '/images/hero-labels-v1/b12-overload.webp', paper: [12, 42, 155] },
  { id: '8-hour-sleep', name: '8 Hour Sleep', src: '/images/hero-labels-v1/8-hour-sleep.webp', paper: [255, 214, 12] },
] as const;

function makePlaceholderArtwork() {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 768;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#123e2d'; ctx.fillRect(0, 0, 512, 768);
  ctx.fillStyle = '#fff8e8'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = '800 238px Arial, sans-serif';
  ctx.fillText('YOUR', 256, 768 * .18, 350);
  ctx.fillText('BRAND', 256, 768 * .46, 424);
  ctx.font = '600 25px Arial, sans-serif'; ctx.fillText('LIQUID SHOT', 256, 618);
  ctx.font = '400 21px Arial, sans-serif'; ctx.fillText('1.93 FL OZ (57 mL)', 256, 665);
  return canvas;
}

/** Front-only example print designs derived from supplied brand references.
 * Fade through the paper between distinct identities: two different wordmarks
 * never overlap. Geometry is locked to the selected photographic frame.
 */
export function createExampleLabelRenderer(onReady?: () => void) {
  const placeholder = makePlaceholderArtwork();
  const images = HERO_LABEL_EXAMPLES.map(example => {
    const image = new Image(); image.decoding = 'async'; image.src = example.src;
    return image;
  });
  let ready = false, disposed = false;
  Promise.all(images.map(image => image.decode())).then(() => {
    if (!disposed) { ready = true; onReady?.(); }
  }).catch(() => { /* Keep the original white-label concept if artwork is unavailable. */ });
  const artwork: (HTMLCanvasElement | HTMLImageElement)[] = [placeholder, ...images];
  const papers = [[18, 62, 45], ...HERO_LABEL_EXAMPLES.map(example => [...example.paper])];
  const names = ['your-brand', ...HERO_LABEL_EXAMPLES.map(example => example.id)];
  const texture = document.createElement('canvas');
  texture.width = 512; texture.height = 768;
  const print = texture.getContext('2d')!;
  let previousTexture = '';

  return {
    draw(ctx: CanvasRenderingContext2D, position: number, x: number, y: number, width: number, height: number, progress = position / (geometry.length - 1)) {
      const firstFade = fade(0, .24, progress), secondFade = fade(.38, .62, progress), thirdFade = fade(.76, 1, progress);
      let from = 0, to = 0, blend = 0;
      if (ready) {
        if (progress < .24) { from = 0; to = 1; blend = firstFade; }
        else if (progress < .38) { from = to = 1; }
        else if (progress < .62) { from = 1; to = 2; blend = secondFade; }
        else if (progress < .76) { from = to = 2; }
        else { from = 2; to = 3; blend = thirdFade; }
      }
      const paper = papers[from].map((value, channel) => value + (papers[to][channel] - value) * blend);
      const color = `rgb(${paper.join(',')})`;
      const key = `${from}:${to}:${blend.toFixed(4)}`;
      if (key !== previousTexture) {
        print.globalAlpha = 1; print.fillStyle = color; print.fillRect(0, 0, 512, 768);
        if (from === to) print.drawImage(artwork[from], 0, 0, 512, 768);
        else {
          const outgoing = 1 - fade(0, .45, blend), incoming = fade(.55, 1, blend);
          if (outgoing > 0) { print.globalAlpha = outgoing; print.drawImage(artwork[from], 0, 0, 512, 768); }
          if (incoming > 0) { print.globalAlpha = incoming; print.drawImage(artwork[to], 0, 0, 512, 768); }
          print.globalAlpha = 1;
        }
        previousTexture = key;
      }
      const pose = poseAt(position);
      // Project once at the final canvas resolution. An intermediate raster
      // softens the type and makes its edges crawl on a Retina display.
      const wrapped = ctx;
      wrapped.save(); wrapped.translate(x, y); wrapped.scale(width / 1280, height / 722);
      wrapped.translate(pose.x, pose.y); wrapped.rotate(pose.angle);
      const { radius, height: labelHeight } = pose;
      const arc = Math.asin(.975), segments = 32;
      const project = (u: number) => {
        const theta = (u - .5) * arc * 2;
        return { x: radius * Math.sin(theta), y: -labelHeight / 2 + radius * .065 * Math.cos(theta) };
      };
      const traceSurface = () => {
        wrapped.beginPath();
        for (let i = 0; i <= segments; i++) { const p = project(i / segments); if (i === 0) wrapped.moveTo(p.x, p.y); else wrapped.lineTo(p.x, p.y); }
        for (let i = segments; i >= 0; i--) { const p = project(i / segments); wrapped.lineTo(p.x, p.y + labelHeight); }
        wrapped.closePath();
      };
      traceSurface(); wrapped.clip();
      // An opaque undercoat and matching UV overlap prevent hairline seams
      // between projected strips, especially on angled, pale artwork.
      wrapped.fillStyle = color;
      wrapped.fill();
      // Strip projection compresses the print toward the sides of the cylinder.
      // Its top/bottom edges follow the tilt and camera curvature together.
      for (let i = 0; i < segments; i++) {
        const left = project(i / segments), right = project((i + 1) / segments);
        const stripWidth = right.x - left.x;
        wrapped.save();
        wrapped.transform(1, (right.y - left.y) / stripWidth, 0, 1, left.x, left.y);
        const padding = .9, sourceWidth = 512 / segments;
        const sourcePadding = padding * sourceWidth / stripWidth;
        wrapped.drawImage(texture, i * sourceWidth - sourcePadding, 0, sourceWidth + 2 * sourcePadding, 768, -padding, 0, stripWidth + 2 * padding, labelHeight);
        wrapped.restore();
      }
      traceSurface();
      const shade = wrapped.createLinearGradient(-radius, 0, radius, 0);
      shade.addColorStop(0, '#0b211a66'); shade.addColorStop(.13, '#0b211a12');
      shade.addColorStop(.28, '#ffffff2e'); shade.addColorStop(.47, '#ffffff08');
      shade.addColorStop(.70, '#0b211a06'); shade.addColorStop(1, '#0b211a75');
      wrapped.fillStyle = shade; wrapped.fill();
      wrapped.restore();
      return { firstFade, secondFade, thirdFade, example: names[blend < .5 ? from : to] };
    },
    dispose() {
      disposed = true;
      for (const image of images) image.removeAttribute('src');
      for (const canvas of [placeholder, texture]) { canvas.width = 0; canvas.height = 0; }
    },
  };
}

/** Retain the source movement within the visual column, using its smooth axis. */
export function bottlePanOffset(position: number) {
  return (poses[0].x - poseAt(position).x) * .75;
}
