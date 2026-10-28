'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/** A deliberate, silent product-film preview. No motion or video download until requested. */
export default function HeroFilm({ available = false }: { available?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [status, setStatus] = useState('');
  const requested = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const stop = () => { if (preference.matches) video.current?.pause(); };
    const visibility = () => { if (document.hidden) video.current?.pause(); };
    preference.addEventListener('change', stop);
    document.addEventListener('visibilitychange', visibility);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.current?.pause();
    }, { threshold: 0.15 });
    if (video.current) observer.observe(video.current);
    return () => {
      preference.removeEventListener('change', stop);
      document.removeEventListener('visibilitychange', visibility);
      observer.disconnect();
    };
  }, []);

  async function toggle() {
    const player = video.current;
    if (!player || !available) return;
    if (!player.paused) { player.pause(); return; }
    setStatus('Loading product film…');
    requested.current = true;
    if (!player.getAttribute('src')) {
      player.src = '/motion/hero-v1.mp4';
      player.load();
    }
    try { await player.play(); }
    catch { setStatus('Playback could not start. Try playing the film again.'); }
  }

  return <figure className="hero-film">
    <div className="hero-film-stage">
      <Image className="hero-film-poster" src="/images/hero-scene-v1.webp" alt="Energy Shot fruit punch and grape bottles with a B12 Overload mixed berry bottle, arranged in a studio scene using supplied product references" width={1536} height={864} priority sizes="(max-width: 800px) 100vw, 55vw"/>
      <video id="hero-product-film" ref={video} className={loaded ? 'hero-film-video ready' : 'hero-film-video'} muted loop playsInline preload="none" aria-label="Silent animated product scene"
        onLoadedData={() => setLoaded(true)}
        onPlay={() => { setPlaying(true); setStatus('Product film playing.'); }}
        onPause={() => { setPlaying(false); if (requested.current) setStatus('Product film paused.'); }}
        onError={() => { setFailed(true); setLoaded(false); setPlaying(false); setStatus('The film is unavailable. The product image is shown.'); }}/>
    </div>
    <figcaption className="hero-film-caption"><span>OUR PRODUCTS. BROUGHT TO LIFE.</span><button type="button" onClick={toggle} disabled={failed || !available} aria-controls="hero-product-film">{!available ? 'Video pending' : failed ? 'Film unavailable' : playing ? 'Pause film' : 'Play film'} <span aria-hidden="true">{available ? (playing ? 'Ⅱ' : '▷') : ''}</span></button></figcaption>
    <span className="sr-only" role="status">{status}</span>
  </figure>;
}
