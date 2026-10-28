import ServicePage from '@/components/ServicePage';
import { services } from '@/content/services';
import { pageMetadata } from '@/lib/metadata';
const service = services[0];
export const metadata = pageMetadata(service.seoTitle, service.description, service.href);
export default function EnergyShotsPage(){return <ServicePage service={service}/>;}
