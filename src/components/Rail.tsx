import me from '../assets/me.png'
import { useActiveSection } from '../hooks/useActiveSection'

const sections = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'contact', label: 'Contact' },
] as const

const sectionIds = sections.map((section) => section.id)

export const Rail = () => {
  const active = useActiveSection(sectionIds)

  return (
    <aside className="rail">
      <div className="rail-identity">
        <img
          className="rail-portrait"
          src={me}
          alt="Rae Allen Retuta"
          width={52}
          height={52}
        />
        <div>
          <p className="rail-name">Rae Allen Retuta</p>
          <p className="rail-role">
            <span>Software engineer</span>
            <span>AI automation engineer</span>
          </p>
        </div>
      </div>

      <nav className="rail-nav" aria-label="Sections">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active === section.id ? 'location' : undefined}
          >
            {section.label}
          </a>
        ))}
      </nav>

      <div className="rail-foot">
        <p className="rail-place">Bataan, Philippines</p>
        <a href="mailto:allenretuta10@gmail.com">allenretuta10@gmail.com</a>
        <a href="https://github.com/raeAllen17" target="_blank" rel="noreferrer">
          GitHub profile
        </a>
      </div>
    </aside>
  )
}

export default Rail
