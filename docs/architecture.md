# Architecture and acceptance criteria

This application is a new implementation. It imports no components, styles, page templates, or runtime modules from the wireframe. Navigation destinations are transcribed from the actual supplied navbar, including cloud infrastructure, OEM and MSO routes omitted from the old page data.

## Architecture
- Next.js App Router, TypeScript strict mode; server-rendered public content and metadata.
- Separate typed content records, layouts, UI components, and small interactive client components.
- Shared tokens and bounded styles instead of legacy stylesheets and override stacks.
- Server-owned inquiry validation and delivery adapter; credentials stay on the server.
- Partner access delegates to the existing identity system once provided.
- Content records remain independent of rendering so an approved CMS can replace the local repository later.

## Quality gates
Build, typecheck, lint, content/route integrity tests, validation tests, keyboard navigation, responsive browser review, real 404 responses, and an explicit launch-readiness checklist. Successful build alone does not mean production-ready.

## Content policy
No invented customers, certifications, statistics, completed deployments or resource downloads. Approved product capabilities and asset usage rights require client review. Draft status and provenance belong in the content workflow, not disguised as published evidence.

## Launch dependencies
Approved CMS requirement, legal policies, inquiry recipient/service, partner portal, domain/hosting and final brand/copy/asset approval. No service silently pretends to succeed.
