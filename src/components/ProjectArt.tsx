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
import ProjectCarousel from './ProjectCarousel'

type ProjectArtProps = {
  id: string
  title: string
  kind: string
  index: number
}

const joynSlides = [joyn01, joyn02, joyn03, joyn04, joyn05]
const trexSlides = [trex01, trex02, trex03]
const wcSlides = [wc01, wc02]
const timeySlides = [timey01, timey02, timey03]

const artConfig: Record<string, { slides: string[]; tone: string }> = {
  joyn: { slides: joynSlides, tone: 'tone-pine' },
  'trex-voice': { slides: trexSlides, tone: 'tone-pine' },
  timey: { slides: timeySlides, tone: 'tone-paper' },
  'wc-calculator': { slides: wcSlides, tone: 'tone-paper' },
}

export const ProjectArt = ({ id, title, kind, index }: ProjectArtProps) => {
  const config = artConfig[id]
  if (!config) return null

  return (
    <ProjectCarousel
      slides={config.slides}
      title={title}
      kind={kind}
      index={index}
      tone={config.tone}
    />
  )
}

export default ProjectArt
