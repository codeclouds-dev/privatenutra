import { imagery } from '@/content/imagery';
import BrandPortfolio from '@/components/BrandPortfolio';
import Image from 'next/image';
import PageShell, { PageIntro } from '@/components/PageShell';
import { products } from '@/content/products';
import { quoteHref } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Private Label Supplement Products', 'Explore our liquid-shot range and the brands we manufacture for, plus powder, capsule and tablet manufacturing for your brand.', '/products');
export default function ProductsPage(){return <PageShell>
  <PageIntro eyebrow="" title={<>Real products.<br/><em>Made here.</em></>}>Energy shots, powders, capsules and tablets. Explore the range, then tell us what you want to make under your brand.</PageIntro>
  <div className="product-range">{products.map(product=><section className="range-product" id={product.id} key={product.id} aria-labelledby={`${product.id}-heading`}><figure><Image src={product.image} alt={product.imageAlt} width={product.imageWidth} height={product.imageHeight} sizes="(max-width:700px) 88vw, 28vw"/><figcaption>Shown: {product.shownFlavor}</figcaption></figure><h2 id={`${product.id}-heading`}>{product.name}</h2><ul className="flavor-list" aria-label={`${product.name} flavors`}>{product.flavors.map(flavor=><li key={flavor}>{flavor}</li>)}</ul></section>)}</div>
  <div className="range-summary"><p>Liquid-shot bottle format: 1.93 FL OZ (57 mL).</p><a className="button" href={quoteHref}>Get a Quote</a></div>
  <a className="text-link range-service-link" href="/private-label-energy-shots">Private label energy shot manufacturing</a>
  <BrandPortfolio/>
  <section className="product-formats" aria-labelledby="other-formats-heading"><Image src={imagery.formats} alt="Illustrative powder scoop, capsules and tablets" width={1536} height={1024} sizes="(max-width:700px) 88vw, 35vw"/><div><h2 id="other-formats-heading">Powders, capsules and tablets.</h2><p>Tell us your formula and format. We make it and pack it.</p><a className="text-link" href="/powders-capsules-tablets">Explore manufacturing & packaging</a></div></section>
</PageShell>}
