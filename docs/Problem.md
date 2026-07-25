# Problem

Procurement teams react to inventory shortages manually: someone notices stock
is low, hunts down vendor contact info, requests quotes, checks whether the
purchase fits policy, decides who to buy from, and drafts a purchase order.
Each step is slow and easy to get wrong under time pressure.

## What we're demonstrating

An MCP-native workflow where an AI assistant, given nothing but a natural
language trigger ("Rice is out of stock"), calls a chain of small,
deterministic tools to go from "we're out of stock" to a ready-to-approve
purchase order — with a human still required to approve the final PO.

## Scope for this hackathon

- One linear workflow, 6 tools, mock data
- No authentication, no databases, no real vendor APIs, no multi-agent
  framework — see `Architecture.md` for the full non-goals list
- Focus: a working, demoable end-to-end path, not an exhaustive procurement
  system
