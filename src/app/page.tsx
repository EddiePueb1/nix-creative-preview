'use client';

import React from 'react'; // Added React import
import { motion } from 'motion/react';
import { Play, ArrowUpRight, BarChart3, Globe, Cpu, Sparkles, Target, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function PreviewPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      access_key: "d068f863-fd50-4169-a849-9e1d2d2d51e0",
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#b4ff39] selection:text-black">
      {/* Navigation (Simplified for standalone copyability) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-3xl font-display font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          nix
        </button>
        <a
          href="#contact"
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-black/10 hover:border-transparent hover:bg-[#b4ff39] transition-all text-sm font-medium group"
        >
          Let's Talk
          <MessageCircle size={16} />
        </a>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-block bg-black/5 border border-black/10 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b4ff39] animate-pulse"></span>
              System Update in Progress
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-tight mb-6">
            We are engineering the next generation of Nix.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our infrastructure is currently undergoing a massive upgrade. We're deploying advanced data-driven design systems, technical SEO architectures, and autonomous AI workflows. We'll be online soon.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-black text-white px-8 py-4 rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
            >
              Let's Build Together
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              <Sparkles size={16} />
              Explore Our Services
            </a>
          </div>
        </motion.div>

        <div className="relative w-full h-[60vh] rounded-[2rem] overflow-hidden bg-gray-200">
          <img
            src="https://picsum.photos/seed/nix-hero/1920/1080"
            alt="Nix Creative Team"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {/* What We Do Summary */}
      <section id="services" className="py-24 bg-[#111111] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What We Do.</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              We bring strategy, creative, and technology together to turn attention into action.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
          >
            {/* Service 1 */}
            <div className="bg-[#1a1a1a] p-8 md:p-8 rounded-3xl border border-white/5 hover:border-[#b4ff39]/50 transition-colors w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <Globe className="w-10 h-10 text-[#b4ff39] mb-6" />
              <h3 className="text-xl font-display font-bold mb-4">Web Design & Dev</h3>
              <p className="text-gray-400 mb-2 leading-relaxed text-sm">
                Beautiful, high-converting websites optimized for speed and engagement.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-[#1a1a1a] p-8 md:p-8 rounded-3xl border border-white/5 hover:border-[#b4ff39]/50 transition-colors w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <BarChart3 className="w-10 h-10 text-[#b4ff39] mb-6" />
              <h3 className="text-xl font-display font-bold mb-4">Data-Driven SEO</h3>
              <p className="text-gray-400 mb-2 leading-relaxed text-sm">
                Rank higher and attract organic traffic with proven optimization strategies.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-[#1a1a1a] p-8 md:p-8 rounded-3xl border border-white/5 hover:border-[#b4ff39]/50 transition-colors w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <Cpu className="w-10 h-10 text-[#b4ff39] mb-6" />
              <h3 className="text-xl font-display font-bold mb-4">AI Automations</h3>
              <p className="text-gray-400 mb-2 leading-relaxed text-sm">
                Streamline operations and scale efficiently with intelligent workflows.
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-[#1a1a1a] p-8 md:p-8 rounded-3xl border border-white/5 hover:border-[#b4ff39]/50 transition-colors w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <Sparkles className="w-10 h-10 text-[#b4ff39] mb-6" />
              <h3 className="text-xl font-display font-bold mb-4">Branding</h3>
              <p className="text-gray-400 mb-2 leading-relaxed text-sm">
                Elevate your identity with memorable branding that resonates with audiences.
              </p>
            </div>
            {/* Service 5 */}
            <div className="bg-[#1a1a1a] p-8 md:p-8 rounded-3xl border border-white/5 hover:border-[#b4ff39]/50 transition-colors w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm">
              <Target className="w-10 h-10 text-[#b4ff39] mb-6" />
              <h3 className="text-xl font-display font-bold mb-4">Paid Media & Ads</h3>
              <p className="text-gray-400 mb-2 leading-relaxed text-sm">
                Precision-targeted campaigns that maximize ROI and drive instant acquisition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-24 bg-[#f5f5f5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                How We Operate.
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "Discovery & Strategy", desc: "Deep dive into your business goals, audience, and market landscape." },
                  { title: "Design & Development", desc: "Crafting visually stunning assets and building robust digital infrastructure." },
                  { title: "Launch & Optimize", desc: "Deploying your solution and continuously refining it based on data." }
                ].map((step, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 bg-[#b4ff39] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Collaborative Process"
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes / Results */}
      <section className="py-24 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 md:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-16">
            The Results Speak.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "+150%", label: "Average Organic Traffic Increase" },
              { stat: "3x", label: "Conversion Rate Improvement" },
              { stat: "98%", label: "Client Retention Rate" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                className="p-8 bg-[#f9f9f9] rounded-3xl"
              >
                <div className="text-5xl font-bold font-display text-black mb-4">{item.stat}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-32 bg-black text-white rounded-t-[3rem] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-4 md:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Ready to scale?
            </h2>
            <p className="text-xl text-gray-400">
              Let's build something extraordinary together. Fill out the form below and our team will get back to you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#111111] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 block">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#b4ff39] focus:ring-1 focus:ring-[#b4ff39] transition-all text-white placeholder-gray-600"
                />
              </div>

              {/* Company field */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-300 block">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Acme Corp"
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#b4ff39] focus:ring-1 focus:ring-[#b4ff39] transition-all text-white placeholder-gray-600"
                />
              </div>
            </div>

            {/* Email & Phone fields */ }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 block">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#b4ff39] focus:ring-1 focus:ring-[#b4ff39] transition-all text-white placeholder-gray-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300 block">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="(555) 123-4567"
                  className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#b4ff39] focus:ring-1 focus:ring-[#b4ff39] transition-all text-white placeholder-gray-600"
                />
              </div>
            </div>

            {/* Message field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300 block">How can we help you?</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project, goals, and timeline..."
                className="w-full bg-[#1a1a1a] border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#b4ff39] focus:ring-1 focus:ring-[#b4ff39] transition-all text-white placeholder-gray-600 resize-none"
              ></textarea>
            </div>

            {/* Submit Button & Feedback */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className={`w-full flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-lg font-bold transition-colors mt-8 ${submitStatus === 'success'
                  ? 'bg-green-500 text-black cursor-not-allowed'
                  : 'bg-[#b4ff39] text-black hover:bg-[#9de42b]'
                } ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {isSubmitting ? 'Sending Request...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              {submitStatus === 'success' ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <ArrowUpRight size={20} />
              )}
            </button>

            {submitStatus === 'error' && (
              <p className="text-red-400 text-center text-sm font-medium mt-4">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-white/10 text-center">
        <p className="text-sm text-gray-500 font-medium">
          © 2026 Nix Creative, operated by Blue Analytics and Consulting LLC
        </p>
      </footer>
    </div>
  );
}
