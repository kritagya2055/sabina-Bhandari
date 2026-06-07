export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui', background: '#061626', color: 'white' }}>

      {/* TOP SECTION */}
      <header style={{ padding: '20px 0', textAlign: 'center' }}>
        <img src="/logo.png" alt="Logo" style={{ width: 100 }} />
      </header>

      {/* HERO */}
      <section style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>
          Get More Customers Online
        </h1>

        <p style={{ fontSize: '18px', opacity: 0.8, maxWidth: 600, margin: '0 auto' }}>
          Book a free 1:1 consultation and get a simple marketing plan to grow your business.
        </p>

        <a
          href="#form"
          style={{
            display: 'inline-block',
            marginTop: 30,
            padding: '12px 24px',
            background: '#00D4FF',
            color: '#000',
            borderRadius: 30,
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Book Free Call
        </a>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: '60px 20px', maxWidth: 800, margin: '0 auto' }}>
        <h2>Why businesses struggle online</h2>
        <ul style={{ opacity: 0.8, lineHeight: 1.8 }}>
          <li>No customers from social media</li>
          <li>Ads not giving sales</li>
          <li>Confused marketing strategy</li>
          <li>Low quality leads</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: '60px 20px', background: '#0a1f33' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2>What you get</h2>
          <p>
            We analyze your business and give you a simple step-by-step plan to get more customers.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ padding: '60px 20px', maxWidth: 800, margin: '0 auto' }}>
        <h2>How it works</h2>
        <ol style={{ lineHeight: 2 }}>
          <li>Fill the form</li>
          <li>Get booking link by email</li>
          <li>Select time</li>
          <li>Join call</li>
        </ol>
      </section>

      {/* FORM PLACEHOLDER (DO NOT BREAK FLODESK) */}
      <section id="form" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>Book your free consultation</h2>

        <div style={{ marginTop: 20 }}>
          {/* KEEP FLODESK HERE */}
          <div>[Flodesk Form Here - DO NOT CHANGE]</div>
        </div>
      </section>

    </main>
  );
}
