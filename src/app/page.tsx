export default function Home() {
  return (
    <main className="bg-[#061626] text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        
        {/* Logo placeholder */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-28 mb-10 opacity-90"
        />

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Struggling to get more customers online?
        </h1>

        <p className="mt-5 text-lg text-gray-300 max-w-2xl">
          Book a FREE 1:1 digital marketing consultation and get a clear plan to grow your business with simple strategies.
        </p>

        <a
          href="#form"
          className="mt-8 bg-cyan-500 hover:bg-cyan-400 text-black font-medium px-6 py-3 rounded-full transition"
        >
          Book your FREE call now
        </a>

        <p className="mt-4 text-sm text-gray-400">
          No payment required • 100% free consultation
        </p>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why most businesses struggle online
        </h2>

        <ul className="space-y-4 text-gray-300">
          <li>• Posting on Facebook/Instagram but not getting customers</li>
          <li>• Boosting ads but no real sales</li>
          <li>• Confused about marketing strategy</li>
          <li>• Getting random low-quality leads</li>
          <li>• No consistent system for customers</li>
        </ul>
      </section>

      {/* SOLUTION */}
      <section className="py-20 px-6 bg-[#0a1f33]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            What you will get in this free call
          </h2>

          <p className="text-gray-300">
            We will analyze your business, identify what is not working, and give you a simple step-by-step marketing plan you can start using immediately.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          How it works
        </h2>

        <div className="space-y-4 text-gray-300">
          <p>1. Fill the form below</p>
          <p>2. Receive email with booking link</p>
          <p>3. Select your time</p>
          <p>4. Join 1:1 consultation call</p>
          <p>5. Get your free marketing plan</p>
        </div>
      </section>

      {/* FORM WRAPPER */}
      <section id="form" className="py-20 px-6 bg-[#061626]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Book your FREE consultation
          </h2>

          <p className="text-gray-400 mb-10">
            Fill out the form below and we will contact you with next steps.
          </p>

          {/* FLODESK FORM PLACEHOLDER - DO NOT MODIFY LOGIC */}
          <div className="bg-[#0a1f33] p-6 rounded-xl border border-gray-700">
            {/* Flodesk embed stays here unchanged */}
            <p className="text-gray-500">
              [Flodesk Form Embed Here]
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
