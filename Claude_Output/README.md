# HorizonEldersdum

Autonomous procurement workflow — 4 deterministic MCP tools built with the
official NitroStack TypeScript SDK.

## The workflow

```
check_inventory → find_vendor → generate_rfq → recommend_supplier
```

AI Chat calls these 4 tools directly, in sequence, for a demo prompt like:

> "Rice is out of stock. Find a vendor, generate an RFQ, and recommend a
> supplier."

## Tools

| Tool | Input | Output |
|---|---|---|
| `check_inventory` | `{ item }` | `{ available, quantity, belowSafetyStock }` |
| `find_vendor` | `{ item }` | `{ vendors: [{ vendorId, name, price, rating, approved }] }` |
| `generate_rfq` | `{ item, vendorId }` | `{ rfqId, status }` |
| `recommend_supplier` | `{ vendors: [...] }` | `{ recommendedVendor, confidence, reason }` |

All tools are deterministic (mock JSON data, no external APIs, no LLM calls
inside the tool itself) — they return structured JSON only.

## Run locally

```bash
npm install
npm run dev
```

You should see all 4 tools log as "registered".

## Production build

```bash
npm run build
npm run start:prod
```

## Test in NitroStudio

Add Server → Nitro Project → point at this folder → Studio App Canvas → Tools.

Try `check_inventory` with `{ "item": "Rice" }` first — it returns
`available: false`, which is the trigger for the whole demo workflow.

## Docs

- [`docs/Problem.md`](docs/Problem.md)
- [`docs/Architecture.md`](docs/Architecture.md)
- [`docs/Workflow.md`](docs/Workflow.md)

## Cut from an earlier draft (may add back if time allows)

`check_policy` and `generate_purchase_order` were part of an earlier 6-tool
version. Cut for scope — see `docs/Architecture.md` for reasoning. Adding a
purchase-order tool back is the natural next step if time allows.
