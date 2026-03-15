'use client';

import { motion } from 'motion/react';
import { Play, ArrowUpRight, BarChart3, Globe, Cpu, CheckCircle2, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#b4ff39] selection:text-black">
      {/* Navigation (Simplified for standalone copyability) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 py-4 flex items-center justify-between">
        <div className="text-3xl font-display font-bold tracking-tight">nix</div>
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
          <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-tight mb-6">
            We build digital experiences that drive measurable growth.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nix Creative is a full-service digital agency focused on data-driven design, powerful SEO, and AI automations that scale your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-black text-white px-8 py-4 rounded-full font-medium shadow-lg hover:scale-105 transition-transform"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              <Play size={16} />
              See How We Work
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
      <section id="services" className="py-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">What We Do.</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              We bring strategy, creative, and technology together to turn attention into action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-[#b4ff39]/50 transition-colors">
              <Globe className="w-10 h-10 text-[#b4ff39] mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">Web Design & Dev</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Beautiful, high-converting websites optimized for speed and engagement. We build digital storefronts that sell.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-[#b4ff39]/50 transition-colors">
              <BarChart3 className="w-10 h-10 text-[#b4ff39] mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">Data-Driven SEO</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Rank higher and attract organic traffic with our proven search engine optimization strategies.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-white/5 hover:border-[#b4ff39]/50 transition-colors">
              <Cpu className="w-10 h-10 text-[#b4ff39] mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">AI Automations</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Streamline operations, save time, and scale efficiently with intelligent workflows and automations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                How We Operate.
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "Discovery & Strategy", desc: "Deep dive into your business goals, audience, and market landscape." },
                  { title: "Design & Development", desc: "Crafting visually stunning assets and building robust digital infrastructure." },
                  { title: "Launch & Optimize", desc: "Deploying your solution and continuously refining it based on data." }
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-[#b4ff39] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/process/800/1000"
                alt="Our Process"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes / Results */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-16">
            The Results Speak.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#f9f9f9] rounded-3xl">
              <div className="text-5xl font-bold font-display text-black mb-4">+150%</div>
              <div className="text-gray-600 font-medium">Average Organic Traffic Increase</div>
            </div>
            <div className="p-8 bg-[#f9f9f9] rounded-3xl">
              <div className="text-5xl font-bold font-display text-black mb-4">3x</div>
              <div className="text-gray-600 font-medium">Conversion Rate Improvement</div>
            </div>
            <div className="p-8 bg-[#f9f9f9] rounded-3xl">
              <div className="text-5xl font-bold font-display text-black mb-4">98%</div>
              <div className="text-gray-600 font-medium">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 bg-black text-white rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Ready to scale?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's build something extraordinary together.
          </p>
          <a
            href="mailto:hello@nixcreative.agency"
            className="inline-flex items-center gap-3 bg-[#b4ff39] text-black px-10 py-5 rounded-full text-xl font-medium hover:scale-105 transition-transform"
          >
            Get In Touch
            <ArrowUpRight size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}
