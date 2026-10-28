import { services, site } from '@/content/site';
import { absoluteUrl } from '@/lib/metadata';
const organizationId = absoluteUrl('/#organization');
export function StructuredData({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>;
}
export function OrganizationData() {
  return <StructuredData data={{'@context':'https://schema.org','@type':'Organization','@id':organizationId,name:site.name,url:absoluteUrl('/'),telephone:site.telephone,address:{'@type':'PostalAddress',...site.address},contactPoint:{'@type':'ContactPoint',telephone:site.telephone,contactType:'sales'}}}/>;
}
export function ServiceData() {
  return <StructuredData data={{'@context':'https://schema.org','@graph':services.map(service=>({'@type':'Service','@id':absoluteUrl(`${service.href}#service`),name:service.name,serviceType:service.name,description:service.description,url:absoluteUrl(service.href),provider:{'@id':organizationId}}))}}/>;
}
