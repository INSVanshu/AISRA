import { ToolDecorator as Tool, ExecutionContext, z } from '@nitrostack/core';

const VendorOptionSchema = z.object({
  vendorId: z.string(),
  name: z.string(),
  price: z.number(),
  rating: z.number(),
  approved: z.boolean()
});

const InputSchema = z.object({
  vendors: z.array(VendorOptionSchema).min(1)
});

export class DecisionTools {
  @Tool({
    name: 'recommend_supplier',
    description: 'Score a list of vendor options and recommend the best supplier, with a confidence score and reason. Deterministic rule-based scoring — no LLM reasoning inside the tool.',
    inputSchema: InputSchema
  })
  async recommendSupplier(input: z.infer<typeof InputSchema>, _ctx: ExecutionContext) {
    const candidates = input.vendors.filter((v) => v.approved);
    const pool = candidates.length > 0 ? candidates : input.vendors;

    // Simple deterministic score: lower price is better, higher rating is better.
    const scored = pool.map((v) => {
      const priceScore = 1 / v.price;
      const ratingScore = v.rating / 5;
      const score = priceScore * 0.5 + ratingScore * 0.5;
      return { ...v, score };
    });

    scored.sort((a, b) => b.score - a.score);
    const best = scored[0];
    const secondBest = scored[1];

    const confidence = secondBest
      ? Math.min(0.99, 0.6 + (best.score - secondBest.score))
      : 0.75;

    return {
      recommendedVendor: { vendorId: best.vendorId, name: best.name },
      confidence: Number(confidence.toFixed(2)),
      reason: `${best.name} offers the best balance of price ($${best.price}) and rating (${best.rating}) among ${pool.length === input.vendors.length ? 'all' : 'approved'} vendor options.`
    };
  }
}
