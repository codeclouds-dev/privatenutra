'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { site, quoteHref } from '@/content/site';
import { services } from '@/content/services';

export function Brand() {
  return <a className="brand" href="/" aria-label="Private Label Nutra home">
    <svg viewBox="10 10 100 255" aria-hidden="true">
      <path d="M35 10H85Q89 10 89 14V64C89 75 110 76 110 94V250Q110 265 95 265H25Q10 265 10 250V94C10 76 31 75 31 64V14Q31 10 35 10ZM34 190V145H42L77 177V145H86V190H78L43 158V190Z" fill="currentColor" fillRule="evenodd"/>
      <path d="M31 57h58" stroke="#97ac6b" strokeWidth="3"/>
    </svg>
    <span className="brand-copy"><span className="brand-name">Private Label Nutra</span><small>YOUR BRAND. OUR EXPERTISE.</small></span>
  </a>;
}
export function PhoneIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3-1 3c-1 3-7 0-11-4S2 6 5 4Z" strokeLinejoin="round"/></svg>;
}
const links = [['Products','/products'],['Quality','/quality'],['About','/about']];
export default function Header() {
  const [open,setOpen] = useState(false);
  const [serviceOpen,setServiceOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const serviceButton = useRef<HTMLButtonElement>(null);
  const serviceGroup = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const close = () => { setOpen(false); setServiceOpen(false); };
  useEffect(() => { setOpen(false); setServiceOpen(false); }, [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    const resize = () => { if (window.innerWidth > 1050) setOpen(false); };
    update(); window.addEventListener('scroll',update,{passive:true}); window.addEventListener('resize',resize);
    return () => { window.removeEventListener('scroll',update); window.removeEventListener('resize',resize); };
  },[]);
  useEffect(() => {
    if (!serviceOpen) return;
    const outside = (event: PointerEvent) => { if (!serviceGroup.current?.contains(event.target as Node)) setServiceOpen(false); };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [serviceOpen]);
  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    const background = Array.from(document.querySelectorAll<HTMLElement>('main, footer, .mobile-contact-bar'));
    const states = background.map(element=>element.inert);
    background.forEach(element=>{element.inert=true;});
    return () => { document.documentElement.style.overflow=previous; background.forEach((element,i)=>{element.inert=states[i];}); };
  },[open]);
  const currentService = services.some(service => service.href === pathname);
  return <>
    <header ref={headerRef} className={`header${scrolled?' is-scrolled':''}${open?' menu-open':''}`} onKeyDown={event=>{
      if(event.key==='Escape'){
        if(open){event.preventDefault();close();menuRef.current?.focus();}
        else if(serviceOpen){event.preventDefault();setServiceOpen(false);serviceButton.current?.focus();}
      }
      if(event.key==='Tab'&&open){
        const controls=Array.from(headerRef.current?.querySelectorAll<HTMLElement>('a,button')??[]).filter(element=>element.getClientRects().length);
        const first=controls[0], last=controls.at(-1);
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
      }
    }}>
      <div className="nav-wrap"><Brand/>
        <nav id="navigation" className={open?'nav open':'nav'} aria-label="Main navigation">
          <div className="nav-services" ref={serviceGroup} onBlur={event=>{if(!event.currentTarget.contains(event.relatedTarget as Node))setServiceOpen(false);}}>
            <button ref={serviceButton} className={`service-menu-trigger${currentService?' is-current':''}`} type="button" aria-expanded={serviceOpen} aria-controls="service-navigation" onClick={()=>setServiceOpen(!serviceOpen)}>Services <span aria-hidden="true">⌄</span></button>
            <span className="mobile-services-label">Services</span>
            <ul id="service-navigation" className={`service-navigation${serviceOpen?' is-open':''}`}>{services.map(service=><li key={service.id}><a href={service.href} aria-current={pathname===service.href?'page':undefined} onClick={close}>{service.name}</a></li>)}</ul>
          </div>
          {links.map(([label,href])=><a key={label} href={href} aria-current={pathname===href?'page':undefined} onClick={close}>{label}</a>)}
        </nav>
        <div className="header-actions"><a className="header-phone" href={site.phoneHref} onClick={close} aria-label={`Call ${site.phone}`}><PhoneIcon/><span>{site.phone}</span></a><a className="button nav-quote" href={quoteHref} onClick={close}>Get a Quote</a><button ref={menuRef} className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}><span aria-hidden="true">{open?'×':'☰'}</span></button></div>
      </div>
    </header>
    {pathname !== '/quote' && <nav className="mobile-contact-bar" aria-label="Contact sales"><a href={site.phoneHref}><PhoneIcon/>Call</a><a className="button" href={quoteHref}>Get a Quote</a></nav>}
  </>;
}
