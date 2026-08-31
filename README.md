# Staging-Zoho-EU-Form-Pre-Filling-Script

> 3LI Global — AIR Global integration estate. Generated 2026-08-31 by the US-Infrastructure audit. Facts below are drawn from this repo's code; anything not directly evidenced is marked _unverified_.

## Connected Resource
- **Azure resource:** none — single static `prefilling.js` hosted on **GitHub Pages** (`https://3liglobal.github.io/Staging-Zoho-EU-Form-Pre-Filling-Script/`).
- **Deploy trigger:** GitHub Pages, built from the `main` branch (no Actions workflow / no Azure Function App in this repo).
- **Talks to:** a **same-page embedded iframe** (element id `iframe`) via `iframe.contentWindow.postMessage(...)`. No backend, API, or CDN calls; it only reads the current page URL and messages the iframe.

## What It Does
It reads the `utm_medium` and `utm_campaign` query parameters from the host page's URL and forwards them, via `postMessage`, into the embedded Zoho form iframe so the form can pre-fill / capture campaign attribution.

## Why It Exists
Zoho embedded forms cannot read the parent page's URL parameters directly. This host-side helper bridges that gap: dropped onto the OOKA EU landing/campaign page that embeds the contact form, it hands the marketing UTM values to the form so lead records in Zoho CRM carry their campaign source. It is the **staging** twin of the production pre-filling script and pairs with the `Staging-Zoho-EU-*-Contact-Us-Form` repos.

## How It Works
1. On `DOMContentLoaded`, a 500 ms interval polls for an element with id `iframe`.
2. Once found, it parses `window.location` for `utm_medium` and `utm_campaign`.
3. It `postMessage`s `{ utm_medium, utm_campaign }` to `iframe.contentWindow` (target origin `"*"`), then clears the interval. If the iframe is never found it logs an error each tick.
- **Operator notes:** the embedded form must expose an element `id="iframe"` and listen for the message to apply the values. Debug `console.log` statements (`"testing-1"`, the UTM values) are present. Target origin is `"*"`.

---
_Environment:_ Staging (repo name prefixed `Staging-`)
_Runtime:_ Static JavaScript on GitHub Pages (host-page snippet, no dependencies)
