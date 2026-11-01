import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiDotnet,
    SiPhp,
    SiSymfony,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiSupabase,
    SiN8N,
    SiGithubactions,
    SiGit,
    SiFigma,
    SiPostman,
} from 'react-icons/si'
import { VscAzureDevops, VscAzure } from 'react-icons/vsc'
import type { IconType } from 'react-icons'

type StackItem = {
    name: string
    icon: IconType
}

export const TechStack = () => {
    const stack: StackItem[] = [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "C#/.NET", icon: SiDotnet },
        { name: "PHP", icon: SiPhp },
        { name: "Symfony", icon: SiSymfony },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Supabase", icon: SiSupabase },
        { name: "n8n", icon: SiN8N },
        { name: "Microsoft Azure", icon: VscAzure },
        { name: "Azure DevOps", icon: VscAzureDevops },
        { name: "GitHub Actions", icon: SiGithubactions },
        { name: "Git", icon: SiGit },
        { name: "Figma", icon: SiFigma },
        { name: "Postman", icon: SiPostman },
    ]

    return (
        <section className="flex flex-col gap-12 py-16 sm:py-24">
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.01em]">Stack</h2>
                <p className="text-sm text-[#6b6b6b]">Tools I work with</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {stack.map((item) => {
                    const Icon = item.icon
                    return (
                        <div
                            key={item.name}
                            className="group flex items-center gap-2.5 rounded-xl border border-[#e5e5e5] px-3 py-2.5 transition-colors hover:bg-[#f5f5f5]"
                        >
                            <Icon className="size-4 text-[#6b6b6b] group-hover:text-[#1a1a1a]" />
                            <span className="text-sm text-[#1a1a1a]">{item.name}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TechStack
