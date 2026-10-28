import { certificationClaims } from '@/content/quality';

/** Sourced SQF/OU artwork and custom PLN badges for the confirmed registration/GMP claims. */
export default function Certifications({ liquidOnly = false }: { liquidOnly?: boolean }) {
  const claims = liquidOnly ? certificationClaims.slice(0, 1) : certificationClaims;
  return <ul className={`certification-badges${liquidOnly ? ' certification-single' : ''}`} aria-label="Certifications and registration">
    {claims.map(claim => <li key={claim.code}>
      <span className={`certification-mark certification-mark-${claim.code.toLowerCase()}`} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={claim.artwork} alt="" width={112} height={112}/>
      </span>
      <div><strong>{claim.title}</strong>{claim.detail !== claim.title && <span>{claim.detail}</span>}</div>
    </li>)}
  </ul>;
}
