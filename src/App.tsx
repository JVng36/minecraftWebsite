import './App.css'

const aboutItems = [
  'Small-community survival server focused on long-term builds and steady progression.',
  'Player-driven economy, collaborative projects, and regular events to keep the world active.',
  'Simple ruleset built around fair play, respect, and a stable experience for returning players.',
]

const joinSteps = [
  'Open Minecraft Java Edition and head to Multiplayer.',
  'Add a server entry using your server address.',
  'Join the world, read the rules, and start building.',
]

const technicalDetails = [
  ['Server Address', 'play.yourserver.net'],
  ['Version', '1.21.x'],
  ['Mode', 'Survival SMP'],
  ['Location', 'North America'],
]

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <nav className="top-nav" aria-label="Primary">
          <a href="#welcome">Welcome</a>
          <a href="#about">About</a>
          <a href="#join-server">Join Server</a>
          <a href="#technical">Technical</a>
        </nav>
      </header>

      <main className="doc-shell">
        <section className="doc-section hero-section" id="welcome">
          <p className="section-kicker">Welcome</p>
          <h1>Your Minecraft server, presented like a proper home page.</h1>
          <p className="lead">
            This layout keeps the content centered and readable, more like a blog
            or documentation page than a full-width landing page. It is built for
            text, updates, and server details without stretching everything to the
            edges of the screen.
          </p>
          <p>
            Use this section for your server introduction, community tone, and a
            quick explanation of what makes your world worth joining.
          </p>
        </section>

        <section className="doc-section" id="about">
          <p className="section-kicker">About</p>
          <h2>What players should know before they join.</h2>
          <p>
            The site now follows a narrower reading column so longer paragraphs,
            announcements, and guides feel intentional instead of stretched. This
            works better for server lore, rules, FAQs, and changelogs.
          </p>
          <div className="note-list">
            {aboutItems.map((item) => (
              <article className="note-card" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="doc-section" id="join-server">
          <p className="section-kicker">Join Server</p>
          <h2>Simple instructions for getting into the world.</h2>
          <p>
            Keep the join flow obvious. This section should answer the common
            questions immediately: what edition to use, what IP to enter, and
            whether players should join Discord first.
          </p>
          <ol className="steps">
            {joinSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="callout">
            <strong>Server IP:</strong> play.yourserver.net
          </div>
        </section>

        <section className="doc-section" id="technical">
          <p className="section-kicker">Technical</p>
          <h2>Connection details and server information.</h2>
          <p>
            This area is suited for versions, supported mods, hardware notes,
            backups, uptime, or any technical expectations players should be aware
            of before they log in.
          </p>
          <dl className="tech-grid">
            {technicalDetails.map(([label, value]) => (
              <div className="tech-item" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
    </div>
  )
}

export default App
