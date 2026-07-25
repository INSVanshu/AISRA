import { ToolDecorator as Tool, ExecutionContext, z } from '@nitrostack/core';
import { getVendors } from '../../data/data-store.js';

const InputSchema = z.object({
  item: z.string().describe('Item name to find vendors for, e.g. "Rice"')
});

export class VendorTools {
  @Tool({
    name: 'find_vendor',
    description: 'Find vendors who supply a given item.',
    inputSchema: InputSchema
  })
  async findVendor(input: z.infer<typeof InputSchema>, _ctx: ExecutionContext) {
    const vendors = getVendors().filter(
      (v) => v.item.toLowerCase() === input.item.toLowerCase()
    );

    return {
      item: input.item,
      count: vendors.length,
      vendors: vendors.map((v) => ({
        vendorId: v.vendorId,
        name: v.name,
        price: v.price,
        rating: v.rating,
        approved: v.approved
      }))
    };
  }
}
