import { TechIcon } from '../components/TechIcon'

const groups = [
  {
    title: 'Interface',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Server',
    items: ['Node.js', 'Express', 'C#/.NET', 'PHP', 'Symfony'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Automation',
    items: ['n8n', 'REST APIs', 'Claude', 'Gemini', 'DeepSeek'],
  },
  {
    title: 'Operations',
    items: ['Microsoft Azure', 'Azure DevOps', 'GitHub Actions', 'Git'],
  },
  {
    title: 'Design & testing',
    items: ['Figma', 'Postman'],
  },
]

export const TechStack = () => {
  return (
    <section id="toolkit" className="section" aria-labelledby="toolkit-title">
      <div className="section-head">
        <h2 className="section-title" id="toolkit-title">
          Toolkit
        </h2>
      </div>

      <div className="stack">
        {groups.map((group) => (
          <div className="stack-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="stack-items">
              {group.items.map((item) => (
                <li key={item}>
                  <TechIcon name={item} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
