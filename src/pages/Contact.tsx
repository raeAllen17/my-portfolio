export const Contact = () => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 className="contact-title" id="contact-title">
        Tell me what’s slowing you down.
      </h2>

      <p className="contact-body">
        I’m open to software engineering and automation work, from a focused build to a workflow
        that needs untangling. Email is the fastest way to reach me.
      </p>

      <a
        className="contact-email"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=allenretuta10@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        allenretuta10@gmail.com
        <span className="visually-hidden"> (opens Gmail in a new tab)</span>
      </a>

      <div className="contact-meta">
        <a href="https://github.com/raeAllen17" target="_blank" rel="noreferrer">
          GitHub
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        <span>Bataan, Philippines</span>
      </div>
    </section>
  )
}

export default Contact
