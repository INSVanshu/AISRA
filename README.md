# 🧁 AISRA
## Autonomous Intelligent Smart Resource Assistant

### AI Operations Manager for Home Bakeries

---

## 🚀 Problem Statement

Home bakeries often operate with limited staff, manual inventory tracking, and time-sensitive production schedules.

Every day, bakery owners need to answer questions like:

- Do I have enough ingredients?
- Can I complete today's orders?
- Which ingredients must be purchased?
- Which supplier should I choose?
- Will production be delayed?

These decisions are usually made manually, increasing the risk of:

- Ingredient shortages
- Delayed customer deliveries
- Higher procurement costs
- Poor supplier selection
- Inefficient production planning

AISRA acts as an intelligent operations manager that automates these decisions.

---

# 💡 Solution

AISRA is an AI-powered Bakery Operations Assistant built using the Model Context Protocol (MCP).

Instead of functioning as a simple chatbot, AISRA autonomously analyzes bakery operations by:

- Checking ingredient availability
- Detecting production risks
- Finding suitable ingredient suppliers
- Selecting the best supplier
- Generating purchase requests
- Producing an executive bakery operations report

The result is faster operational decision-making with minimal manual effort.

---

# ✨ Key Features

## 📦 Ingredient Availability Analysis

Evaluates bakery ingredient inventory.

Determines:

- Healthy Stock
- Low Stock
- Critical Shortage

Provides production recommendations automatically.

---

## 🚚 Smart Supplier Recommendation

Evaluates suppliers based on:

- Ingredient Quality
- Supplier Rating
- Cost
- Approval Status

Returns the most suitable supplier for bakery production.

---

## 🧠 Intelligent Decision Engine

AISRA explains every recommendation.

Instead of simply recommending a supplier, it explains:

- Why the supplier was selected
- Business impact
- Production impact
- Confidence score

---

## 📝 Ingredient Purchase Request Generation

Automatically prepares purchase requests whenever shortages are detected.

Includes:

- Supplier
- Ingredient
- Quantity
- Estimated Cost
- Approval Requirement

---

## 📊 Bakery Operations Report

AISRA combines all tool outputs into an executive summary containing:

- Ingredient Availability
- Production Readiness
- Missing Ingredients
- Supplier Recommendation
- Purchase Request
- Next Actions

---

# 🏗 Architecture

```
                User

                  │

                  ▼

        AISRA Operations Agent
          (LLM Orchestrator)

                  │

      ┌───────────┼────────────┐
      │           │            │
      ▼           ▼            ▼

Ingredient     Supplier      Decision
 Analysis      Selection      Engine

                  │
                  ▼

       Purchase Request Generator

                  │
                  ▼

      Bakery Operations Report
```

---

# 🛠 Technology Stack

- NitroStack
- Model Context Protocol (MCP)
- TypeScript
- Node.js
- JSON Data Store
- Zod Validation

---

# 📂 Project Structure

```
src/

├── data/

│   ├── inventory.json

│   ├── vendors.json

│   └── policies.json

│

├── modules/

│   ├── inventory/

│   ├── vendor/

│   ├── decision/

│   └── rfq/

│

├── services/

│   └── policy.service.ts
```

---

# 🔄 Workflow

```
Customer Orders

        │

        ▼

Ingredient Availability

        │

        ▼

Production Readiness

        │

        ▼

Supplier Recommendation

        │

        ▼

Purchase Request

        │

        ▼

Bakery Operations Report
```

---

# 📷 Demo Screenshots

## 1️⃣ Project Architecture

> *(Insert architecture diagram here)*

![Architecture](docs/screenshots/architecture.png)

---

## 2️⃣ NitroStudio Dashboard

> *(Insert screenshot showing AISRA loaded in NitroStudio)*

![Studio](docs/screenshots/studio-home.png)

---

## 3️⃣ Ingredient Availability Analysis

Prompt:

```
Check inventory for Butter
```

Expected screenshot:

- Production Status
- Recommendation
- Confidence
- Next Actions

![Inventory](docs/screenshots/inventory-analysis.png)

---

## 4️⃣ Supplier Recommendation

Prompt:

```
Find vendors for Butter
```

Expected screenshot:

- Recommended Supplier
- Supplier Comparison
- Decision Confidence

![Supplier](docs/screenshots/supplier-selection.png)

---

## 5️⃣ Decision Engine

Prompt:

```
Recommend supplier for Butter
```

Expected screenshot:

- Supplier Scorecard
- Operational Reasoning
- Production Impact

![Decision](docs/screenshots/decision-engine.png)

---

## 6️⃣ Purchase Request

Prompt:

```
Generate purchase request for Butter
```

Expected screenshot:

- Purchase Request
- Estimated Cost
- Production Status

![Purchase](docs/screenshots/purchase-request.png)

---

## 7️⃣ End-to-End Bakery Operations

Prompt:

```
We received orders for:

• 5 Birthday Cakes

• 24 Cupcakes

Can we complete today's production?
```

Expected screenshot:

- Ingredient Analysis
- Supplier Recommendation
- Purchase Request
- Operations Summary

This should be your **hero screenshot**.

![Workflow](docs/screenshots/end-to-end-demo.png)

---

# 🎯 Future Scope

- ERP Integration
- Real-time Inventory Sync
- Supplier APIs
- Multi-branch Bakery Support
- Sales Forecasting
- Demand Prediction
- Automated Purchase Orders
- Expiry Tracking
- AI Production Scheduling

---

# 👥 Team

Hackathon Project

Built using NitroStack and MCP.

---
