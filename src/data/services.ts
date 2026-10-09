export interface Service {
  number: string
  title: string
  description: string
}

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Backend Development',
    description:
      'Building scalable backend systems using C#, .NET, ASP.NET Core, Entity Framework Core and REST APIs.',
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    description:
      'Building complete web applications using .NET on the backend and React/TypeScript on the frontend.',
  },
  {
    number: '03',
    title: 'Database & API Development',
    description:
      'Designing reliable database architectures, SQL queries, APIs and integrations for business applications.',
  },
  {
    number: '04',
    title: 'Software Architecture',
    description:
      'Designing maintainable applications using clean architecture, SOLID principles, modular design and scalable patterns.',
  },
  {
    number: '05',
    title: 'AI & Automation',
    description:
      'Integrating AI, computer vision, automation and intelligent services into modern software products.',
  },
]
