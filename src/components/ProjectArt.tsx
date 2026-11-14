import { useEffect, useState } from 'react'
import joyn01 from '../assets/joyn01.png'
import joyn02 from '../assets/joyn02.png'
import joyn03 from '../assets/joyn03.png'
import joyn04 from '../assets/joyn04.png'
import joyn05 from '../assets/joyn05.png'
import trex01 from '../assets/trex01.png'
import trex02 from '../assets/trex02.png'
import trex03 from '../assets/trex03.png'
import wc01 from '../assets/wc01.png'
import wc02 from '../assets/wc02.png'
import timey01 from '../assets/timey01.png'
import timey02 from '../assets/timey02.png'
import timey03 from '../assets/timey03.png'

type ProjectArtProps = {
  id: string
}

type ProjectSlideshowProps = {
  slides: string[]
  className: string
}

const joynSlides = [joyn01, joyn02, joyn03, joyn04, joyn05]
const trexSlides = [trex01, trex02, trex03]
const wcSlides = [wc01, wc02]
const timeySlides = [timey01, timey02, timey03]

const ProjectSlideshow = ({ slides, className }: ProjectSlideshowProps) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 4200)

    return () => window.clearInterval(interval)
  }, [slides.length])

  return (
    <div className={`project-art ${className}`} aria-hidden="true">
      {slides.map((slide, index) => (
        <img
          key={slide}
          className={`project-slide${index === active ? ' is-active' : ''}`}
          src={slide}
          alt=""
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
          draggable={false}
        />
      ))}
    </div>
  )
}

const JoynArt = () => <ProjectSlideshow slides={joynSlides} className="art-joyn-slides" />

const TrexArt = () => <ProjectSlideshow slides={trexSlides} className="art-trex-slides" />

const WcArt = () => <ProjectSlideshow slides={wcSlides} className="art-wc-slides" />

const TimeyArt = () => <ProjectSlideshow slides={timeySlides} className="art-timey-slides" />

export const ProjectArt = ({ id }: ProjectArtProps) => {
  if (id === 'joyn') return <JoynArt />
  if (id === 'trex-voice') return <TrexArt />
  if (id === 'timey') return <TimeyArt />
  if (id === 'wc-calculator') return <WcArt />
  return null
}

export default ProjectArt
