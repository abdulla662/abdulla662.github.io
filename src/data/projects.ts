export interface CaseStudySection {
  title: string
  body: string
}

export interface Project {
  id: string
  number: string
  name: string
  tagline: string
  category: string[]
  description: string
  problem?: string
  solution?: string
  architecture?: string
  technologies: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
  caseStudy?: CaseStudySection[]
  color: string
  accentColor: string
  screenshotPlaceholderLabel: string
}

export const PROJECTS: Project[] = [
  {
    id: 'dealtrack',
    number: '01',
    name: 'DealTrack CRM',
    tagline: 'Full-stack SaaS CRM for sales teams — AI, real-time chat, subscriptions',
    category: ['Full Stack', 'Backend & APIs', 'Distributed Systems'],
    description:
      'A production-ready multi-tenant SaaS CRM for sales teams and collection companies. Features AI-powered OCR scanning, real-time chat and notifications via SignalR, Paymob payment gateway, RabbitMQ event bus, 6 roles, 4 subscription tiers, Excel import/export, audit logs, and a Super Admin panel — all containerised with Docker Compose.',
    problem:
      'Sales teams in Egypt use fragmented tools — spreadsheets for clients, WhatsApp for follow-ups, manual payment tracking. A single platform needed to unify CRM, team management, payments, and communication while supporting multiple isolated companies on one deployment.',
    solution:
      'Built a full-stack SaaS with .NET 8 API + React 19 frontend. Multi-tenancy isolates each company\'s data. Hangfire auto-marks overdue follow-ups nightly. Paymob webhooks handle subscription upgrades. Mistral AI extracts client data from invoice images. RabbitMQ decouples async events. SignalR powers real-time chat and notifications.',
    architecture:
      'Docker Compose deployment: .NET 8 Web API, React 19 (Vite), MySQL 8, RabbitMQ, Hangfire dashboard. JWT auth with TenantId claims. Global EF Core query filters enforce tenant isolation. Outbox pattern via RabbitMQ for reliable async events. Paymob webhook endpoint for payment confirmation. Mistral AI REST API for OCR extraction.',
    technologies: ['C#', '.NET 8', 'React 19', 'TypeScript', 'MySQL', 'SignalR', 'RabbitMQ', 'Hangfire', 'Docker', 'Paymob', 'Mistral AI', 'JWT', 'Excel Import/Export'],
    features: [
      'Multi-tenant architecture — full data isolation per company',
      '6 roles: SuperAdmin, Admin, TeamLead, Sales, Accountant, HR',
      'AI OCR — upload invoice image, Mistral AI extracts client name, phone, amount',
      'Real-time chat — DMs, group conversations, file/image sharing via SignalR',
      'Follow-up tracking with auto-miss detection via Hangfire nightly job',
      'Paymob payment gateway — subscription upgrades with webhook confirmation',
      '4-tier subscription plans: Free → Advanced → Pro → Enterprise',
      'Excel/CSV bulk client import; Excel export (Pro+)',
      'Activity audit log for every create/update/delete (Enterprise)',
      'Super Admin panel — manage all tenants, impersonate, kill switch',
      'HR module — warnings, promotions, vacation requests, payroll',
      '4 languages: English, Arabic (RTL), French, German',
    ],
    liveUrl: 'https://dealtrack.abdullahamdy.com',
    githubUrl: 'https://github.com/abdulla662/DealTrack',
    color: '#0EA5E9',
    accentColor: 'rgba(14,165,233,0.12)',
    screenshotPlaceholderLabel: 'CRM Dashboard',
    caseStudy: [
      {
        title: 'Multi-Tenancy Architecture',
        body: 'Each authenticated request carries a TenantId JWT claim. A custom EF Core global query filter appends WHERE TenantId = @current to every query — tenants are structurally prevented from reading each other\'s data without any application-level checks per endpoint.',
      },
      {
        title: 'AI OCR Integration',
        body: 'Sales reps upload an invoice image via a file input. The API sends it to Mistral AI\'s vision endpoint with a structured extraction prompt. The response is parsed into a ClientCreateDto with name, phone, and deal amount pre-filled — cutting manual data entry to zero for document-backed leads.',
      },
      {
        title: 'Payment Flow with Paymob',
        body: 'When a user selects a plan upgrade, the API creates a Paymob order and returns a hosted checkout URL. After payment, Paymob fires a webhook to the API. The webhook handler verifies the HMAC signature, finds the pending subscription intent, upgrades the tenant plan, and raises a domain event — the entire flow is idempotent.',
      },
      {
        title: 'Real-Time via SignalR + RabbitMQ',
        body: 'User-facing events (follow-up reminder, payment confirmed, chat message) are published to RabbitMQ by the originating service. A consumer picks them up and pushes to SignalR hub groups keyed by TenantId + UserId. This decouples the event producer from the WebSocket connection — the API layer never blocks on notification delivery.',
      },
    ],
  },
  {
    id: 'smarttracker',
    number: '02',
    name: 'SmartTracker',
    tagline: 'Multi-tenant SaaS operations platform',
    category: ['Full Stack', 'Backend & APIs'],
    description:
      'A production multi-tenant SaaS CRM built with Clean Architecture. Manages work tasks, evidence workflows, issue tracking, daily operation logs, notifications, audit events, and subscription-based tenancy — all within a single deployable API.',
    problem:
      'Businesses need a single platform to coordinate team tasks, track daily operations, log evidence for issues, manage delays, and handle multi-tenant billing — without exposing one tenant\'s data to another.',
    solution:
      'Built with Clean Architecture (Domain / Application / Infrastructure / API layers) ensuring strict separation of concerns. Every entity is scoped to a Tenant, and subscription plans gate feature access via PolicyRules. SignalR powers real-time notifications; Hangfire handles background jobs; an Outbox pattern ensures reliable event delivery.',
    architecture:
      'Domain layer holds pure entities (Task, WorkTask, Issue, Delay, EvidenceFile, EvidenceReview, DailyLog, DailyLogItem, Notification, AuditEvent, OutboxEvent, Tenant, Subscription, Plan, PolicyRule, User, UserRole). Application layer exposes Commands/Queries via MediatR. Infrastructure layer implements EF Core with SQL Server. API layer exposes REST endpoints with JWT auth.',
    technologies: ['C#', '.NET 8', 'ASP.NET Core', 'Clean Architecture', 'CQRS', 'MediatR', 'Entity Framework Core', 'SQL Server', 'SignalR', 'Hangfire', 'JWT Auth', 'Docker'],
    features: [
      'Multi-tenant data isolation with Tenant scoping',
      'Task and WorkTask management with status tracking',
      'Issue & Delay tracking with evidence workflows',
      'EvidenceFile upload and EvidenceReview approval chain',
      'Daily operation logs with line-item detail',
      'Real-time notifications via SignalR',
      'Audit event trail for all significant actions',
      'Outbox pattern for reliable async event delivery',
      'Subscription plans with configurable PolicyRules',
      'JWT-based auth with role scoping',
      'Background jobs with Hangfire',
      'Docker-ready deployment',
    ],
    liveUrl: 'https://smarttracker.abdullahamdy.com',
    githubUrl: 'https://github.com/abdulla662/SmartTracker',
    color: '#0EA5E9',
    accentColor: 'rgba(14,165,233,0.12)',
    screenshotPlaceholderLabel: 'CRM Dashboard',
    caseStudy: [
      {
        title: 'Domain Model',
        body: 'Entities span six bounded contexts: Tasks (Task, WorkTask), Issues & Delays (Issue, Delay), Evidence Workflow (EvidenceFile, EvidenceReview), Operations Logging (DailyLog, DailyLogItem), Notifications & Audit (Notification, AuditEvent, OutboxEvent), and Tenancy (Tenant, Subscription, Plan, PolicyRule, User, UserRole). Each entity carries a TenantId enforced at the query level.',
      },
      {
        title: 'Architecture Pattern',
        body: 'Clean Architecture with four projects: SmartTracker.Domain (entities, value objects, interfaces), SmartTracker.Application (MediatR commands/queries, DTOs, service interfaces), SmartTracker.Infrastructure (EF Core DbContext, repositories, external service implementations), SmartTracker.API (controllers, middleware, DI wiring). This separation means business logic has zero dependency on HTTP or the database driver.',
      },
      {
        title: 'Multi-Tenancy Strategy',
        body: 'Each request is authenticated via JWT which carries the TenantId claim. A custom EF Core interceptor appends a WHERE TenantId = @current clause to every query through a global query filter — tenants are structurally prevented from reading each other\'s data without application-level checks.',
      },
      {
        title: 'Reliability: Outbox + SignalR',
        body: 'Domain events are written to the OutboxEvent table in the same database transaction as the triggering change. A Hangfire background job polls the outbox, delivers notifications via SignalR to connected clients, and marks events as processed. This guarantees at-least-once delivery even if the SignalR hub is temporarily unavailable.',
      },
    ],
  },
  {
    id: 'massdataapi',
    number: '03',
    name: 'MassData API',
    tagline: '1 million records — sub-100ms response times',
    category: ['Backend & APIs', 'Developer Tools'],
    description:
      'An ASP.NET Core 8 Web API demonstrating high-performance data querying over 1M+ employee records. Implements covering indexes, composable LINQ filters, AsNoTracking, server-side aggregations, and pagination — all producing a single optimised SQL statement per request.',
    problem:
      'Querying large datasets naively with SELECT * causes full table scans and multi-second response times. Demonstrating how indexing, query composition, and EF Core configuration choices combine to achieve sub-100ms latencies on 1M rows.',
    solution:
      'Covering indexes on Country, Department, Salary, Age, JoinDate, and a composite (Country, Department). AsNoTracking() on all read queries. Composable LINQ where each filter is conditionally chained onto the IQueryable — a single SQL statement with only the active WHERE clauses. LongCountAsync on the unpaginated query for accurate total counts without a second full scan.',
    technologies: ['C#', '.NET 8', 'ASP.NET Core', 'Entity Framework Core', 'SQLite', 'Swagger UI', 'Docker'],
    features: [
      '1M records seeded on first run (batched inserts of 5,000)',
      '7 composable filter parameters: country, department, salary range, age range, gender, name/email search',
      'Sort on any column, ascending or descending',
      'Pagination with total count, total pages, hasNext/hasPrev',
      'Stats endpoint: average salary, count by department, min/max — server-side GROUP BY',
      'Full Swagger UI at /',
      'Docker support — run anywhere',
      'Sub-100ms p95 response time on filtered + paginated queries',
    ],
    liveUrl: 'https://massdata.abdullahamdy.com',
    githubUrl: 'https://github.com/abdulla662/MassDataAPI',
    color: '#10B981',
    accentColor: 'rgba(16,185,129,0.12)',
    screenshotPlaceholderLabel: 'Swagger API Explorer',
    caseStudy: [
      {
        title: 'The Engineering Problem',
        body: 'SELECT * FROM Employees on a 1M-row table without indexes causes a full sequential scan — response times of 3–8 seconds on commodity hardware. The goal was to demonstrate the real decisions that shrink that to under 100ms.',
      },
      {
        title: 'Indexing Strategy',
        body: 'Created covering indexes on Country, Department, Salary, Age, JoinDate, and a composite (Country, Department) for the most common filter combination. An index covers a query when all columns referenced in WHERE and ORDER BY are within the index — eliminating the heap lookup entirely.',
      },
      {
        title: 'Composable LINQ',
        body: 'Each filter parameter is tested and conditionally appended: `if (dto.Country is not null) query = query.Where(e => e.Country == dto.Country)`. EF Core translates the full chain into one SQL statement with only the relevant WHERE clauses — no round-trips, no client-side filtering.',
      },
      {
        title: 'Pagination Without Double Scans',
        body: 'LongCountAsync executes before Skip/Take on the same filtered IQueryable, so the count reuses the WHERE clause indexes. Total count and the page data share the same query plan rather than performing two separate scans.',
      },
    ],
  },
  {
    id: 'dbexplorer',
    number: '04',
    name: 'DbSchemaExplorer',
    tagline: 'Connect, explore, and visualise any SQL Server database',
    category: ['Developer Tools', 'Full Stack'],
    description:
      'A Blazor Server application that accepts a SQL Server connection, discovers all base tables, reveals column definitions with PK/FK annotations, maps every foreign-key relationship across the schema, and renders a live Mermaid.js entity-relationship diagram with zoom controls — in the browser.',
    problem:
      'Exploring an unfamiliar SQL Server schema requires either direct SSMS access or reading raw INFORMATION_SCHEMA queries. Neither gives you a visual map of how tables relate.',
    solution:
      'A Blazor Server interactive app: enter server + database name → tables are discovered via INFORMATION_SCHEMA → click a table to see columns (PK/FK annotated) → click "Load Relationships" to run sys.foreign_key_columns queries → a Mermaid.js ERD renders live with zoom in/out controls.',
    architecture:
      'Single Blazor Server project (net9.0, Razor Components, Interactive Server render mode). Pages/Connect.razor holds the UI; Connect.razor.cs holds the C# logic. SqlConnection queries INFORMATION_SCHEMA.TABLES, INFORMATION_SCHEMA.COLUMNS, sys.foreign_key_columns. GenerateMermaidCode() builds an erDiagram string; Mermaid.js renders it via JSInterop.',
    technologies: ['C#', '.NET 9', 'Blazor Server', 'Razor Components', 'SQL Server', 'INFORMATION_SCHEMA', 'sys.foreign_key_columns', 'Mermaid.js', 'JSInterop'],
    features: [
      'Connect to any SQL Server with Windows authentication',
      'Auto-discovers all BASE TABLE tables in the database',
      'Column explorer: data type, PK flag, FK flag per column',
      'Full FK relationship mapping across all tables via sys.foreign_key_columns',
      'Live Mermaid.js ERD diagram rendered in-browser',
      'Zoom in / Zoom out controls on the ERD',
      'No data stored — purely a read-only schema inspection tool',
      'SSRF protection: only processes connection strings formed from user input, not arbitrary URLs',
    ],
    liveUrl: 'https://dbexplorer.abdullahamdy.com',
    githubUrl: 'https://github.com/abdulla662/DbSchemaExplorer',
    color: '#F59E0B',
    accentColor: 'rgba(245,158,11,0.12)',
    screenshotPlaceholderLabel: 'ERD Diagram View',
    caseStudy: [
      {
        title: 'Connection & Table Discovery',
        body: 'The app builds a SqlConnection from the user-supplied server and database name using Windows Integrated Security. It immediately queries INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = \'BASE TABLE\' to produce the table list — no stored credentials, no persistent state.',
      },
      {
        title: 'Column Introspection',
        body: 'Clicking a table runs two queries: INFORMATION_SCHEMA.COLUMNS for name/type/PK detection, and sys.foreign_key_columns to collect FK column names. These are merged into ColumnInfo objects with IsPrimaryKey and IsForeignKey booleans, displayed in the UI with colour-coded badges.',
      },
      {
        title: 'Mermaid.js ERD Generation',
        body: 'LoadRelationships() queries sys.foreign_key_columns joined across parent and referenced tables and columns. GenerateMermaidCode() constructs an erDiagram string: each unique table gets an empty entity block, and each FK pair becomes a `FromTable ||--o{ ToTable : "col to col"` line. The string is HTML-encoded and injected as a .mermaid div; JSInterop calls mermaid.run() to render it.',
      },
    ],
  },
  {
    id: 'sheetnotify',
    number: '05',
    name: 'SheetNotify',
    tagline: 'Google Sheets → WhatsApp confirmations, automated',
    category: ['Backend & APIs', 'Distributed Systems'],
    description:
      'A .NET 8 BackgroundService that watches a Google Sheet for new bookings and automatically sends WhatsApp confirmation messages via Twilio — with rate limiting, restart-safe state tracking, and failure isolation.',
    problem:
      'A small business logs bookings in Google Sheets. Manually sending WhatsApp confirmations is slow and error-prone. Google Sheets has no native webhook support, and Twilio\'s WhatsApp API has rate limits that must be respected.',
    solution:
      'A hosted BackgroundService polls the sheet every 30 seconds, reads only new rows (after the last processed index), sends WhatsApp messages via Twilio with 1.1s delays between sends, and persists state to disk via StateTracker — so restarts never re-send already-processed rows.',
    architecture:
      '.NET 8 BackgroundService with Google Sheets API (OAuth2 service account). StateTracker persists last-processed row index to disk for restart safety. Twilio WhatsApp API with configurable rate limiting. Docker-deployable with volume-mounted credentials and state directory.',
    technologies: ['C#', '.NET 8', 'BackgroundService', 'Google Sheets API', 'Twilio WhatsApp', 'OAuth2', 'Docker'],
    features: [
      'Polls Google Sheets every 30 seconds for new booking rows',
      'Sends WhatsApp confirmations via Twilio for each new booking',
      'Rate-limited: 1.1s between messages to respect Twilio limits',
      'Restart-safe StateTracker persists last processed row to disk',
      'Failure isolation: stops cycle on error, retries from failed row on next poll',
      'Google Sheets OAuth2 service account authentication',
      'Configurable poll interval, sheet range, and message template',
      'Docker support with volume-mounted credentials',
    ],
    githubUrl: 'https://github.com/abdulla662/SheetNotify',
    color: '#34A853',
    accentColor: 'rgba(52,168,83,0.12)',
    screenshotPlaceholderLabel: 'SheetNotify Service',
    caseStudy: [
      {
        title: 'The Problem with Polling',
        body: 'Google Sheets has no native webhook support, so push-based notification is impossible. The service polls every 30 seconds, but to avoid re-processing rows after a restart or crash, the last processed row index is written to disk by StateTracker after each successful batch — a simple and reliable persistence strategy.',
      },
      {
        title: 'Rate Limiting Strategy',
        body: 'Twilio WhatsApp imposes send rate limits. Rather than tracking API responses for rate-limit errors reactively, the service proactively waits 1.1 seconds between each message send — a budget that stays safely under Twilio\'s limits while processing a typical bookings backlog in a reasonable time.',
      },
      {
        title: 'Failure Isolation',
        body: 'If a WhatsApp send fails (network error, invalid phone number), the service stops the current poll cycle and retries from that row on the next poll — not from the beginning. This prevents messages from being skipped over, and already-sent messages are never re-sent because the state persists the last successfully completed row.',
      },
    ],
  },
  {
    id: 'logsift',
    number: '06',
    name: 'LogSift',
    tagline: 'Stream & analyse 10GB log files without loading them into RAM',
    category: ['Developer Tools', 'Backend & APIs'],
    description:
      'A .NET 8 CLI tool that streams log files of any size line-by-line, categorises ERROR / WARN / FATAL entries into separate output files, and generates a summary report — with zero memory growth regardless of file size. Processes 50,000 lines in ~0.1s.',
    problem:
      'Server log files can reach 10+ GB. A naive File.ReadAllLines implementation loads the entire file into RAM and crashes the process. Developers need a tool that can analyse arbitrarily large logs without memory constraints.',
    solution:
      'Uses FileStream + StreamReader with IAsyncEnumerable<LogEntry> to stream one line at a time. Memory usage stays constant at ~a few MB regardless of file size. Auto-detects log format (Serilog, NLog, log4net, ASP.NET Core, plain text). Generates categorised output files and a summary report.',
    technologies: ['C#', '.NET 8', 'IAsyncEnumerable', 'FileStream', 'StreamReader', 'Docker'],
    features: [
      'Zero memory growth — streams line-by-line via IAsyncEnumerable',
      'Handles files of any size (tested up to 1M lines, 10+ GB)',
      'Auto-detects: Serilog, NLog, log4net, ASP.NET Core, plain text',
      'Categorised output: errors.log, fatals.log, warnings.log',
      'Summary report: line counts, time range, top 5 errors, throughput (lines/s, MB/s)',
      'Demo mode: generates a realistic 50K-line log file instantly for testing',
      'Docker support — runs anywhere without .NET installed',
    ],
    githubUrl: 'https://github.com/abdulla662/LogSift',
    color: '#F59E0B',
    accentColor: 'rgba(245,158,11,0.12)',
    screenshotPlaceholderLabel: 'LogSift CLI Output',
    caseStudy: [
      {
        title: 'Streaming Architecture',
        body: 'The core insight: never hold the full file in memory. LogSift opens a FileStream, wraps it in a StreamReader, and yields LogEntry objects one at a time via IAsyncEnumerable<LogEntry>. The caller processes each entry immediately — the GC can collect it before the next line is read. Memory stays at a few MB whether the file is 1KB or 10GB.',
      },
      {
        title: 'Multi-Format Detection',
        body: 'Log formats vary: Serilog timestamps look different from NLog, ASP.NET Core request logs have a distinct structure. LogSift samples the first 50 lines to detect the format, then applies the matching regex pattern for the full stream — so it works on real-world log files without manual format configuration.',
      },
    ],
  },
  {
    id: 'loadbalancer',
    number: '07',
    name: 'Load Balancer',
    tagline: 'HTTP request distribution across backend servers',
    category: ['Backend & APIs', 'Distributed Systems'],
    description:
      'A live load balancer service that distributes incoming HTTP requests across multiple backend servers. Deployed and accessible at the live URL — demonstrating distributed system concepts in a real hosted environment.',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'HTTP Forwarding', 'Docker'],
    features: [
      'Distributes incoming HTTP traffic across backend server pool',
      'Round-robin or configured request routing',
      'Transparent request forwarding to backend instances',
      'Single entry-point for multiple backend services',
      'Docker-deployed live environment',
    ],
    liveUrl: 'https://loadbalancer.abdullahamdy.com',
    githubUrl: 'https://github.com/abdulla662/LoadBalancer',
    color: '#8B5CF6',
    accentColor: 'rgba(139,92,246,0.12)',
    screenshotPlaceholderLabel: 'Load Balancer Interface',
  },
]
