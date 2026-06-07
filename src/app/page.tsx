'use client';

import { useState, useEffect } from 'react';
import NewsletterForm from '../components/NewsletterForm';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById('optin-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Is this really free?", a: "Yes. The consultation is completely complimentary with no hidden fees or obligations." },
    { q: "Who is this for?", a: "Service providers and business owners who want to predictably scale their revenue." },
    { q: "What happens during the call?", a: "We analyze your current operations, identify bottlenecks, and map out a custom growth strategy." },
    { q: "How long is the consultation?", a: "The session is kept strictly to 45 minutes to respect your time." },
    { q: "What happens after submitting the form?", a: "You will receive an email with a secure link to my Calendly to reserve your preferred time." },
    { q: "Is this a sales pitch?", a: "No. The primary goal is to provide immediate value and a clear roadmap. If there is a mutual fit for deeper work, we can discuss it, but there is zero pressure." }
  ];

  return (
    <main className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="section hero-bg" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
        {/* Top Navigation & Logo Header */}
        <header className="pt-4 md:pt-6 pb-4 animate-fade-in" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '2rem', paddingRight: '2rem' }}>
          
          <img 
            src="/logo.png" 
            alt="Brand Logo" 
            style={{ 
              height: '32px', 
              width: 'auto', 
              objectFit: 'contain',
              opacity: 0.9
            }} 
          />

          {/* Social Nav Bar */}
          <nav style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href="https://www.instagram.com/bhandari_kritagya?igsh=MTV3OHBicG5kOXBjbQ==" target="_blank" rel="noopener noreferrer" 
               style={{ color: '#ffffff', opacity: 0.5, transition: 'all 0.4s ease', display: 'flex' }} 
               onMouseOver={e => { e.currentTarget.style.opacity = '1'; }} 
               onMouseOut={e => { e.currentTarget.style.opacity = '0.5'; }} 
               aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/share/17RdTg4U4R/" target="_blank" rel="noopener noreferrer" 
               style={{ color: '#ffffff', opacity: 0.5, transition: 'all 0.4s ease', display: 'flex' }} 
               onMouseOver={e => { e.currentTarget.style.opacity = '1'; }} 
               onMouseOut={e => { e.currentTarget.style.opacity = '0.5'; }} 
               aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" 
               style={{ color: '#ffffff', opacity: 0.5, transition: 'all 0.4s ease', display: 'flex' }} 
               onMouseOver={e => { e.currentTarget.style.opacity = '1'; }} 
               onMouseOut={e => { e.currentTarget.style.opacity = '0.5'; }} 
               aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
          </nav>
        </header>
        <div className="container text-center flex flex-col items-center justify-center animate-fade-in delay-200" style={{ flex: 1, paddingBottom: '6rem' }}>
          <h1 className="text-gradient mb-6" style={{ textTransform: 'none', letterSpacing: '-0.02em', lineHeight: 1.05 }}>Build Your Automated Growth Engine</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto 3rem', fontSize: '1.25rem', color: '#B3B3B3', fontWeight: 300 }}>
            Stop trading time for money. Implement systems that acquire clients while you sleep.
          </p>
          <button onClick={scrollToForm} className="btn btn-primary mb-4">
            Reserve My Strategy Call
          </button>
          <p className="text-muted" style={{ fontSize: '0.875rem', marginTop: '1rem', letterSpacing: '0.02em' }}>
            Only 5 spots available this week
          </p>
        </div>
      </section>

      {/* 2. WHAT YOU'LL WALK AWAY WITH */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container text-center">
          <h2 className="mb-16 reveal-on-scroll">What You&apos;ll Walk Away With</h2>
          <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card reveal-on-scroll" style={{ textAlign: 'left', padding: '3rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 500 }}>Clear marketing direction</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ textAlign: 'left', padding: '3rem', transitionDelay: '100ms' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 500 }}>Lead generation opportunities</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ textAlign: 'left', padding: '3rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 500 }}>Action plan</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ textAlign: 'left', padding: '3rem', transitionDelay: '100ms' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 500 }}>Budget clarity</h3>
            </div>
            <div className="card reveal-on-scroll md:col-span-2" style={{ textAlign: 'center', padding: '3rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 500 }}>Immediate next steps</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-16 reveal-on-scroll">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="card reveal-on-scroll" style={{ padding: '4rem 2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', opacity: 0.4, marginBottom: '1.5rem', color: '#B3B3B3' }}>STEP 1</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 500 }}>Apply</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ padding: '4rem 2rem', transitionDelay: '100ms' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', opacity: 0.4, marginBottom: '1.5rem', color: '#B3B3B3' }}>STEP 2</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 500 }}>Book</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ padding: '4rem 2rem', transitionDelay: '200ms' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', opacity: 0.4, marginBottom: '1.5rem', color: '#B3B3B3' }}>STEP 3</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 500 }}>Grow</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container text-center">
          <h2 className="mb-16 reveal-on-scroll">Growth Systems I Build</h2>
          <div className="grid md:grid-cols-2 gap-6" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card reveal-on-scroll" style={{ padding: '2rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 400, color: '#FFFFFF' }}>High-converting websites</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ padding: '2rem', transitionDelay: '50ms' }}>
              <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 400, color: '#FFFFFF' }}>Landing pages that generate leads</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ padding: '2rem', transitionDelay: '100ms' }}>
              <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 400, color: '#FFFFFF' }}>SEO optimization for organic growth</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ padding: '2rem', transitionDelay: '150ms' }}>
              <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 400, color: '#FFFFFF' }}>Email marketing systems</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ padding: '2rem', transitionDelay: '200ms' }}>
              <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 400, color: '#FFFFFF' }}>Meta Ads (Facebook + Instagram)</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ padding: '2rem', transitionDelay: '250ms' }}>
              <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 400, color: '#FFFFFF' }}>Full digital growth strategy</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIMITED AVAILABILITY */}
      <section className="section reveal-on-scroll" style={{ borderTop: '1px solid var(--surface-border)', borderBottom: '1px solid var(--surface-border)', padding: '8rem 0' }}>
        <div className="container text-center">
          <div style={{ fontSize: '4rem', fontWeight: 300, lineHeight: 1, marginBottom: '1rem', color: '#FFFFFF' }}>5</div>
          <h2 className="mb-6" style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase' }}>Spots Available This Week</h2>
          <p className="text-muted" style={{ fontSize: '1.125rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
            Every consultation is kept personal and practical.
          </p>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <h2 className="text-center mb-16 reveal-on-scroll">FAQ</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="card reveal-on-scroll" style={{ padding: '2rem', cursor: 'pointer', marginBottom: '1rem', transitionDelay: `${idx * 50}ms` }} onClick={() => toggleFaq(idx)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 400, color: openFaq === idx ? '#FFFFFF' : '#B3B3B3', transition: 'color 0.3s ease' }}>{faq.q}</h4>
                  <div style={{ fontSize: '1.5rem', fontWeight: 300, transform: openFaq === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)', opacity: 0.5 }}>+</div>
                </div>
                <div style={{ 
                  maxHeight: openFaq === idx ? '200px' : '0', 
                  overflow: 'hidden', 
                  transition: 'max-height 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  opacity: openFaq === idx ? 1 : 0,
                }}>
                  <p style={{ margin: '1.5rem 0 0 0', fontSize: '1rem', color: '#7A7A7A', fontWeight: 300 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FLODESK FORM SECTION */}
      <section id="optin-form" className="section hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center reveal-on-scroll">
          <h2 className="text-gradient mb-6" style={{ fontSize: '3.5rem' }}>Ready to scale?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem', color: '#B3B3B3', fontSize: '1.125rem', fontWeight: 300 }}>
            Fill out the application below to secure your strategy session.
          </p>
          
          <div className="card" style={{ maxWidth: '550px', margin: '0 auto', padding: '4rem 2rem', background: '#0A0A0A', border: '1px solid var(--surface-border)', boxShadow: 'var(--shadow-glow)' }}>
            <h3 className="mb-8" style={{ fontSize: '1.125rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500, color: '#FFFFFF' }}>Apply Now</h3>
            
            {/* Real Flodesk Form */}
            <NewsletterForm />
            
          </div>
        </div>
      </section>
    </main>
  );
}
