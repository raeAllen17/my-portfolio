import projectsData from '../data/projects.json'
import type { Project } from '../types/project'
import { ProjectArt } from '../components/ProjectArt'
import { TechIcon } from '../components/TechIcon'

const projects: Project[] = projectsData
const projectOrder = ['joyn', 'trex-voice', 'timey', 'wc-calculator']

const orderedProjects = projectOrder
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is Project => project !== undefined)

const [featured, ...rest] = orderedProjects

const ProjectLinks = ({ project }: { project: Project }) => {
  if (!project.link) return null

  return (
    <div className="work-links">
      <a className="work-link" href={project.link} target="_blank" rel="noreferrer">
        Live site
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    </div>
  )
}

const ProjectDetails = ({ project }: { project: Project }) => (
  <>
    <h3>{project.title}</h3>
    <p className="work-desc">{project.description}</p>
    {project.tech && project.tech.length > 0 && (
      <p className="work-tech">
        {project.tech.map((tech) => (
          <span className="tech-mention" key={tech}>
            <TechIcon name={tech} />
            {tech}
          </span>
        ))}
      </p>
    )}
    <ProjectLinks project={project} />
  </>
)

export const Projects = () => {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-head">
        <h2 className="section-title" id="work-title">
          Selected work
        </h2>
        <p className="section-aside">Four projects across web and desktop</p>
      </div>

      {featured && (
        <article className="work-feature">
          <ProjectArt id={featured.id} />
          <div className="work-feature-body">
            <ProjectDetails project={featured} />
          </div>
        </article>
      )}

      <div className="work-list">
        {rest.map((project) => (
          <article className="work-row" key={project.id}>
            <ProjectArt id={project.id} />
            <div className="work-row-body">
              <ProjectDetails project={project} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
