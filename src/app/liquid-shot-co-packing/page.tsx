import ServicePage from '@/components/ServicePage';
import { services } from '@/content/services';
import { pageMetadata } from '@/lib/metadata';
const service = services[1];
export const metadata = pageMetadata(service.seoTitle, service.description, service.href);
export default function LiquidShotPage(){return <ServicePage service={service}/>;}
