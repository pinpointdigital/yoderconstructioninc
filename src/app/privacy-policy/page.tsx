import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '../../components';

export const metadata: Metadata = {
  title: 'Privacy Policy | Yoder Construction Inc.',
  description: 'Privacy Policy for Yoder Construction Inc. Learn how we collect, use, and protect your personal information when you use our services.',
  keywords: 'privacy policy, data protection, personal information, Yoder Construction',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Header Section */}
      <section className="section-padding bg-primary-dark text-white">
        <div className="container-padding text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-dm-sans font-medium uppercase tracking-wider rounded-full mb-10">
              Legal Information
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-lora font-medium mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl font-lora font-light italic max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect and use your information.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-sm text-text-light mb-8">
                  <strong>Effective Date:</strong> April 5, 2026<br />
                  <strong>Last Updated:</strong> April 5, 2026
                </p>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">1. Information We Collect</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>We collect information you provide directly to us, such as when you:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Fill out our consultation request form</li>
                        <li>Contact us via phone, email, or our website</li>
                        <li>Subscribe to our newsletter or updates</li>
                        <li>Interact with us on social media</li>
                      </ul>
                      
                      <p className="font-medium">Personal Information may include:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Name and contact information (email, phone, address)</li>
                        <li>Project details and preferences</li>
                        <li>Budget information for construction projects</li>
                        <li>Communication preferences</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">2. How We Use Your Information</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>We use the information we collect to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Provide consultation services and project estimates</li>
                        <li>Communicate with you about your construction project</li>
                        <li>Schedule appointments and site visits</li>
                        <li>Send you updates about our services and company news</li>
                        <li>Improve our website and services</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">3. Information Sharing</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>To trusted service providers who assist in operating our website or conducting business</li>
                        <li>When required by law or to protect our rights and safety</li>
                        <li>With your explicit consent for specific purposes</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">4. Data Security</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">5. Cookies and Tracking</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">6. Your Rights</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>You have the right to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Request access to your personal information</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your information</li>
                        <li>Opt out of marketing communications</li>
                        <li>File a complaint with relevant authorities</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">7. Contact Information</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>If you have questions about this Privacy Policy, please contact us:</p>
                      <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                        <p><strong>Yoder Construction Inc.</strong></p>
                        <p>Email: <a href="mailto:hello@yoderconstructioninc.com" className="text-accent hover:underline">hello@yoderconstructioninc.com</a></p>
                        <p>Phone: <a href="tel:+17607306776" className="text-accent hover:underline">(760) 730-6776</a></p>
                        <p>License: CSLB #1036601</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">8. Changes to This Policy</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 p-8 bg-primary-dark rounded-lg text-center">
                  <h3 className="text-2xl font-lora font-medium text-white mb-4">Ready to Start Your Project?</h3>
                  <p className="text-white/90 mb-6 font-dm-sans">Contact us today for a free consultation on your outdoor living space.</p>
                  <Link
                    href="/request-consultation"
                    className="inline-block px-8 py-4 bg-accent text-background font-dm-sans font-medium tracking-wide hover:bg-accent/90 transition-colors duration-300"
                    style={{
                      borderRadius: '6px',
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderRadius = '50px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderRadius = '6px';
                    }}
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}