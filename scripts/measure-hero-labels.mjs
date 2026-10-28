// Recompute sleeve geometry after approved source frame replacement.
// Run from the app root: node scripts/measure-hero-labels.mjs
import sharp from 'sharp';
import {writeFile} from 'node:fs/promises';
const geometry=[];
for(let frame=0;frame<144;frame++){
 const {data,info}=await sharp(`public/motion/scroll-v3/frames/${String(frame).padStart(3,'0')}.webp`).removeAlpha().raw().toBuffer({resolveWithObject:true});
 const green=(x,y)=>{const n=(y*info.width+x)*3,r=data[n],g=data[n+1],b=data[n+2];return g>r*1.15&&g>b*1.1&&g<130&&r<90;};
 let x0=info.width,y0=info.height,x1=0,y1=0;
 for(let y=0;y<info.height;y+=4)for(let x=0;x<info.width;x+=4)if(green(x,y)){x0=Math.min(x,x0);y0=Math.min(y,y0);x1=Math.max(x,x1);y1=Math.max(y,y1);}
 const rows=[];
 for(let i=0;i<9;i++){
  const y=Math.round(y0+(y1-y0)*(.35+i*.075));let left=x1,right=x0;
  for(let x=x0;x<=x1;x++)if(green(x,y)){left=Math.min(left,x);right=Math.max(right,x);}
  rows.push([left+4,y,right-4]);
 }
 geometry.push(rows);
}
await writeFile('src/content/hero-label-geometry.json',JSON.stringify(geometry)+'\n');
console.log('Mapped vector sleeves to 144 approved frames; no source images modified.');
