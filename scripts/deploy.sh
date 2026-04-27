#!/usr/bin/env bash
set -euo pipefail

PROD_URL="https://buildwithportal.life"

npm run build

DEPLOY_URL="$(vercel deploy --prod --yes)"

echo "Deployed: ${DEPLOY_URL}"

curl -fsS "${PROD_URL}" >/dev/null
curl -fsS "${PROD_URL}/images/brand/portal-logo-homepage.jpg" >/dev/null

echo "Smoke checks passed: ${PROD_URL}"
