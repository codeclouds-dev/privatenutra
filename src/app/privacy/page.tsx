import PolicyPage from '@/components/PolicyPage';
import { privacySections, policyCopyApproved } from '@/content/policies';
import { pageMetadata } from '@/lib/metadata';
export const metadata = pageMetadata('Privacy', 'Information provided when contacting Private Label Nutra.', '/privacy', policyCopyApproved);
export default function PrivacyPage(){return <PolicyPage title="Privacy." intro="Information you share when contacting our team." sections={privacySections}/>;}
