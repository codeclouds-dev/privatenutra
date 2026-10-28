import Image from 'next/image';
import { brandPortfolio } from '@/content/brand-portfolio';

export default function BrandPortfolio() {
  return <section className="brand-portfolio" id="brand-work" aria-labelledby="brand-work-heading">
    <div className="brand-portfolio-heading">
      <div><p className="eyebrow">Our manufacturing work</p><h2 id="brand-work-heading">Brands we<br/><em>manufacture for.</em></h2></div>
      <p>A selection of the brands and bottled products we manufacture.</p>
    </div>
    {[true, false].map(group => <div className={group ? 'brand-portfolio-groups' : 'brand-portfolio-singles'} key={String(group)}>
      {brandPortfolio.filter(brand => brand.group === group).map(brand => <figure className="brand-example" key={brand.id}>
        {/* The portrait crop needs a wider source to keep the printed labels sharp. */}
        <Image src={brand.image} alt={brand.alt} width={1536} height={1024} sizes={group ? '(max-width:700px) 88vw, 44vw' : '(max-width:500px) 132vw, (max-width:1050px) 81vw, 42vw'}/>
        <figcaption><h3>{brand.name}</h3><p>{brand.detail}</p></figcaption>
      </figure>)}
    </div>)}
  </section>;
}
