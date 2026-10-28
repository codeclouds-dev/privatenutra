import { existsSync } from 'node:fs';
import { join } from 'node:path';
import Header from '@/components/Header';
import HeroFilm from '@/components/HeroFilm';
export const metadata={title:'Product Motion Study | Private Label Nutra',robots:{index:false,follow:false}};
export default function MotionStudy(){const available=existsSync(join(process.cwd(),'public/motion/hero-v1.mp4'));return <><Header/><main id="main" className="motion-study"><p className="eyebrow">ANIMATION REVIEW · FIRST STUDY</p><h1>Product motion.</h1><p className="intro">A generated scene based on supplied product images. This is a movement and composition study: small label text is distorted and is not approved for the live site. The homepage retains the supplied product renders. Play the silent five-second study below to review the camera movement and loop.</p><HeroFilm available={available}/><a className="button outline" href="/">Back to the homepage <span aria-hidden="true">↗</span></a></main></>}
