This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 📚 Template de Documentação de Projeto

> Copie este arquivo para `docs/README.md` do repositório. Use os marcadores `TODO:` para preencher. Opcional: quebre em múltiplos arquivos conforme a seção **Estrutura de Pastas da Documentação**.

---

## 0) Índice Rápido

- [Visão Geral](#1-visão-geral)
- [Arquitetura](#2-arquitetura)
- [Ambiente de Desenvolvimento](#3-ambiente-de-desenvolvimento)
- [Front-end](#4-front-end)
- [Back-end](#5-back-end)
- [Banco de Dados & Migrations](#6-banco-de-dados--migrations)
- [APIs (Contratos)](#7-apis-contratos)
- [Segurança](#8-segurança)
- [Testes & Qualidade](#9-testes--qualidade)
- [CI/CD & Deploy](#10-cicd--deploy)
- [Observabilidade](#11-observabilidade)
- [Operação & Runbooks](#12-operação--runbooks)
- [Padrões & Convenções](#13-padrões--convenções)
- [Roadmap & ADRs](#14-roadmap--adrs)
- [Changelog & Versionamento](#15-changelog--versionamento)
- [Onboarding](#16-onboarding)
- [Anexos](#17-anexos)

---

## 1) Visão Geral

**Resumo do Produto/Projeto**

- **Nome:** TODO
- **Objetivo:** TODO
- **Principais usuários/personas:** TODO
- **Problema que resolve:** TODO
- **Escopo (MVP vs Futuro):** TODO
- **Links úteis:** Repositório(s), Board, Design System, Notion/Jira, Ambientes, API Docs, Figma, etc.

**Stacks**

- **Front-end:** Next.js (React, App Router), TailwindCSS, Context/Redux, libs UI…
- **Back-end:** (ex.: Laravel 12 / Node NestJS / Express), PHP/Node version, Services…
- **Infra:** Docker, Docker Compose, Nginx, CDN/Storage (ex.: DO Spaces/S3), Mensageria (ex.: Redis/RabbitMQ), Cache, Filas, Cron.
- **Databases:** Postgres/MySQL/Redis/Elastic...

**Arquitetura de Alto Nível (diagrama)**

- ![diagram](./_media/arquitetura-alto-nivel.png)
- Descrição: TODO

---

## 2) Arquitetura

**Módulos/Sistemas**

- **Web App:** TODO
- **API(s):** TODO
- **Workers/Jobs:** TODO
- **Serviços externos:** (ex.: Clicksign, Pagamentos, Auth0, Maps…)

**Decisões de Arquitetura (ADRs)**

- ADR-001: Autenticação multi-tenant — Resumo e link.
- ADR-002: Armazenamento de arquivos — Resumo e link.

**Fluxos essenciais (diagramas):**

- Login, Assinatura Digital, Upload/Processamento de PDF, Checkout, etc.

---

## 3) Ambiente de Desenvolvimento

**Requisitos**

- **SO:** Windows/macOS/Linux; WSL2 (se aplicável)
- **Node:** vXX (nvm recomendado)
- **PNPM/Yarn/NPM:** versão
- **PHP:** vX.X (se Laravel), Composer vX
- **Docker/Compose:** versões

**Setup Rápido**

```bash
# 1) Clonar
git clone TODO
cd repo

# 2) Variáveis de ambiente
cp .env.example .env
# Preencher valores conforme seção [Ambientes]

# 3) Containers (se usar Docker)
docker compose up -d --build

# 4) Instalar deps (sem Docker)
# Front
cd frontend && pnpm i && pnpm dev
# Back
cd backend && composer install && php artisan serve
```

**Estrutura de Pastas (mono/multi-repo)**

```
repo/
  docs/
  frontend/ (Next.js)
  backend/  (Laravel / Node)
  infra/    (IaC, docker, nginx)
  scripts/
```

**Ambientes & Variáveis (.env)**

- **Front:** `NEXT_PUBLIC_URL_API`, `NEXT_PUBLIC_APP_ENV`, `NEXT_PUBLIC_SENTRY_DSN`…
- **Back (Laravel):** `APP_ENV`, `APP_URL`, `DB_*`, `QUEUE_*`, `FILESYSTEM_*`, `CLICKSIGN_*`…
- **Secrets:** onde vivem? (Vault/GCP Secret Manager/GitHub Actions)

---

## 4) Front-end

**Tecnologias & Padrões**

- Next.js 15 (App Router), React, Tailwind, Shadcn/UI (se usado), ESLint, Prettier.
- State management: Context API/Redux/Zustand — decisões.

**Scripts**

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "jest --watch"
}
```

**Estrutura**

```
src/
  app/[orgSlug]/ ... rotas dinâmicas
  components/
  contexts/
  hooks/
  services/ (api clients)
  styles/
  utils/
```

**Design System**

- Tokens (cores, fontes), componentes básicos, guidelines de acessibilidade (WCAG), responsividade.

**Boas práticas**

- Data fetching (Server/Client)
- Cache (revalidate, SWR/React Query)
- Tratamento de erros (ErrorBoundary, toasts)

---

## 5) Back-end

**Tecnologias**

- **Laravel**: versão, estrutura (Modules/Services/Repositories), Middlewares (auth multi-tenant), Jobs/Queues, Storage, Policies/Permissions.
- **ou Node (Nest/Express)**: camadas (controllers, services), DTOs, Pipes, Guards, Swagger.

**Scripts**

```bash
# Laravel
php artisan serve
php artisan migrate --seed
php artisan queue:work
php artisan storage:link

# Node
pnpm start:dev
pnpm build && pnpm start
```

**Config & Env**

- DB, Cache/Queue, Filesystem, Integrações (Clicksign, Pagamentos, Email), CORS.

---

## 6) Banco de Dados & Migrations

- **Diagrama ER:** `docs/_media/er.png`
- **Conexões:** Postgres/MySQL, Redis.
- **Migrations/Seeders:** como rodar, ordem, dados de exemplo.
- **Multi-tenant (se houver):** estratégia (schemas/bancos), migrations por tenant.

---

## 7) APIs (Contratos)

**Padrões**

- REST/JSON, versionamento (`/api/v1`), paginação, filtros, erros (RFC 7807 opcional).

**Autenticação**

- Bearer/JWT/Sanctum, escopos, expiração.

**Exemplo**

```http
GET /api/v1/{organizationSlug}/users?page=1
Authorization: Bearer <token>
```

**Resposta**

```json
{
  "data": [],
  "meta": { "page": 1 }
}
```

**OpenAPI/Swagger**

- Onde está o `openapi.yaml` ou rota `/api/docs`.

**Integrações externas**

- Clicksign: endpoints usados, autenticação, flow de assinatura.

---

## 8) Segurança

- **Autorização & Perfis:** RBAC/ABAC, políticas.
- **Proteções:** Rate limit, CORS, CSRF, XSS, SQLi, SSRF.
- **Segredos:** gestão, rotação, acesso local.
- **LGPD/GDPR:** dados pessoais, retenção, consentimento.

---

## 9) Testes & Qualidade

- **Front:** Jest/RTL, Cypress.
- **Back:** PHPUnit/Pest, Supertest (Node).
- **Cobertura mínima:** % por módulo.
- **Linters & Formatters:** ESLint/Prettier/Stylelint.
- **Checks de PR:** o que roda no CI.

---

## 10) CI/CD & Deploy

- **Pipelines:** build, test, lint, migrations, release.
- **Ambientes:** Dev/Stage/Prod (URLs e variáveis).
- **Infra:** Dockerfiles, docker-compose, Nginx, PM2/Supervisor, Queues.
- **Blue/Green ou Rolling:** estratégia.
- **Rollback:** como executar.

---

## 11) Observabilidade

- **Logs:** padrão (JSON), correlação de requisições, níveis.
- **Métricas:** HTTP, filas, DB; Prometheus/Grafana/NewRelic.
- **Tracing:** OpenTelemetry/Sentry.
- **Alertas:** canais e critérios.

---

## 12) Operação & Runbooks

- **Rotinas:** limpeza de storage, rotação de logs, jobs.
- **Playbooks de incidentes:** passos, contato, tempo alvo.
- **RPO/RTO, SLO/SLI:** metas e medição.

---

## 13) Padrões & Convenções

- **Commits:** Conventional Commits.
- **Branches:** trunk-based/GitFlow; `main`, `develop`, `feat/*`.
- **SemVer:** versão do produto e APIs.
- **Nomes & Slugs:** regras (ex.: `[orgSlug]`).
- **i18n/l10n:** chaves e fallback.

---

## 14) Roadmap & ADRs

- **Roadmap trimestral:** objetivos, épicos, métricas.
- **ADRs:** pasta `docs/adrs/ADR-XXX.md` (modelo abaixo).

**Modelo de ADR**

```md
# ADR-XXX: Título

Data: YYYY-MM-DD
Decisores: Nomes
Contexto: ...
Opções: A, B, C
Decisão: ...
Consequências: ...
```

---

## 15) Changelog & Versionamento

- **CHANGELOG.md** seguindo Keep a Changelog.
- Tags git: `vX.Y.Z`

---

## 16) Onboarding

- **Checklist 1º dia:** acesso repositórios, envs, secrets, contas SaaS.
- **Setup dev:** passo a passo (comandos, Docker, seed de dados).
- **Exercício rápido:** subir app local e rodar testes.

---

## 17) Anexos

- Diagramas, assets, dumps de Postman, coleções Insomnia, export Swagger.

---

# Estrutura de Pastas da Documentação (sugerida)

```
docs/
  README.md
  adrs/
    ADR-001.md
  api/
    openapi.yaml
  frontend/
    setup.md
    styleguide.md
  backend/
    setup.md
    database.md
    integrations.md
  ops/
    cicd.md
    runbooks.md
    observability.md
  _media/
    arquitetura-alto-nivel.png
    er.png
```

---

# Modelos Rápidos

## Modelo de `.env` (Front)

```env
NEXT_PUBLIC_APP_ENV=local
NEXT_PUBLIC_URL_API=http://127.0.0.1:8000/api/v1
NEXT_PUBLIC_SENTRY_DSN=
```

## Modelo de `.env` (Laravel)

```env
APP_ENV=local
APP_URL=http://127.0.0.1:8000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=app
DB_USERNAME=root
DB_PASSWORD=
# Integrações
CLICKSIGN_BASE_URL=https://sandbox.clicksign.com
CLICKSIGN_ACCESS_TOKEN=TODO
FILESYSTEM_DISK=public
```

## Checklists

- [ ] Repositório com `docs/README.md`
- [ ] OpenAPI publicado
- [ ] Pipelines com testes e lint
- [ ] Monitoramento e alertas configurados
- [ ] Runbooks de incidentes
- [ ] Onboarding atualizado

> Dica: mantenha a documentação viva. Atualize em cada PR relevante.
# Foodly
