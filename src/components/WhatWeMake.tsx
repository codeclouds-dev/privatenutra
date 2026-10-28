import Image from 'next/image';
import { imagery } from '@/content/imagery';
import { services } from '@/content/services';
import './what-we-make.css';

export default function WhatWeMake() {
  return <section id="services" className="section what-we-make" aria-labelledby="what-we-make-heading">
    <div className="section-heading"><h2 id="what-we-make-heading">What we make.</h2></div>
    <div className="make-grid">{services.map(service => <a className="make-tile" href={service.href} key={service.id}>
      <div className="make-art"><Image src={service.image} alt={service.imageAlt} width={service.width} height={service.height} sizes="(max-width:650px) 88vw, (max-width:1050px) 43vw, 21vw"/></div>
      <div className="make-copy"><h3>{service.name}</h3><p>{service.id === 'liquid' ? 'Bring your formula, we fill and ship.' : service.description}</p></div>
    </a>)}</div>
    <figure className="home-products-preview">
      <Image src={imagery.energy} alt="Three Energy Shot bottles showing different packaging options" width={1536} height={1024} sizes="(max-width:800px) 88vw, 80vw"/>
      <figcaption><a className="text-link" href="/products">See our products</a></figcaption>
    </figure>
  </section>;
}
