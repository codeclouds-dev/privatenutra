import { productionTerms } from '@/content/site';
export default function ProductionTerms() {
  return <section className="production-terms" aria-labelledby="production-terms-heading"><div><p className="eyebrow">QUANTITY & TIMING</p><h2 id="production-terms-heading">Plan your production run.</h2></div><dl><div><dt>Minimum order quantity</dt><dd>{productionTerms.minimumOrder || 'Confirm with sales for your product and packaging.'}</dd></div><div><dt>Production lead time</dt><dd>{productionTerms.leadTime || 'Discuss your target launch date with sales to confirm timing.'}</dd></div></dl><a className="text-link" href="/quote">Discuss quantity & timing <span aria-hidden="true">↗</span></a></section>;
}
