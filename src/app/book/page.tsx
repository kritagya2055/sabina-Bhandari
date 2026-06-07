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

      <div className="container flex-1" style={{ position: 'relative' }}>
        <div 
          className="calendly-inline-widget" 
          data-url={process.env.NEXT_PUBLIC_CALENDLY_URL} 
          style={{ minWidth: '320px', height: '700px', width: '100%' }}
        />
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
    </main>
  );
}
