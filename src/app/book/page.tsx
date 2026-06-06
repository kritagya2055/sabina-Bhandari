'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BookPage() {
  const router = useRouter();

  useEffect(() => {
    // Listen for Calendly booking events
    function isCalendlyEvent(e: MessageEvent) {
      return e.data.event && e.data.event.indexOf('calendly') === 0;
    }

    const handleMessage = (e: MessageEvent) => {
      if (isCalendlyEvent(e)) {
        if (e.data.event === 'calendly.event_scheduled') {
          // Redirect to thank you page after booking
          router.push('/thank-you');
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [router]);

  return (
    <main className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container text-center mb-8">
        <h1 className="text-gradient mb-4">Your Application Has Been Received</h1>
        <p>Please select a time below to schedule your free strategy session.</p>
      </div>

      <div className="container flex-1">
        {/* Placeholder for Calendly Embed */}
        <div style={{ border: '2px dashed var(--border)', borderRadius: 'var(--radius-lg)', padding: '4rem 2rem', textAlign: 'center', backgroundColor: 'var(--surface)', height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h3 style={{ color: 'var(--primary)' }}>Calendly Widget Placeholder</h3>
          <p>The actual Calendly widget will be embedded here.</p>
          <p className="mt-4" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            For demonstration, click the button below to simulate a completed booking.
          </p>
          <button 
            className="btn btn-primary mt-4" 
            onClick={() => window.postMessage({ event: 'calendly.event_scheduled' }, '*')}
          >
            Simulate Booking
          </button>
        </div>
      </div>
    </main>
  );
}
