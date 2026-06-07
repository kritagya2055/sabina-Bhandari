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
    { q: "Is this really free?", a: "Yes, the 45-minute strategy session is 100% free with no obligations whatsoever." },
    { q: "Who is this for?", a: "Service providers and business owners making $5k-$20k/month who want to break the ceiling and scale without sacrificing their life." },
    { q: "What happens during the call?", a: "We analyze your business, identify bottlenecks, and give you a custom step-by-step roadmap to acquire high-paying clients predictably." },
    { q: "How long is the consultation?", a: "The strategy session lasts exactly 45 minutes." },
    { q: "Do I need a website?", a: "Not necessarily, but it helps. We will discuss exactly what assets you need to succeed during our call." },
    { q: "What happens after submitting the form?", a: "You will receive an email with a private link to my Calendly to pick a time that works for you." },
    { q: "Is this a sales call?", a: "The primary goal is to give you a roadmap. If we feel you're a good fit for our paid programs, we may mention them at the end, but there is absolutely zero pressure." }
  ];

  return (
    <main className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="section hero-bg" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
        {/* Top Navigation & Logo Header */}
        <header className="pt-2 md:pt-3 pb-4 animate-fade-in" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Social Nav Bar */}
          <nav style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '0 2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
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
            </div>
          </nav>

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
        </header>
        <div className="container text-center flex flex-col items-center justify-center animate-fade-in delay-200" style={{ flex: 1, paddingBottom: '6rem' }}>
          <div className="mb-8 inline-block px-5 py-2 rounded-full border" style={{ borderColor: 'var(--surface-border)', background: 'var(--surface)' }}>
            <span style={{ color: '#ffffff', fontWeight: 500, letterSpacing: '0.1em', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.7 }}>Exclusive Invitation</span>
          </div>
          <h1 className="text-gradient mb-6" style={{ textTransform: 'none', letterSpacing: '-0.02em', lineHeight: 1.05 }}>Engineer Your<br/>Business Growth</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto 3rem', fontSize: '1.25rem', color: '#999999', fontWeight: 300 }}>
            Discover the exact roadmap to scale your service business predictably.
            Claim your free 45-minute strategy session today.
          </p>
          <button onClick={scrollToForm} className="btn btn-primary">
            Apply For Your Strategy Session
          </button>
        </div>
      </section>

      {/* 2. AFTER THE CALL YOU'LL HAVE */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container text-center">
          <h2 className="mb-16 reveal-on-scroll">After The Call You'll Have</h2>
          <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card reveal-on-scroll" style={{ textAlign: 'left', padding: '3rem' }}>
              <div style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', marginBottom: '2rem', opacity: 0.5 }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 500 }}>Marketing Diagnosis</h3>
              <p style={{ margin: 0, fontSize: '1rem', color: '#888', fontWeight: 300 }}>A complete breakdown of what's currently holding your revenue back.</p>
            </div>
            <div className="card reveal-on-scroll" style={{ textAlign: 'left', padding: '3rem', transitionDelay: '100ms' }}>
              <div style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', marginBottom: '2rem', opacity: 0.5 }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 500 }}>Custom Growth Plan</h3>
              <p style={{ margin: 0, fontSize: '1rem', color: '#888', fontWeight: 300 }}>A personalized strategy tailored to your exact service and market.</p>
            </div>
            <div className="card reveal-on-scroll" style={{ textAlign: 'left', padding: '3rem' }}>
              <div style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', marginBottom: '2rem', opacity: 0.5 }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 500 }}>Clear Next Steps</h3>
              <p style={{ margin: 0, fontSize: '1rem', color: '#888', fontWeight: 300 }}>Actionable tasks you can implement immediately to see results.</p>
            </div>
            <div className="card reveal-on-scroll" style={{ textAlign: 'left', padding: '3rem', transitionDelay: '100ms' }}>
              <div style={{ width: '6px', height: '6px', background: '#fff', borderRadius: '50%', marginBottom: '2rem', opacity: 0.5 }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 500 }}>Budget Recommendations</h3>
              <p style={{ margin: 0, fontSize: '1rem', color: '#888', fontWeight: 300 }}>How to allocate your resources for maximum ROI.</p>
            </div>
            <div className="card reveal-on-scroll md:col-span-2" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500 }}>Practical Roadmap</h3>
              <p style={{ margin: 0, fontSize: '1.125rem', color: '#888', fontWeight: 300, maxWidth: '600px', marginInline: 'auto' }}>A step-by-step framework to transition from unpredictable referrals to a scalable acquisition machine.</p>
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
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', opacity: 0.4, marginBottom: '1.5rem' }}>STEP 1</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 500 }}>Fill out the form</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ padding: '4rem 2rem', transitionDelay: '100ms' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', opacity: 0.4, marginBottom: '1.5rem' }}>STEP 2</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 500 }}>Choose a time</h3>
            </div>
            <div className="card reveal-on-scroll" style={{ padding: '4rem 2rem', transitionDelay: '200ms' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', opacity: 0.4, marginBottom: '1.5rem' }}>STEP 3</div>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 500 }}>Get your strategy call</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIMITED AVAILABILITY */}
      <section className="section reveal-on-scroll" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)', padding: '8rem 0' }}>
        <div className="container text-center">
          <h2 className="mb-8" style={{ fontSize: '2.5rem', fontWeight: 400, letterSpacing: '-0.02em', color: '#e0e0e0' }}>Only a few consultation spots are available each week.</h2>
          <div className="inline-block px-8 py-4 rounded-md" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.875rem', color: '#ffffff' }}>
              5 Strategy Call Slots Available
            </span>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-16 reveal-on-scroll">FAQ</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="card reveal-on-scroll" style={{ padding: '2rem', cursor: 'pointer', marginBottom: '1rem', transitionDelay: `${idx * 50}ms` }} onClick={() => toggleFaq(idx)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 400, color: openFaq === idx ? '#fff' : '#ccc', transition: 'color 0.3s ease' }}>{faq.q}</h4>
                  <div style={{ fontSize: '1.5rem', fontWeight: 300, transform: openFaq === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)', opacity: 0.5 }}>+</div>
                </div>
                <div style={{ 
                  maxHeight: openFaq === idx ? '200px' : '0', 
                  overflow: 'hidden', 
                  transition: 'max-height 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  opacity: openFaq === idx ? 1 : 0,
                }}>
                  <p style={{ margin: '1.5rem 0 0 0', fontSize: '1rem', color: '#888', fontWeight: 300 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FLODESK FORM SECTION */}
      <section id="optin-form" className="section hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center reveal-on-scroll">
          <h2 className="text-gradient mb-6" style={{ fontSize: '3.5rem' }}>Ready to scale?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem', color: '#888', fontSize: '1.125rem', fontWeight: 300 }}>
            Fill out the application below to secure your strategy session.
          </p>
          
          <div className="card" style={{ maxWidth: '550px', margin: '0 auto', padding: '4rem 2rem', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}>
            <h3 className="mb-8" style={{ fontSize: '1.125rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 500, color: '#e0e0e0' }}>Apply Now</h3>
            
            {/* Real Flodesk Form */}
            <NewsletterForm />
            
          </div>
        </div>
      </section>
    </main>
  );
}
