'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BookPage() {
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.event === 'calendly.event_scheduled') {
        window.location.href = 'https://sabina-bhandari.vercel.app/thank-you';
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL 
    ? `${process.env.NEXT_PUBLIC_CALENDLY_URL}${process.env.NEXT_PUBLIC_CALENDLY_URL.includes('?') ? '&' : '?'}embed_domain=sabina-bhandari.vercel.app&embed_type=Inline`
    : '';

  return (
    <main className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container text-center mb-8">
        <h1 className="text-gradient mb-4" style={{ letterSpacing: '-0.02em', fontWeight: 600 }}>Your Application Has Been Received</h1>
        <p style={{ color: '#B3B3B3', fontSize: '1.25rem', fontWeight: 300 }}>Please select a time below to schedule your free strategy session.</p>
      </div>

      <div className="container flex-1" style={{ position: 'relative' }}>
        {calendlyUrl && (
          <iframe 
            src={calendlyUrl} 
            width="100%" 
            height="700px" 
            frameBorder="0" 
            style={{ border: 'none', backgroundColor: 'transparent', borderRadius: 'var(--radius-lg)' }}
          />
        )}
      </div>
    </main>
  );
}
