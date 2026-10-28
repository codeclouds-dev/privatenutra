// Preserve the approved video motion at its native 1916 × 1080 resolution.
// Run from the project root. No motion generation or source-video edits.
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {mkdtemp,mkdir,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import sharp from 'sharp';
import {existsSync} from 'node:fs';
const exec=promisify(execFile),temporary=await mkdtemp(join(tmpdir(),'pln-retina-'));
const source=process.argv[2] || (existsSync('assets/source/shot-bottle-hero.mp4')?'assets/source/shot-bottle-hero.mp4':'assets/generated/scroll-v2/source.mp4');
const output=process.argv[3] || 'public/motion/scroll-v4/frames';
await mkdir(output,{recursive:true});
try{
 await exec('ffmpeg',['-hide_banner','-loglevel','error','-i',source,'-frames:v','144','-start_number','0',join(temporary,'%03d.png')]);
 for(let start=0;start<144;start+=4)await Promise.all(Array.from({length:Math.min(4,144-start)},async(_,offset)=>{
  const name=String(start+offset).padStart(3,'0');
  await sharp(join(temporary,`${name}.png`)).webp({quality:86,effort:5}).toFile(`${output}/${name}.webp`);
 }));
 console.log('Exported 144 native-resolution frames. Source video and existing frames unchanged.');
}finally{await rm(temporary,{recursive:true,force:true})}
