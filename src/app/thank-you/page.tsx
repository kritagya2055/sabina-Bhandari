export default function ThankYouPage() {
  return (
    <main className="section text-center" style={{ minHeight: '100vh' }}>
      <div className="container">
        <h1 className="text-gradient mb-4">You're All Set!</h1>
        <p className="mb-8" style={{ fontSize: '1.25rem' }}>
          Your strategy session has been confirmed. Please watch the video below before our call.
        </p>

        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '0', overflow: 'hidden' }}>
          <div style={{ aspectRatio: '16/9', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <iframe 
              src={process.env.NEXT_PUBLIC_VIMEO_URL?.replace('vimeo.com/', 'player.vimeo.com/video/')} 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>

        <div className="card mt-8" style={{ maxWidth: '800px', margin: '2rem auto 0', textAlign: 'left' }}>
          <h3 className="mb-4">How to prepare for our call:</h3>
          <ul style={{ listStylePosition: 'inside', lineHeight: '2' }}>
            <li>📍 Find a quiet room with a good internet connection</li>
            <li>💻 Join from a laptop or desktop computer (no phones please)</li>
            <li>📝 Have your current revenue numbers ready</li>
            <li>⏱️ Show up 2 minutes early</li>
          </ul>
          <p className="mt-8 mb-0 font-medium">
            I'm looking forward to helping you build your acquisition system!
          </p>
        </div>
      </div>
    </main>
  );
}
