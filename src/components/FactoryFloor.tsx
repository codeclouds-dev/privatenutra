'use client';

import { useEffect, useRef } from 'react';

const steps = [
  { id: '01-filling', name: 'Filling', note: 'Multi-head liquid filling' },
  { id: '02-labeling', name: 'Labeling', note: 'Inline label application' },
  { id: '03-conveyor-shrink', name: 'Sealing', note: 'Into the shrink tunnel' },
  { id: '04-shrink-exit', name: 'Finishing', note: 'Sleeves set and dried' },
  { id: '05-accumulation', name: 'Packing', note: 'Collected for case packing' },
];

/** Silent production clips that play only while on screen. Reduced motion shows posters. */
export default function FactoryFloor() {
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videos = Array.from(grid.current?.querySelectorAll('video') ?? []);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting && !reduced.matches && !document.hidden) video.play().catch(() => {});
        else video.pause();
      }
    }, { threshold: 0.35 });
    videos.forEach(video => observer.observe(video));
    const motion = () => { if (reduced.matches) videos.forEach(video => video.pause()); };
    reduced.addEventListener('change', motion);
    return () => { observer.disconnect(); reduced.removeEventListener('change', motion); };
  }, []);

  return (
    <section id="factory" className="section factory">
      <div className="section-heading"><div><p className="eyebrow">ON OUR PRODUCTION FLOOR</p><h2>Made on our line.<br/><em>Start to finish.</em></h2></div><p>Real footage from our facility — filling,<br className="desktop-break"/> labeling, sealing and packing.</p></div>
      <div className="factory-grid" ref={grid}>
        {steps.map((step, index) => <figure className="factory-clip" key={step.id}>
          <div className="factory-media"><video muted loop playsInline preload="metadata" poster={`/motion/factory/${step.id}-poster.jpg`} aria-label={`${step.name}: ${step.note}`}>
            <source src={`/motion/factory/${step.id}.webm`} type="video/webm"/>
            <source src={`/motion/factory/${step.id}.mp4`} type="video/mp4"/>
          </video></div>
          <figcaption><span>{String(index + 1).padStart(2, '0')}</span><b>{step.name}</b>{step.note}</figcaption>
        </figure>)}
      </div>
    </section>
  );
}
