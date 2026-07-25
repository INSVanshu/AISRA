# Architecture

```
User
 │
 ▼
NitroStack AI Chat
 │
 ▼
check_inventory
 │
 ▼
find_vendor
 │
 ▼
generate_rfq
 │
 ▼
recommend_supplier
```

## Stack

- **Backend**: NitroStack TypeScript SDK (`@nitrostack/core`) — the only
  supported SDK for NitroCloud deployment
- **Data**: mock JSON files under `src/data/` (`inventory.json`,
  `vendors.json`)
- **LLM**: whichever model is configured in NitroStudio AI Chat / Compose
- **Deployment**: NitroCloud

## Folder structure

```
HorizonEldersdum/
├── src/
│   ├── modules/
│   │   ├── inventory/  # check_inventory
│   │   ├── vendor/     # find_vendor
│   │   ├── rfq/        # generate_rfq
│   │   └── decision/   # recommend_supplier
│   ├── data/            # mock JSON datasets
│   ├── health/           # health check (template boilerplate)
│   ├── app.module.ts
│   └── index.ts
├── scripts/copy-assets.mjs  # copies src/data/*.json into dist/ on build
├── docs/
├── package.json
└── tsconfig.json
```

## Design rules

- Each tool is one file, does one job, returns structured JSON, and never
  calls another tool or reasons — that's the AI's job in AI Chat / Compose.
- `recommend_supplier` is deterministic rule-based scoring (price + rating),
  not an LLM call inside the tool — the tool stays testable and repeatable;
  the LLM layer is free to explain/present the result however it wants.

## Explicit non-goals

Login/authentication, a multi-agent orchestration framework, FastAPI/Python
backend, databases (Postgres/MongoDB), Docker, Kafka, Redis, LangChain,
CrewAI, LangGraph, custom orchestrators, microservices, multiple repos,
policy-compliance checking, purchase-order generation.

The last two were in an earlier 6-tool draft and were cut to fit the time
remaining — see README for how to add them back if time allows.
