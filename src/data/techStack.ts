import {
  Braces,
  Boxes,
  Server,
  Component,
  Code2,
  Database,
  DatabaseZap,
  Layers,
  Container,
  Workflow,
  Webhook,
  GitBranch,
  BrainCircuit,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface TechItem {
  label: string
  icon: LucideIcon
}

export const TECH_STACK: TechItem[] = [
  { label: 'C#', icon: Braces },
  { label: '.NET', icon: Boxes },
  { label: 'ASP.NET Core', icon: Server },
  { label: 'React', icon: Component },
  { label: 'TypeScript', icon: Code2 },
  { label: 'SQL Server', icon: Database },
  { label: 'MySQL', icon: DatabaseZap },
  { label: 'Entity Framework Core', icon: Layers },
  { label: 'Docker', icon: Container },
  { label: 'RabbitMQ', icon: Workflow },
  { label: 'REST API', icon: Webhook },
  { label: 'Git', icon: GitBranch },
  { label: 'AI', icon: BrainCircuit },
]
