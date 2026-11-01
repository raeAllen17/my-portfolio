import agentgeniusData from '../data/agentgenius.json'
import techrostrumData from '../data/techrostrum.json'
import type { Job } from '../types/experience'

const ag: Job[] = agentgeniusData;
const ts: Job[] = techrostrumData;

function formatDate(value: string | null): string {
    if (!value) return 'Present';
    const [year, month] = value.split("-").map(Number);
    return new Date(year, month - 1)
        .toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
        });
}

export const Experience = () => {
    return (
        <section id="experience" className="flex flex-col gap-12 py-16 sm:py-24">
            <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-medium tracking-[-0.01em]">Experience</h2>
                <p className="text-sm text-[#6b6b6b]">Selected roles</p>
            </div>

            <div className="flex flex-col gap-10">
                {ag.map((job) => (
                    <article key={job.id} className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-10">
                        <div className="flex flex-col gap-1 text-sm text-[#6b6b6b]">
                            <p>{formatDate(job.roles[0].start)} — {formatDate(job.roles[0].end)}</p>
                            <p>{job.location}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.01em]">{job.roles[0].title}</h3>
                                <p className="text-[#6b6b6b]">
                                    {job.company} · Promoted from {job.roles[1].title}
                                </p>
                            </div>
                            <ul className="flex flex-col gap-2 text-[#1a1a1a]">
                                {job.highlights.map((point, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}

                {ts.map((job) => (
                    <article key={job.id} className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-10">
                        <div className="flex flex-col gap-1 text-sm text-[#6b6b6b]">
                            <p>{formatDate(job.roles[0].start)} — {formatDate(job.roles[0].end)}</p>
                            <p>{job.location}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.01em]">{job.roles[0].title}</h3>
                                <p className="text-[#6b6b6b]">{job.company}</p>
                            </div>
                            <ul className="flex flex-col gap-2 text-[#1a1a1a]">
                                {job.highlights.map((point, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;