export default function BookPage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#0A0A0A',
      color: '#FFFFFF',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Book Your Strategy Call
      </h1>

      <p style={{
        color: '#B3B3B3',
        maxWidth: '600px',
        marginBottom: '2rem'
      }}>
        Select a time that works for you below.
      </p>

      {/* CALENDLY PLACEHOLDER */}
      <div style={{
        width: '100%',
        maxWidth: '700px',
        height: '700px',
        border: '1px solid #2A2A2A'
      }}>
        <p style={{ color: '#7A7A7A', marginTop: '2rem' }}>
          Calendly Embed Goes Here
        </p>
      </div>
    </main>
  );
}
