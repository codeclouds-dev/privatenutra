import PolicyPage from '@/components/PolicyPage';
import { termsSections, policyCopyApproved } from '@/content/policies';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Terms', 'Website information and project inquiries for Private Label Nutra.', '/terms', policyCopyApproved);
export default function TermsPage(){return <PolicyPage title="Terms." intro="Using our website to explore your manufacturing project." sections={termsSections}/>;}
