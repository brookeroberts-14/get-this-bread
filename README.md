# WoodmenLife Recruiting Copilot V6.2

This version implements the recommended Get Applicant integration pattern:

1. The recruiting site exposes applicant records through a Vercel API.
2. Copilot Studio imports the included OpenAPI v2 file as a REST API tool.
3. The selected applicant displays an applicant ID.
4. The recruiter copies an agent prompt containing that ID.
5. The Applicant Intelligence Agent calls `GetApplicant` and responds from the retrieved record.

## Deploy to Vercel

This project is intentionally flat so the React app and `/api` functions deploy together.

Vercel settings:
- Root Directory: repository root (`.`)
- Framework Preset: Vite
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

After deploying, test:
- `https://YOUR-DOMAIN.vercel.app/api/health`
- `https://YOUR-DOMAIN.vercel.app/api/applicants?id=APP-102`

## Configure Copilot Studio

1. Open `copilot-studio/applicant-api-openapi.yaml`.
2. Replace `REPLACE-WITH-YOUR-VERCEL-DOMAIN.vercel.app` with the deployed domain, without `https://`.
3. In Copilot Studio, open the Applicant Intelligence Agent.
4. Open Tools, add a new REST API tool, and import the YAML file.
5. For this synthetic demo API, select No authentication.
6. Enable the `GetApplicant` operation.
7. Copy the instructions from `copilot-studio/AGENT-INSTRUCTIONS.txt` into the agent instructions.
8. Save, test, and publish the agent.

## Test conversation

Open applicant `APP-102`, select **Copy agent prompt**, paste it into the agent, and verify the response uses Casey Morgan's retrieved record.

## Security boundary

This package uses synthetic public demo data and no authentication. Do not expose real resumes or applicant data through an unauthenticated endpoint. A production implementation should use Microsoft Entra ID, API authorization, audit logging, least-privilege access, and WoodmenLife's agent deployment and review process.
