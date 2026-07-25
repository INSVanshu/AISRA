# Workflow

## Demo prompt

> "Rice is out of stock. Find a vendor, generate an RFQ, and recommend a
> supplier."

## Step by step

1. **`check_inventory({ item: "Rice" })`**
   → `{ available: false, quantity: 0, belowSafetyStock: true }`
   Confirms the shortage that triggers the workflow.

2. **`find_vendor({ item: "Rice" })`**
   → 3 vendors (A, B, C) with price + rating.

3. **`generate_rfq({ item: "Rice", vendorId: "VEND-C" })`** (repeat per
   vendor if you want multiple RFQs on screen)
   → `{ rfqId: "RFQ-001", status: "CREATED" }`

4. **`recommend_supplier({ vendors: [...] })`**
   → `{ recommendedVendor: { vendorId: "VEND-C", name: "Vendor C" }, confidence: 0.8x, reason: "..." }`

That's the full demo. No policy check, no PO generation in this scope — the
workflow ends at "here's who to buy from and why."
