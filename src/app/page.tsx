'use client';

import { useState } from 'react';
import NewsletterForm from '../components/NewsletterForm';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        <header className="pt-3 md:pt-4 pb-4" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Social Nav Bar */}
          <nav style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '0 2rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              <a href="https://www.instagram.com/bhandari_kritagya?igsh=MTV3OHBicG5kOXBjbQ==" target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#ffffff', opacity: 0.7, transition: 'all 0.3s ease', display: 'flex' }} 
                 onMouseOver={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-2px)'; }} 
                 onMouseOut={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'translateY(0)'; }} 
                 aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/share/17RdTg4U4R/" target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#ffffff', opacity: 0.7, transition: 'all 0.3s ease', display: 'flex' }} 
                 onMouseOver={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-2px)'; }} 
                 onMouseOut={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'translateY(0)'; }} 
                 aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" 
                 style={{ color: '#ffffff', opacity: 0.7, transition: 'all 0.3s ease', display: 'flex' }} 
                 onMouseOver={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(-2px)'; }} 
                 onMouseOut={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'translateY(0)'; }} 
                 aria-label="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </div>
          </nav>

          <img 
            src="/logo.png" 
            alt="Brand Logo" 
            className="animate-fade-in"
            style={{ 
              height: '36px', 
              width: 'auto', 
              objectFit: 'contain',
              opacity: 0.95
            }} 
          />
        </header>
        <div className="container text-center flex flex-col items-center justify-center animate-fade-in" style={{ flex: 1, paddingBottom: '6rem' }}>
          <div className="mb-6 inline-block px-5 py-2 rounded-full border" style={{ borderColor: 'var(--surface-border)', background: 'var(--surface)' }}>
            <span style={{ color: '#ffffff', fontWeight: 500, letterSpacing: '0.08em', fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8 }}>Exclusive Invitation</span>
          </div>
          <h1 className="text-gradient mb-6" style={{ textTransform: 'none' }}>Engineer Your<br/>Business Growth</h1>
          <p style={{ maxWidth: '650px', margin: '0 auto 3rem', fontSize: '1.25rem', color: '#a0a0a0' }}>
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
          <h2 className="mb-12">After The Call You'll Have</h2>
          <div className="grid md:grid-cols-2 gap-6" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card animate-fade-in delay-100" style={{ textAlign: 'left', padding: '2.5rem' }}>
              <div style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Marketing Diagnosis</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>A complete breakdown of what's currently holding your revenue back.</p>
            </div>
            <div className="card animate-fade-in delay-200" style={{ textAlign: 'left', padding: '2.5rem' }}>
              <div style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Custom Growth Plan</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>A personalized strategy tailored to your exact service and market.</p>
            </div>
            <div className="card animate-fade-in delay-300" style={{ textAlign: 'left', padding: '2.5rem' }}>
              <div style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Clear Next Steps</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Actionable tasks you can implement immediately to see results.</p>
            </div>
            <div className="card animate-fade-in delay-100" style={{ textAlign: 'left', padding: '2.5rem' }}>
              <div style={{ width: '8px', height: '8px', background: '#fff', borderRadius: '50%', marginBottom: '1.5rem' }}></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Budget Recommendations</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>How to allocate your resources for maximum ROI.</p>
            </div>
            <div className="card animate-fade-in delay-200 md:col-span-2" style={{ textAlign: 'center', padding: '2.5rem', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Practical Roadmap</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', maxWidth: '600px', marginInline: 'auto' }}>A step-by-step framework to transition from unpredictable referrals to a scalable acquisition machine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="card animate-fade-in delay-100" style={{ padding: '3rem 2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem' }}>STEP 1</div>
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Fill out the form</h3>
            </div>
            <div className="card animate-fade-in delay-200" style={{ padding: '3rem 2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem' }}>STEP 2</div>
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Choose a time</h3>
            </div>
            <div className="card animate-fade-in delay-300" style={{ padding: '3rem 2rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', opacity: 0.5, marginBottom: '1rem' }}>STEP 3</div>
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Get your strategy call</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIMITED AVAILABILITY */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container text-center animate-fade-in">
          <h2 className="mb-6" style={{ fontSize: '2rem' }}>Only a few consultation spots are available each week.</h2>
          <div className="inline-block px-6 py-3 rounded-md" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.875rem' }}>
              5 Strategy Call Slots Available
            </span>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12">FAQ</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="card mb-4" style={{ padding: '1.5rem 2rem', cursor: 'pointer', transition: 'all 0.2s ease' }} onClick={() => toggleFaq(idx)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 500 }}>{faq.q}</h4>
                  <div style={{ fontSize: '1.5rem', fontWeight: 300, transform: openFaq === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease' }}>+</div>
                </div>
                <div style={{ 
                  maxHeight: openFaq === idx ? '200px' : '0', 
                  overflow: 'hidden', 
                  transition: 'max-height 0.3s ease',
                  opacity: openFaq === idx ? 1 : 0,
                }}>
                  <p style={{ margin: '1rem 0 0 0', fontSize: '0.95rem', color: '#a0a0a0' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FLODESK FORM SECTION */}
      <section id="optin-form" className="section hero-bg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center animate-fade-in">
          <h2 className="text-gradient mb-4">Ready to scale?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: '#a0a0a0' }}>
            Fill out the application below to secure your strategy session.
          </p>
          
          <div className="card" style={{ maxWidth: '550px', margin: '0 auto', padding: '3rem 2rem', background: '#111', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            <h3 className="mb-6" style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Apply Now</h3>
            
            {/* Real Flodesk Form */}
            <NewsletterForm />
            
          </div>
        </div>
      </section>
    </main>
  );
}
