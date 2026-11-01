import projectsData from '../data/projects.json'
import type { Project } from '../types/project'

const projects: Project[] = projectsData

export const Projects = () => {
    return (
        <section className="flex flex-col gap-12 py-16 sm:py-24">
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.01em]">Projects</h2>
                <p className="text-sm text-[#6b6b6b]">Selected work</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="group relative flex flex-col gap-4 rounded-2xl border border-[#e5e5e5] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.4)]"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-medium tracking-[-0.01em]">{project.title}</h3>
                                <p className="text-sm leading-relaxed text-[#4a4a4a]">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                        {project.tech && project.tech.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-[#e5e5e5] px-2.5 py-1 text-xs text-[#6b6b6b]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                        {(project.link || project.repo) && (
                            <div className="mt-auto flex flex-wrap items-center gap-3 text-sm">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 hover:underline underline-offset-4"
                                    >
                                        Live demo
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                )}
                                {project.repo && (
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-[#6b6b6b] hover:text-[#1a1a1a]"
                                    >
                                        Source code
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                )}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects
