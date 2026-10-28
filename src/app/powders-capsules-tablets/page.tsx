import ServicePage from '@/components/ServicePage';
import { services } from '@/content/services';
import { pageMetadata } from '@/lib/metadata';
const service = services[2];
export const metadata = pageMetadata(service.seoTitle, service.description, service.href);
export default function FormatsPage(){return <ServicePage service={service}/>;}
