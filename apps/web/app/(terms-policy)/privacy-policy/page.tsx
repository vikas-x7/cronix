import type { Metadata } from 'next';
import LegalPage from '@/shared/components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy | Cronix',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="September 12, 2026"
      intro="This Privacy Policy explains how Cronix ('we', 'us', or 'our') collects, uses, shares, and protects your personal information when you use our website, platform, and related services (collectively, the 'Service')."
      sections={[
        {
          heading: '1. Information We Collect',
          description:
            'We collect information you provide directly to us, alongside information we gather automatically as you use the Service.',
          points: [
            'Account information such as your name, email address, and authentication credentials.',
            'Usage data including job schedules, execution history, logs, and dashboard activity.',
            'Device and technical data such as IP address, browser type, and operating system.',
            'Payment information where applicable, processed securely by our payment providers.',
          ],
        },
        {
          heading: '2. How We Use Your Information',
          points: [
            'To provide, operate, and maintain the Service and its features.',
            'To process job schedules, trigger HTTP requests, and deliver execution logs.',
            'To improve and personalize your experience across the platform.',
            'To communicate with you about updates, security alerts, and support requests.',
            'To monitor and prevent fraud, abuse, and unauthorized access.',
          ],
        },
        {
          heading: '3. How We Share Your Information',
          description:
            'We do not sell your personal information. We share data only in the following circumstances:',
          points: [
            'With service providers that help us operate the Service (hosting, databases, Redis infrastructure).',
            'When required by law, regulation, or legal process.',
            'In connection with a merger, acquisition, or sale of assets.',
            'With your explicit consent.',
          ],
        },
        {
          heading: '4. Data Retention',
          description:
            'We retain your data only as long as necessary to provide the Service, comply with legal obligations, and resolve disputes. Execution logs and historical data are retained in line with your account configuration.',
        },
        {
          heading: '5. Data Security',
          description:
            'We implement industry-standard technical and organizational measures — including encryption in transit, secure credential storage, and access controls — to protect your data. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.',
        },
        {
          heading: '6. Your Rights',
          points: [
            'The right to access the personal data we hold about you.',
            'The right to correct inaccurate or incomplete information.',
            'The right to request deletion of your personal information.',
            'The right to object to or restrict certain processing activities.',
            'The right to data portability where applicable.',
          ],
        },
        {
          heading: "7. Children's Privacy",
          description:
            'The Service is not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can take appropriate action.',
        },
        {
          heading: '8. International Transfers',
          description:
            'Your information may be transferred to and processed in countries other than the one in which you reside. We take steps to ensure such transfers comply with applicable data protection laws.',
        },
        {
          heading: '9. Changes to This Policy',
          description:
            'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the "Last updated" date at the top.',
        },
        {
          heading: '10. Contact Us',
          description:
            'If you have any questions about this Privacy Policy or our data practices, please contact us at:',
          points: [
            'Email: inquiry@cronix.io',
            'GitHub: github.com/vikas-x7/cronix',
          ],
        },
      ]}
    />
  );
}
