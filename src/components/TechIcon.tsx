import type { IconType } from 'react-icons'
import {
  SiClaude,
  SiCss,
  SiDeepseek,
  SiDotnet,
  SiElectron,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiGoogleforms,
  SiGooglegemini,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiLivekit,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiSymfony,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbApi, TbBrandSlack, TbCode } from 'react-icons/tb'
import { VscAzure, VscAzureDevops } from 'react-icons/vsc'

type Tech = {
  Icon: IconType
  color: string
}

const tech: Record<string, Tech> = {
  React: { Icon: SiReact, color: '#149eca' },
  'Next.js': { Icon: SiNextdotjs, color: '#000000' },
  TypeScript: { Icon: SiTypescript, color: '#3178c6' },
  'Tailwind CSS': { Icon: SiTailwindcss, color: '#06b6d4' },
  Tailwind: { Icon: SiTailwindcss, color: '#06b6d4' },
  'Node.js': { Icon: SiNodedotjs, color: '#5fa04e' },
  Express: { Icon: SiExpress, color: '#2f2f2f' },
  'C#/.NET': { Icon: SiDotnet, color: '#512bd4' },
  PHP: { Icon: SiPhp, color: '#777bb4' },
  Symfony: { Icon: SiSymfony, color: '#1a1a1a' },
  PostgreSQL: { Icon: SiPostgresql, color: '#4169e1' },
  MySQL: { Icon: SiMysql, color: '#4479a1' },
  MongoDB: { Icon: SiMongodb, color: '#47a248' },
  Supabase: { Icon: SiSupabase, color: '#3fcf8e' },
  n8n: { Icon: SiN8N, color: '#ea4b71' },
  'REST APIs': { Icon: TbApi, color: '#ee5a2b' },
  Claude: { Icon: SiClaude, color: '#d97757' },
  Gemini: { Icon: SiGooglegemini, color: '#8e75b2' },
  DeepSeek: { Icon: SiDeepseek, color: '#4d6bfe' },
  'Microsoft Azure': { Icon: VscAzure, color: '#0078d4' },
  'Azure DevOps': { Icon: VscAzureDevops, color: '#0078d4' },
  'GitHub Actions': { Icon: SiGithubactions, color: '#2088ff' },
  Git: { Icon: SiGit, color: '#f05032' },
  Figma: { Icon: SiFigma, color: '#f24e1e' },
  Postman: { Icon: SiPostman, color: '#ff6c37' },
  Electron: { Icon: SiElectron, color: '#47848f' },
  JavaScript: { Icon: SiJavascript, color: '#c9a800' },
  HTML: { Icon: SiHtml5, color: '#e34f26' },
  CSS: { Icon: SiCss, color: '#1572b6' },
  LiveKit: { Icon: SiLivekit, color: '#1f2937' },
  'DeepSeek API': { Icon: SiDeepseek, color: '#4d6bfe' },
  'Google Forms': { Icon: SiGoogleforms, color: '#7248b9' },
  'Google Sheets': { Icon: SiGooglesheets, color: '#34a853' },
  Slack: { Icon: TbBrandSlack, color: '#611f69' },
}

const fallback: Tech = { Icon: TbCode, color: 'currentColor' }

export const TechIcon = ({ name }: { name: string }) => {
  const { Icon, color } = tech[name] ?? fallback

  return (
    <Icon
      className="tech-icon"
      style={{ color }}
      aria-hidden="true"
      focusable="false"
    />
  )
}

export default TechIcon
