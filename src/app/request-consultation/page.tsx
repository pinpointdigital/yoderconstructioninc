'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '../../components';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  cityZip: string;
  projectType: string;
  budget: string;
  description: string;
  howDidYouHear: string;
}

export default function RequestConsultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const projectTypes = [
    'Custom Deck',
    'Patio Cover',
    'Outdoor Living Space',
    'Other',
  ];

  const budgetRanges = [
    '$25,000–$50,000',
    '$50,000–$75,000',
    '$75,000–$100,000',
    '$100,000–$150,000',
    '$150,000+',
  ];

  const referralSources = [
    'Referral',
    'Google Search',
    'Yelp',
    'HomeAdvisor',
    'Social Media',
    'Other',
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS configuration
      const templateParams = {
        to_email: 'hello@pinpointdigital.us',
        from_name: data.fullName,
        from_email: data.email,
        phone: data.phone,
        city_zip: data.cityZip,
        project_type: data.projectType,
        budget: data.budget,
        description: data.description,
        how_did_you_hear: data.howDidYouHear,
        reply_to: data.email,
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      // Reset form and redirect to thank you page
      reset();
      router.push('/thank-you');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('There was an error sending your message. Please try again or call us directly at (760) 730-6776.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 force-navbar-solid">
      {/* Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen">
        {/* Left Side - Image */}
        <div className="relative bg-gray-200 hidden lg:block lg:col-span-2">
          {/* Placeholder for full-height image */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary-dark/60 ambient-photo flex items-center justify-center">
            <span className="text-white text-lg font-lora">Consultation Image</span>
          </div>
          <div className="absolute inset-0 gradient-overlay-dark" />
          
          {/* Overlay Content */}
          <div className="absolute bottom-12 left-12 text-white max-w-md">
            <ScrollReveal>
              <blockquote className="text-2xl font-lora font-light italic mb-6">
                "The strength of what we build is rooted in who builds it."
              </blockquote>
              <p className="font-dm-sans text-white/90">
                — Matthew Yoder, President / Owner
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex items-center justify-center p-6 lg:p-12 bg-background lg:col-span-3">
          <div className="w-full max-w-lg">
            <ScrollReveal>
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-lora font-medium text-text-primary mb-4">
                  Let's Build Something Remarkable
                </h1>
                <p className="text-lg text-text-light font-dm-sans leading-relaxed">
                  Tell us about your vision and we'll provide expert guidance on bringing 
                  your outdoor living dreams to reality.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="form-label">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                    {...register('fullName', { required: 'Full name is required' })}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                {/* City/Zip */}
                <div>
                  <label htmlFor="cityZip" className="form-label">
                    Property City/Zip *
                  </label>
                  <input
                    id="cityZip"
                    type="text"
                    placeholder="e.g., Oceanside, CA 92054"
                    className={`form-input ${errors.cityZip ? 'border-red-500' : ''}`}
                    {...register('cityZip', { required: 'Property location is required' })}
                  />
                  {errors.cityZip && (
                    <p className="mt-1 text-sm text-red-500">{errors.cityZip.message}</p>
                  )}
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="form-label">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    className={`form-input ${errors.projectType ? 'border-red-500' : ''}`}
                    {...register('projectType', { required: 'Please select a project type' })}
                  >
                    <option value="">Select project type...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="form-label">
                    Estimated Budget *
                  </label>
                  <select
                    id="budget"
                    className={`form-input ${errors.budget ? 'border-red-500' : ''}`}
                    {...register('budget', { required: 'Please select a budget range' })}
                  >
                    <option value="">Select budget range...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
                  )}
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="description" className="form-label">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Tell us about your vision..."
                    className="form-input resize-none"
                    {...register('description')}
                  />
                </div>

                {/* How Did You Hear */}
                <div>
                  <label htmlFor="howDidYouHear" className="form-label">
                    How Did You Hear About Us?
                  </label>
                  <select
                    id="howDidYouHear"
                    className="form-input"
                    {...register('howDidYouHear')}
                  >
                    <option value="">Select source...</option>
                    {referralSources.map((source) => (
                      <option key={source} value={source}>
                        {source}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Consultation'}
                  </button>
                </div>

                {/* Error Message */}
                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700">{submitError}</p>
                  </div>
                )}
              </form>
            </ScrollReveal>

            {/* Trust Signals */}
            <ScrollReveal delay={0.4}>
              <div className="mt-12 pt-8 border-t border-accent/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs font-dm-sans font-medium text-text-primary">Licensed & Insured</p>
                    <p className="text-xs text-text-light">CSLB #1098601</p>
                  </div>
                  
                  <div>
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <p className="text-xs font-dm-sans font-medium text-text-primary">5.0 Stars</p>
                    <p className="text-xs text-text-light">HomeAdvisor</p>
                  </div>
                  
                  <div>
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <p className="text-xs font-dm-sans font-medium text-text-primary">Free Consultations</p>
                    <p className="text-xs text-text-light">No obligation</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}