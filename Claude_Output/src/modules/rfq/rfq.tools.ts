import { ToolDecorator as Tool, ExecutionContext, z } from '@nitrostack/core';

const InputSchema = z.object({
  item: z.string(),
  vendorId: z.string()
});

// Simple incrementing counter for the demo — resets on server restart,
// which is fine for a hackathon demo.
let rfqCounter = 0;

export class RfqTools {
  @Tool({
    name: 'generate_rfq',
    description: 'Generate a Request for Quotation (RFQ) for an item from a vendor.',
    inputSchema: InputSchema
  })
  async generateRfq(input: z.infer<typeof InputSchema>, _ctx: ExecutionContext) {
    rfqCounter += 1;
    const rfqId = `RFQ-${String(rfqCounter).padStart(3, '0')}`;

    return {
      rfqId,
      item: input.item,
      vendorId: input.vendorId,
      status: 'CREATED',
      createdAt: new Date().toISOString()
    };
  }
}
