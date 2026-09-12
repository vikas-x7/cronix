import type { Metadata } from 'next';
import LegalPage from '@/shared/components/legal-page';

export const metadata: Metadata = {
  title: 'Website Terms of Use | Cronix',
};

export default function WebsiteTermsOfUsePage() {
  return (
    <LegalPage
      title="Website Terms of Use"
      lastUpdated="September 12, 2026"
      intro="These Website Terms of Use ('Terms of Use') govern your use of the Cronix website (the 'Site'). These Terms of Use apply to anyone accessing or browsing the Site, separate from the Terms of Service that govern the platform itself."
      sections={[
        {
          heading: '1. Acceptance of These Terms',
          description:
            'By accessing or browsing the Site, you agree to these Terms of Use. If you do not agree, please do not use the Site.',
        },
        {
          heading: '2. Informational Purpose',
          description:
            'The Site provides information about Cronix, including marketing content, documentation, and links to the platform. The Site is provided for informational purposes only and does not constitute professional or legal advice.',
        },
        {
          heading: '3. Intellectual Property',
          points: [
            'All content on the Site — including text, graphics, logos, videos, images, and design — is the property of Cronix or its licensors.',
            'You may view, download, and print content from the Site for personal, non-commercial use only.',
            'You may not reproduce, distribute, or modify any content without prior written permission.',
          ],
        },
        {
          heading: '4. Trademarks',
          description:
            'The Cronix name, logo, and related marks are trademarks of Cronix. You may not use these trademarks without prior written consent.',
        },
        {
          heading: '5. User Restrictions',
          points: [
            'Do not use the Site in any way that is unlawful, harmful, or misleading.',
            'Do not attempt to disrupt, overload, or interfere with the Site.',
            'Do not scrape, harvest, or extract data from the Site without authorization.',
            'Do not upload viruses, malware, or other malicious code to the Site.',
          ],
        },
        {
          heading: '6. Third-Party Links',
          description:
            'The Site may contain links to third-party websites or resources. We are not responsible for the availability, content, or practices of those external sites and do not endorse them.',
        },
        {
          heading: '7. Disclaimer of Warranties',
          description:
            'The Site is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, Cronix disclaims all warranties, express or implied, regarding the Site, including accuracy, reliability, and availability.',
        },
        {
          heading: '8. Limitation of Liability',
          description:
            'To the maximum extent permitted by law, Cronix shall not be liable for any damages arising out of or in connection with your use of, or inability to use, the Site.',
        },
        {
          heading: '9. Changes to These Terms of Use',
          description:
            'We may update these Website Terms of Use periodically. Changes will be effective upon posting to the Site. Your continued use of the Site constitutes acceptance of the updated terms.',
        },
        {
          heading: '10. Contact Us',
          description:
            'If you have questions about these Website Terms of Use, contact us at:',
          points: [
            'Email: inquiry@cronix.io',
            'GitHub: github.com/vikas-x7/cronix',
          ],
        },
      ]}
    />
  );
}
