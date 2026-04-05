import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '../../components';

export const metadata: Metadata = {
  title: 'Terms of Service | Yoder Construction Inc.',
  description: 'Terms of Service for Yoder Construction Inc. Learn about the terms and conditions that govern the use of our website and services.',
  keywords: 'terms of service, terms and conditions, legal agreement, Yoder Construction',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-20 bg-background force-navbar-solid">
      {/* Header Section */}
      <section className="py-16 bg-primary-dark text-white">
        <div className="container-padding text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-lora font-medium">
              Terms of Service
            </h1>
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
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">1. Acceptance of Terms</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">2. About Our Services</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>Yoder Construction Inc. provides professional construction services including:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Custom deck construction and design</li>
                        <li>Patio cover installation and construction</li>
                        <li>Outdoor living space development</li>
                        <li>Construction consultation services</li>
                        <li>Project planning and design services</li>
                      </ul>
                      <p>All construction services are provided under California State License CSLB #1036601.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">3. Website Use</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>You may use our website for lawful purposes only. You agree not to use the website:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material, including "junk mail," "chain letters," "spam," or any other similar solicitation</li>
                        <li>To impersonate or attempt to impersonate the company, employees, or other users</li>
                        <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">4. Consultation and Estimates</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>When you request a consultation or estimate:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>All consultations are provided free of charge for initial project assessment</li>
                        <li>Estimates are provided based on information you provide and site conditions</li>
                        <li>Final project costs may vary based on actual conditions, materials, and scope changes</li>
                        <li>Estimates are valid for 30 days unless otherwise specified</li>
                        <li>A formal contract is required before any construction work begins</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">5. Construction Services</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>All construction services are subject to:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Execution of a detailed construction contract</li>
                        <li>Proper permits and approvals as required by local authorities</li>
                        <li>Payment terms as outlined in individual contracts</li>
                        <li>Material availability and weather conditions</li>
                        <li>Compliance with local building codes and regulations</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">6. Intellectual Property</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>The content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Yoder Construction Inc. and is protected by copyright and other intellectual property laws.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">7. Limitation of Liability</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>To the fullest extent permitted by law, Yoder Construction Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">8. Warranties and Guarantees</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>Construction project warranties and guarantees are outlined in individual construction contracts. Website information is provided "as is" without warranties of any kind.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">9. Privacy</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>Your privacy is important to us. Please review our <Link href="/privacy-policy" className="text-accent hover:underline">Privacy Policy</Link>, which also governs your use of our website and services.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">10. Governing Law</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>These terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions.</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">11. Contact Information</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>If you have questions about these Terms of Service, please contact us:</p>
                      <div className="bg-accent/5 p-6 rounded-lg border-l-4 border-accent">
                        <p><strong>Yoder Construction Inc.</strong></p>
                        <p>Email: <a href="mailto:hello@yoderconstructioninc.com" className="text-accent hover:underline">hello@yoderconstructioninc.com</a></p>
                        <p>Phone: <a href="tel:+17607306776" className="text-accent hover:underline">(760) 730-6776</a></p>
                        <p>License: CSLB #1036601</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">12. Changes to Terms</h2>
                    <div className="space-y-4 text-text-primary font-dm-sans leading-relaxed">
                      <p>We reserve the right to modify these terms at any time. Changes will be effective when posted on this page. Your continued use of our website and services after changes are posted constitutes acceptance of the revised terms.</p>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}