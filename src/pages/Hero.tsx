export const Hero = () => {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <h1 className="hero-title" id="intro-title">
        Systems that do the quiet work.
      </h1>

      <p className="hero-intro">
        Software engineer and AI automation engineer based in Bataan, Philippines. I build web
        products end to end: clean interfaces, dependable APIs, and the automations that keep
        repetitive work off people’s desks.
      </p>

      <div className="hero-actions">
        <a
          className="btn btn-primary"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=raeallenretuta.work@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email me
        </a>
        <a className="btn btn-secondary" href="#work">
          See selected work
        </a>
      </div>

      <p className="hero-current">Currently leading AI automation at Agent Genius AI.</p>
    </section>
  )
}

export default Hero
