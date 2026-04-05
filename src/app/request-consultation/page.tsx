'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const parallaxRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
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
        {/* Left Side - Parallax Hero Image */}
        <div ref={parallaxRef} className="relative bg-gray-200 hidden lg:block lg:col-span-2 overflow-hidden">
          {/* Parallax Hero Image */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{ y }}
          >
            <div className="absolute inset-0 scale-110">
              <Image
                src="/images/hero/yoder_requestconsultation_hero.jpg"
                alt="Yoder Construction - Premium Outdoor Construction and Design"
                fill
                className="object-cover object-center"
                priority
                quality={95}
              />
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
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
        <div className="flex items-center justify-center p-6 lg:p-12 pb-16 lg:pb-24 bg-background lg:col-span-3">
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
                    className={`w-full inline-block px-8 py-4 bg-accent text-background font-dm-sans font-medium tracking-wide hover:bg-accent/90 transition-colors duration-300 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    style={{
                      borderRadius: '6px',
                      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.borderRadius = '50px';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.borderRadius = '6px';
                      }
                    }}
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

          </div>
        </div>
      </div>
    </div>
  );
}