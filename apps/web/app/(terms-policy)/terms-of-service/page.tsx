import type { Metadata } from 'next';
import LegalPage from '@/shared/components/legal-page';

export const metadata: Metadata = {
  title: 'Terms of Service | Cronix',
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="September 12, 2026"
      intro="These Terms of Service ('Terms') govern your access to and use of the Cronix platform, API, and related services (collectively, the 'Service'). By creating an account or using the Service, you agree to be bound by these Terms."
      sections={[
        {
          heading: '1. Acceptance of Terms',
          description:
            'By accessing or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, including our Privacy Policy.',
        },
        {
          heading: '2. Eligibility',
          points: [
            'You must be at least 16 years old to use the Service.',
            'You must have the legal authority to agree to these Terms.',
            'If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization.',
          ],
        },
        {
          heading: '3. Your Account',
          points: [
            'You are responsible for maintaining the confidentiality of your account credentials.',
            'You are responsible for all activity that occurs under your account.',
            'You must notify us immediately of any unauthorized use of your account.',
            'We may suspend or terminate accounts that violate these Terms.',
          ],
        },
        {
          heading: '4. Acceptable Use',
          description: 'You agree not to use the Service to:',
          points: [
            'Violate any applicable law, regulation, or third-party right.',
            'Send spam, malware, phishing attempts, or other harmful content.',
            'Interfere with or disrupt the integrity, performance, or availability of the Service.',
            'Attempt to gain unauthorized access to the Service or its related systems.',
            'Use the Service in any way that could harm our infrastructure or other users.',
          ],
        },
        {
          heading: '5. Job Scheduling and Execution',
          description:
            'The Service allows you to schedule and execute recurring tasks, HTTP requests, and webhooks. You are solely responsible for the content, payloads, and endpoints you configure. We are not liable for failures, errors, or damages arising from the jobs you schedule or the endpoints you target.',
        },
        {
          heading: '6. Intellectual Property',
          points: [
            'The Service, including its software, design, and documentation, is owned by Cronix and protected by intellectual property laws.',
            'You retain ownership of the data and content you upload or create through the Service.',
            'You grant us a limited license to host, process, and store your content solely to provide the Service.',
          ],
        },
        {
          heading: '7. Fees and Payment',
          description:
            'Certain features of the Service may require payment. Fees are described on our pricing pages and are subject to change with reasonable notice. Unless otherwise stated, all fees are non-refundable.',
        },
        {
          heading: '8. Termination',
          points: [
            'You may discontinue using the Service and close your account at any time.',
            'We may suspend or terminate your access for violations of these Terms or illegal activity.',
            'Upon termination, your rights to use the Service cease immediately.',
          ],
        },
        {
          heading: '9. Disclaimer of Warranties',
          description:
            'The Service is provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        },
        {
          heading: '10. Limitation of Liability',
          description:
            'To the maximum extent permitted by law, Cronix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill, arising out of or related to your use of the Service.',
        },
        {
          heading: '11. Changes to These Terms',
          description:
            'We may revise these Terms from time to time. Any changes will be effective upon posting. Continued use of the Service after changes are posted constitutes acceptance of the revised Terms.',
        },
        {
          heading: '12. Contact Us',
          description: 'For questions about these Terms, contact us at:',
          points: [
            'Email: inquiry@cronix.io',
            'GitHub: github.com/vikas-x7/cronix',
          ],
        },
      ]}
    />
  );
}
