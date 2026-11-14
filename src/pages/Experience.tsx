import agentgeniusData from '../data/agentgenius.json'
import techrostrumData from '../data/techrostrum.json'
import type { Job } from '../types/experience'
import { TechIcon } from '../components/TechIcon'

const jobs: Job[] = [...agentgeniusData, ...techrostrumData]

function formatDate(value: string | null): string {
  if (!value) return 'Present'

  const [year, month] = value.split('-').map(Number)
  return new Date(year, month - 1).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

function formatRange(job: Job): string {
  const sortedRoles = [...job.roles].sort((a, b) => a.start.localeCompare(b.start))
  const first = sortedRoles[0]
  const last = sortedRoles[sortedRoles.length - 1]

  return `${formatDate(first.start)} – ${formatDate(last.end)}`
}

export const Experience = () => {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section-head">
        <h2 className="section-title" id="experience-title">
          Experience
        </h2>
        <p className="section-aside">Most recent first</p>
      </div>

      <div className="jobs">
        {jobs.map((job) => (
          <article className="job" key={job.id}>
            <div className="job-meta">
              <p className="job-dates">{formatRange(job)}</p>
              <p>{job.location}</p>
            </div>

            <div className="job-body">
              <h3>{job.company}</h3>

              <div className="job-roles">
                {job.roles.map((role, index) => (
                  <div className="job-role-block" key={`${job.id}-${role.title}`}>
                    <div className="job-role-head">
                      <div>
                        <p className="job-role">{role.title}</p>
                        <p className="job-role-dates">
                          {formatDate(role.start)} – {formatDate(role.end)}
                        </p>
                      </div>
                      {index === 0 && job.roles.length > 1 && (
                        <span className="job-promo">Promoted</span>
                      )}
                    </div>

                    {role.highlights && role.highlights.length > 0 && (
                      <ul className="job-points">
                        {role.highlights.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}

                    {role.projects && role.projects.length > 0 && (
                      <ul className="job-projects">
                        {role.projects.map((project) => (
                          <li key={`${role.title}-${project.title}`}>
                            <strong>{project.title}.</strong> {project.summary}

                            <ul className="job-project-details">
                              {project.features?.map((feature) => (
                                <li key={feature}>{feature}</li>
                              ))}

                              {project.flows?.map((flow) => (
                                <li key={flow.label}>
                                  <strong>{flow.label}:</strong> {flow.steps.join(' → ')}
                                </li>
                              ))}

                              <li>
                                <strong>Stack:</strong>{' '}
                                <span className="tech-list">
                                  {project.stack.map((tech) => (
                                    <span className="tech-mention" key={tech}>
                                      <TechIcon name={tech} />
                                      {tech}
                                    </span>
                                  ))}
                                </span>
                              </li>
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
