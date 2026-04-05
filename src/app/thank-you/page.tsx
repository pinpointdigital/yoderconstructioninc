import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '../../components';

export const metadata: Metadata = {
  title: 'Thank You - Consultation Request Received | Yoder Construction Inc.',
  description: 'Thank you for your consultation request. Matt or a member of our team will reach out within one business day.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYou() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-background">
      <div className="container-padding text-center max-w-4xl">
        <ScrollReveal>
          <div className="mb-8">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-lora font-medium text-text-primary mb-6">
              Thank You
            </h1>
            
            <p className="text-xl md:text-2xl text-text-light font-dm-sans leading-relaxed mb-8">
              We've received your request and appreciate your interest in working with Yoder Construction.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-white rounded-lg p-8 shadow-sm border border-accent/10 mb-12 max-w-2xl mx-auto">
            <h2 className="text-2xl font-lora font-medium text-text-primary mb-4">
              What Happens Next?
            </h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-dm-sans font-medium text-sm mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-dm-sans font-semibold text-text-primary mb-1">Review & Response</h4>
                  <p className="text-text-light font-dm-sans text-sm">
                    Matt or a member of our team will review your project details and reach out within one business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-dm-sans font-medium text-sm mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-dm-sans font-semibold text-text-primary mb-1">Initial Consultation</h4>
                  <p className="text-text-light font-dm-sans text-sm">
                    We'll schedule a complimentary consultation to discuss your vision, timeline, and budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-dm-sans font-medium text-sm mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-dm-sans font-semibold text-text-primary mb-1">Design & Proposal</h4>
                  <p className="text-text-light font-dm-sans text-sm">
                    We'll create a detailed proposal with design concepts and transparent pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-dm-sans font-semibold text-text-primary mb-2">Quick Response</h4>
              <p className="text-text-light font-dm-sans text-sm">
                We respond to all inquiries within one business day
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="font-dm-sans font-semibold text-text-primary mb-2">No Cost Consultation</h4>
              <p className="text-text-light font-dm-sans text-sm">
                Our initial consultations are always complimentary
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-dm-sans font-semibold text-text-primary mb-2">Licensed & Insured</h4>
              <p className="text-text-light font-dm-sans text-sm">
                CSLB #1098601 - Fully licensed and insured
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <div className="space-y-6">
            <h3 className="text-2xl font-lora font-medium text-text-primary">
              While You Wait
            </h3>
            
            <p className="text-lg text-text-light font-dm-sans">
              Take a look at some of our recent projects to see the quality and craftsmanship 
              that goes into every Yoder Construction build.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/our-work" className="btn-primary">
                View Our Work
              </Link>
              <Link href="/about" className="btn-secondary text-text-primary border-text-primary hover:bg-text-primary hover:text-white">
                Meet Our Team
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.8}>
          <div className="mt-16 pt-8 border-t border-accent/20">
            <p className="text-text-light font-dm-sans text-sm mb-4">
              Need to reach us immediately?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:7607306776"
                className="flex items-center text-accent hover:text-primary-dark transition-colors duration-300 font-dm-sans font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (760) 730-6776
              </a>
              
              <a 
                href="mailto:hello@pinpointdigital.us"
                className="flex items-center text-accent hover:text-primary-dark transition-colors duration-300 font-dm-sans font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}