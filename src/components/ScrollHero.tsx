'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import TrustStrip from './TrustStrip';
import Certifications from './Certifications';

const VIDEO = '/motion/hero-v5/hero', POSTER = '/motion/hero-v5/poster.webp';

/** Play the complete rotation on landing; replay only after leaving and returning. */
export default function ScrollHero({ children }: { children: ReactNode }) {
  const runRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const run = runRef.current, video = videoRef.current;
    if (!run || !video) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false, hasPlayed = false, disposed = false;
    const phase = (value: string) => { if (!disposed) run.dataset.playback = value; };
    const play = () => {
      if (disposed || !inView || reduced.matches || document.hidden || video.ended) return;
      video.playbackRate = 4.03; // The complete approved rotation in about 1.5 seconds.
      hasPlayed = true;
      video.play().then(() => {
        if (disposed || !inView || reduced.matches || document.hidden) video.pause();
        else phase('playing');
      }).catch(() => phase('still'));
    };
    const reset = () => {
      video.pause(); if (video.readyState >= 1) video.currentTime = 0;
      hasPlayed = false; phase(reduced.matches ? 'still' : 'idle');
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= .35;
      if (!entry.isIntersecting) reset();
      else if (inView) play();
    }, { threshold: [0, .35] });
    const loaded = () => { video.dataset.ready = ''; play(); };
    const ended = () => phase('finished');
    const failed = () => { delete video.dataset.ready; phase('still'); };
    const motion = () => {
      reset();
      if (reduced.matches) delete run.dataset.enhanced;
      else { run.dataset.enhanced = ''; play(); }
    };
    const visibility = () => { if (document.hidden) video.pause(); else if (hasPlayed) play(); };
    if (!reduced.matches) run.dataset.enhanced = '';
    phase(reduced.matches ? 'still' : 'idle');
    observer.observe(video);
    video.addEventListener('loadedmetadata', play);
    video.addEventListener('loadeddata', loaded);
    video.addEventListener('ended', ended);
    video.addEventListener('error', failed);
    document.addEventListener('visibilitychange', visibility);
    reduced.addEventListener('change', motion);
    if (video.readyState >= 2) loaded();
    return () => {
      disposed = true; video.pause(); observer.disconnect();
      video.removeEventListener('loadedmetadata', play); video.removeEventListener('loadeddata', loaded);
      video.removeEventListener('ended', ended); video.removeEventListener('error', failed);
      document.removeEventListener('visibilitychange', visibility); reduced.removeEventListener('change', motion);
    };
  }, []);

  return <section className="scroll-run" ref={runRef} aria-label="Private label manufacturing" data-playback="idle">
    <div className="scroll-stage">
      <div className="scroll-art" aria-hidden="true">
        {/* The poster remains visible if JavaScript or the film fail. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="scroll-poster" src={POSTER} alt="" fetchPriority="high"/>
        <video className="scroll-video" ref={videoRef} muted playsInline preload="auto" poster={POSTER} tabIndex={-1}>
          <source media="(max-width:800px)" src={`${VIDEO}-mobile.mp4`} type="video/mp4"/>
          <source src={`${VIDEO}.mp4`} type="video/mp4"/>
        </video>
      </div>
      <div className="scroll-legibility" aria-hidden="true"/>
      <div className="scroll-opening">{children}</div>
      <div className="hero-trust"><TrustStrip/><Certifications/></div>
    </div>
  </section>;
}
