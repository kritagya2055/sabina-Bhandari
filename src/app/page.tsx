'use client';

import NewsletterForm from '../components/NewsletterForm';

export default function Home() {
  const scrollToForm = () => {
    document.getElementById('optin-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="section hero-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center flex flex-col items-center justify-center animate-fade-in">
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full border" style={{ borderColor: 'var(--surface-border)', background: 'var(--surface)' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.05em', fontSize: '0.875rem', textTransform: 'uppercase' }}>Exclusive Invitation</span>
          </div>
          <h1 className="text-gradient">Free Business Growth <br/>Strategy Session</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.25rem' }}>
            Discover the exact roadmap to scale your service business without burning out.
            Claim your free 45-minute strategy session today.
          </p>
          <button onClick={scrollToForm} className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1.25rem 3rem' }}>
            Apply For Your Strategy Session
          </button>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in delay-100">
              <h2 style={{ fontSize: '2.5rem' }}>Are you tired of the <span style={{ color: 'var(--primary)' }}>revenue rollercoaster?</span></h2>
              <p>
                Most service business owners are stuck working IN their business instead of ON it.
                You have the skills, but the predictable client acquisition system is missing.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)' }}>✦</span> Relying too much on unpredictable referrals
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)' }}>✦</span> Income wildly fluctuating month to month
                </li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ color: 'var(--primary)' }}>✦</span> Working 60+ hour weeks and burning out
                </li>
              </ul>
            </div>
            <div className="card text-center animate-fade-in delay-200" style={{ padding: '5rem 3rem', background: 'linear-gradient(180deg, rgba(203,168,100,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>It doesn't have to</h3>
              <h3 style={{ fontSize: '2.5rem', opacity: 0.9 }}>be this way.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What You'll Get Section */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container text-center">
          <h2 className="mb-12">What You'll Get On This Call</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card animate-fade-in delay-100">
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>✧</div>
              <h3 style={{ color: 'var(--foreground)' }}>Clarity</h3>
              <p style={{ margin: 0, fontSize: '1rem' }}>A crystal clear vision of exactly what you need to do to hit your revenue goals.</p>
            </div>
            <div className="card animate-fade-in delay-200">
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>✦</div>
              <h3 style={{ color: 'var(--foreground)' }}>Roadmap</h3>
              <p style={{ margin: 0, fontSize: '1rem' }}>A step-by-step custom roadmap to acquire high-paying clients predictably.</p>
            </div>
            <div className="card animate-fade-in delay-300">
              <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>⚡</div>
              <h3 style={{ color: 'var(--foreground)' }}>Confidence</h3>
              <p style={{ margin: 0, fontSize: '1rem' }}>The exact strategies to scale without working more hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Kritagya Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="card animate-fade-in delay-100" style={{ height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(45deg, rgba(203,168,100,0.1), transparent)' }}>
              <div style={{ opacity: 0.5, fontStyle: 'italic', letterSpacing: '0.1em' }}>[ Kritagya ]</div>
            </div>
            <div className="animate-fade-in delay-200">
              <div style={{ textTransform: 'uppercase', color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.875rem' }}>About The Consultant</div>
              <h2 style={{ marginBottom: '2rem' }}>Meet Kritagya</h2>
              <p>
                Hi, I'm Kritagya. I help service business owners build predictable acquisition systems.
                After helping dozens of businesses scale past their goals, I've distilled the exact process into a repeatable framework.
              </p>
              <p>
                My mission is to help you build a business that serves your life, not the other way around. Let's engineer your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container text-center">
          <h2 className="mb-12">How I Can Help You</h2>
          <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card animate-fade-in delay-100" style={{ textAlign: 'left' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>1</div>
              <h3>Growth Consulting</h3>
              <p style={{ margin: 0 }}>1-on-1 strategic guidance to build your client acquisition machine from the ground up.</p>
            </div>
            <div className="card animate-fade-in delay-200" style={{ textAlign: 'left' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>2</div>
              <h3>Done-For-You Systems</h3>
              <p style={{ margin: 0 }}>We build and implement the funnels and client acquisition systems completely for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who This Is For Section */}
      <section className="section hero-bg">
        <div className="container text-center animate-fade-in">
          <h2 className="text-gradient mb-4">Who This Is For</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.25rem' }}>
            This strategy session is specifically designed for:
          </p>
          <div className="grid md:grid-cols-3 gap-6" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Service Providers</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Making $5k-$20k/month and want to break the ceiling.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Business Owners</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Who are ready to scale without sacrificing their life.</p>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Action Takers</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>Who want real results and are willing to execute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container text-center">
          <h2 className="mb-12">What Others Say</h2>
          <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="card animate-fade-in delay-100" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', left: '2rem', fontSize: '4rem', color: 'rgba(203,168,100,0.2)', fontFamily: 'serif', lineHeight: 1 }}>"</div>
              <p style={{ fontStyle: 'italic', position: 'relative', zIndex: 1, fontSize: '1.1rem' }}>"Kritagya completely transformed our acquisition process. We doubled our revenue in 3 months."</p>
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-border)' }}></div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Sarah J.</h4>
                  <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Agency Owner</span>
                </div>
              </div>
            </div>
            <div className="card animate-fade-in delay-200" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', left: '2rem', fontSize: '4rem', color: 'rgba(203,168,100,0.2)', fontFamily: 'serif', lineHeight: 1 }}>"</div>
              <p style={{ fontStyle: 'italic', position: 'relative', zIndex: 1, fontSize: '1.1rem' }}>"The clarity I got from just one session was worth thousands. Highly recommended."</p>
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface-border)' }}></div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Michael T.</h4>
                  <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Consultant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card mb-4" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem' }}>Is this really free?</h4>
              <p style={{ margin: 0, fontSize: '1rem' }}>Yes, the 45-minute strategy session is 100% free with no obligations whatsoever.</p>
            </div>
            <div className="card mb-4" style={{ padding: '2rem' }}>
              <h4 style={{ fontSize: '1.25rem' }}>Will there be a pitch?</h4>
              <p style={{ margin: 0, fontSize: '1rem' }}>The primary goal is to give you a roadmap. If we feel you're a good fit for our paid programs, we may mention them at the end, but there is absolutely zero pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA & 10. Flodesk Form */}
      <section id="optin-form" className="section hero-bg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center animate-fade-in">
          <h2 className="text-gradient mb-4">Ready to scale your business?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
            Spots are extremely limited. Fill out the application below to secure your strategy session.
          </p>
          
          <div className="card" style={{ maxWidth: '550px', margin: '0 auto', padding: '3rem 2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(203,168,100,0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <h3 className="mb-6" style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>Apply For Your Strategy Session</h3>
            
            {/* Real Flodesk Form */}
            <NewsletterForm />
            
          </div>
        </div>
      </section>
    </main>
  );
}
