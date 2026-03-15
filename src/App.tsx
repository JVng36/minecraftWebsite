import './App.css'

const highlights = [
  {
    title: 'Survival With Progression',
    text: 'Build a long-term base, unlock server events, and keep your world moving forward with friends.',
  },
  {
    title: 'Community-First',
    text: 'Join a server shaped around regular players, shared projects, and a clean, fair ruleset.',
  },
  {
    title: 'Always Something To Do',
    text: 'Seasonal builds, PvE challenges, marketplace trading, and community competitions keep the map active.',
  },
]

const steps = [
  'Launch Minecraft Java Edition.',
  'Open Multiplayer and add the server.',
  'Paste your server IP and jump in.',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Minecraft Server</p>
          <h1>Build after dark.</h1>
          <p className="hero-text">
            A dark-mode home page for your Minecraft community with a bold landing
            section, server info, and clear calls to join the world.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#join">
              Join The Server
            </a>
            <a className="button secondary" href="#about">
              Explore Features
            </a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>Version</dt>
              <dd>1.21.x</dd>
            </div>
            <div>
              <dt>Mode</dt>
              <dd>Survival SMP</dd>
            </div>
            <div>
              <dt>Region</dt>
              <dd>North America</dd>
            </div>
          </dl>
        </div>

        <aside className="server-panel" id="join">
          <div className="server-panel__header">
            <span className="status-dot" aria-hidden="true" />
            <p>Server online</p>
          </div>
          <h2>play.yourserver.net</h2>
          <p className="server-panel__text">
            Replace this with your real IP, Discord invite, whitelist notes, or
            donation link.
          </p>
          <div className="server-meta">
            <div>
              <span>Players</span>
              <strong>24 / 80</strong>
            </div>
            <div>
              <span>Uptime</span>
              <strong>99.9%</strong>
            </div>
          </div>
          <a className="button primary full-width" href="https://discord.com" target="_blank" rel="noreferrer">
            Join Discord
          </a>
        </aside>
      </section>

      <section className="content-grid" id="about">
        <div className="section-heading">
          <p className="eyebrow">Why Players Stay</p>
          <h2>A server page with structure, not filler.</h2>
        </div>
        <div className="card-grid">
          {highlights.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="details-grid">
        <article className="info-card">
          <p className="eyebrow">How To Play</p>
          <h2>Get in fast.</h2>
          <ol>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="info-card accent-card">
          <p className="eyebrow">What To Customize</p>
          <h2>Easy placeholders to swap.</h2>
          <ul>
            <li>Server name and tagline</li>
            <li>Real IP and supported versions</li>
            <li>Rules, events, mods, or store links</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
