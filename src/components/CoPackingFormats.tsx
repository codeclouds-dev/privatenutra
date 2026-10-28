import Image from 'next/image';

export default function CoPackingFormats() {
  return <section id="copacking-formats" className="copacking-formats" aria-labelledby="copacking-formats-heading">
    <figure className="format-image">
      <Image src="/images/copacking-formats-v1.webp" alt="Illustrative powder scoop with ivory capsules and plain tablets on a sage surface" width={1200} height={800} sizes="(max-width:650px) 90vw, 45vw"/>
      <figcaption>Powder, capsule & tablet formats</figcaption>
    </figure>
    <div className="format-copy">
      <p className="eyebrow">CO-PACKING FORMATS</p>
      <h3 id="copacking-formats-heading">Liquid shots, powders,<br/><em>capsules & tablets.</em></h3>
      <p>Discuss your formula, product format and packaging requirements with our team.</p>
      <a className="text-link" href="/quote?type=custom">Discuss Co-packing <span aria-hidden="true">↗</span></a>
    </div>
  </section>;
}
