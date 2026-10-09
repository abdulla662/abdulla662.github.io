import {
  Braces,
  Database,
  Server,
  Boxes,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Network,
  Layers,
  Code2,
  Workflow,
  ShieldCheck,
  Globe,
  BrainCircuit,
  Blocks,
  Component,
  Webhook,
  Container,
  MessageSquareCode,
  DatabaseZap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface MarqueeTile {
  label: string
  icon: LucideIcon
}

/** First 11 tiles — row 1, moves right on scroll. */
export const MARQUEE_ROW_1: MarqueeTile[] = [
  { label: 'C#', icon: Braces },
  { label: '.NET', icon: Boxes },
  { label: 'ASP.NET Core', icon: Server },
  { label: 'React', icon: Component },
  { label: 'TypeScript', icon: Code2 },
  { label: 'SQL Server', icon: Database },
  { label: 'MySQL', icon: DatabaseZap },
  { label: 'Entity Framework', icon: Layers },
  { label: 'Docker', icon: Container },
  { label: 'RabbitMQ', icon: Workflow },
  { label: 'REST APIs', icon: Webhook },
]

/** Remaining 10 tiles — row 2, moves left on scroll. */
export const MARQUEE_ROW_2: MarqueeTile[] = [
  { label: 'Git', icon: GitBranch },
  { label: 'AI', icon: BrainCircuit },
  { label: 'Microservices', icon: Network },
  { label: 'Cloud', icon: Cloud },
  { label: 'CI/CD', icon: Terminal },
  { label: 'Clean Architecture', icon: Blocks },
  { label: 'Security', icon: ShieldCheck },
  { label: 'Web Apps', icon: Globe },
  { label: 'gRPC', icon: MessageSquareCode },
  { label: 'System Design', icon: Cpu },
]
