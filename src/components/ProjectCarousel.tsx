type ProjectCarouselProps = {
  slides: string[]
  title: string
  kind: string
  index: number
  tone?: string
}

const ProjectCarousel = ({ slides, title, kind, index, tone }: ProjectCarouselProps) => {
  const label = String(index + 1).padStart(2, '0')

  return (
    <div className={`project-carousel${tone ? ` ${tone}` : ''}`}>
      <div className="carousel-stage" aria-hidden="true">
        <div
          className="carousel-track"
          style={{ animationDuration: `${slides.length * 8}s` }}
        >
          {[0, 1].map((copy) => (
            <div className="carousel-group" key={copy}>
              {slides.map((slide, slideIndex) => (
                <div className="carousel-frame" key={`${copy}-${slide}`}>
                  <img
                    src={slide}
                    alt=""
                    loading={copy === 0 && slideIndex === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-caption">
        <p className="carousel-kicker">
          <span className="carousel-index">{label}</span>
          {kind}
        </p>
        <h3 className="carousel-title">{title}</h3>
      </div>
    </div>
  )
}

export default ProjectCarousel
