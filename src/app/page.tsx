'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate Flodesk form submission delay
    setTimeout(() => {
      // ONLY Flodesk form submission triggers next step (Redirect to /book)
      router.push('/book');
    }, 1000);
  };

  const scrollToForm = () => {
    document.getElementById('optin-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* 1. Hero Section */}
      <section className="section hero-bg" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center flex flex-col items-center justify-center">
          <h1 className="text-gradient">Free Business Growth Strategy Session</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Discover the exact roadmap to scale your service business without burning out.
            Claim your free 45-minute strategy session today.
          </p>
          <button onClick={scrollToForm} className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem' }}>
            Yes, I Want My Free Strategy Session
          </button>
        </div>
      </section>

      {/* 2. Problem Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2>Are you tired of the revenue rollercoaster?</h2>
              <p>
                Most service business owners are stuck working IN their business instead of ON it.
                You have the skills, but the predictable client acquisition system is missing.
              </p>
              <ul style={{ listStylePosition: 'inside', lineHeight: '2' }}>
                <li>✅ Relying too much on referrals</li>
                <li>✅ Income fluctuating month to month</li>
                <li>✅ Working 60+ hour weeks</li>
              </ul>
            </div>
            <div className="card text-center" style={{ padding: '4rem 2rem' }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '2rem' }}>It doesn't have to be this way.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What You'll Get Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-8">What You'll Get On This Free Call</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3>🔍 Clarity</h3>
              <p>A crystal clear vision of exactly what you need to do to hit your revenue goals.</p>
            </div>
            <div className="card">
              <h3>🗺️ Roadmap</h3>
              <p>A step-by-step custom roadmap to acquire high-paying clients predictably.</p>
            </div>
            <div className="card">
              <h3>⚡ Confidence</h3>
              <p>The exact strategies to scale without working more hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Kritagya Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div style={{ backgroundColor: '#e5e7eb', width: '100%', height: '400px', borderRadius: 'var(--radius-lg)' }}>
              {/* Image Placeholder */}
            </div>
            <div>
              <h2>Meet Kritagya</h2>
              <p>
                Hi, I'm Kritagya. I help service business owners build predictable acquisition systems.
                After helping dozens of businesses scale past their goals, I've distilled the exact process into a repeatable framework.
              </p>
              <p>
                My mission is to help you build a business that serves your life, not the other way around.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-8">How I Can Help You</h2>
          <div className="grid md:grid-cols-2 gap-8" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card">
              <h3>Growth Consulting</h3>
              <p>1-on-1 strategic guidance to build your client acquisition machine.</p>
            </div>
            <div className="card">
              <h3>Done-For-You Systems</h3>
              <p>We build and implement the funnels and systems for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who This Is For Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white' }}>Who This Is For</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            This strategy session is specifically designed for:
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none' }}>
              <p style={{ color: 'white', margin: 0 }}>Service Providers making $5k-$20k/month</p>
            </div>
            <div className="card" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none' }}>
              <p style={{ color: 'white', margin: 0 }}>Business owners who are ready to scale</p>
            </div>
            <div className="card" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: 'none' }}>
              <p style={{ color: 'white', margin: 0 }}>Action-takers who want real results</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-8">What Others Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <p>"Kritagya completely transformed our acquisition process. We doubled our revenue in 3 months."</p>
              <h4 className="mt-4">- Sarah J.</h4>
            </div>
            <div className="card">
              <p>"The clarity I got from just one session was worth thousands. Highly recommended."</p>
              <h4 className="mt-4">- Michael T.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <h2 className="text-center mb-8">Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="card mb-4">
              <h4>Is this really free?</h4>
              <p style={{ margin: 0 }}>Yes, the 45-minute strategy session is 100% free with no obligations.</p>
            </div>
            <div className="card mb-4">
              <h4>Will there be a pitch?</h4>
              <p style={{ margin: 0 }}>The primary goal is to give you a roadmap. If we feel you're a good fit for our paid programs, we may mention them at the end, but there is zero pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="section text-center">
        <div className="container">
          <h2 className="text-gradient">Ready to scale your business?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Spots are extremely limited. Fill out the application below to secure your strategy session.
          </p>
        </div>
      </section>

      {/* 10. Flodesk Form Placeholder */}
      <section id="optin-form" className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h3 className="text-center">Apply For Your Strategy Session</h3>
            <p className="text-center mb-8" style={{ fontSize: '0.9rem' }}>
              (Placeholder for Flodesk Form)
            </p>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Apply Now'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
