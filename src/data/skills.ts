export interface SkillGroup {
  category: string
  icon: string
  skills: { name: string; verified: boolean }[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Backend Engineering',
    icon: '⚙️',
    skills: [
      { name: 'C#', verified: true },
      { name: '.NET 8+', verified: true },
      { name: 'ASP.NET Core', verified: true },
      { name: 'ASP.NET MVC', verified: true },
      { name: 'Entity Framework Core', verified: true },
      { name: 'LINQ', verified: true },
      { name: 'Clean Architecture', verified: true },
      { name: 'CQRS / MediatR', verified: true },
      { name: 'REST APIs', verified: true },
      { name: 'SignalR', verified: true },
      { name: 'Hangfire', verified: true },
      { name: 'Blazor Server', verified: true },
    ],
  },
  {
    category: 'Data & Persistence',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server', verified: true },
      { name: 'SQLite', verified: true },
      { name: 'MySQL', verified: true },
      { name: 'INFORMATION_SCHEMA', verified: true },
      { name: 'Query Optimisation', verified: true },
      { name: 'Indexing Strategy', verified: true },
      { name: 'EF Core Migrations', verified: true },
      { name: 'PostgreSQL', verified: false },
      { name: 'Redis', verified: false },
    ],
  },
  {
    category: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'React 19', verified: true },
      { name: 'TypeScript', verified: true },
      { name: 'JavaScript', verified: true },
      { name: 'Vite', verified: true },
      { name: 'Tailwind CSS', verified: true },
      { name: 'MudBlazor', verified: true },
      { name: 'Bootstrap', verified: true },
      { name: 'Framer Motion', verified: true },
      { name: 'GSAP', verified: true },
    ],
  },
  {
    category: 'Distributed Systems',
    icon: '🔗',
    skills: [
      { name: 'Docker', verified: true },
      { name: 'Outbox Pattern', verified: true },
      { name: 'GitHub Actions', verified: true },
      { name: 'Linux VPS', verified: true },
      { name: 'Nginx', verified: true },
      { name: 'RabbitMQ', verified: false },
      { name: 'gRPC', verified: false },
    ],
  },
  {
    category: 'AI & Integrations',
    icon: '🤖',
    skills: [
      { name: 'Python', verified: true },
      { name: 'Computer Vision', verified: false },
      { name: 'OpenCV', verified: false },
      { name: 'AI-assisted workflows', verified: false },
    ],
  },
  {
    category: 'Developer Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', verified: true },
      { name: 'Visual Studio', verified: true },
      { name: 'Mermaid.js', verified: true },
      { name: 'Swagger / OpenAPI', verified: true },
      { name: 'Postman', verified: true },
      { name: 'Docker Desktop', verified: true },
    ],
  },
]
