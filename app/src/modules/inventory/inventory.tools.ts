import { ToolDecorator as Tool, ExecutionContext, z } from '@nitrostack/core';
import { getInventory } from '../../data/data-store.js';

const InputSchema = z.object({
  item: z.string().describe('Item name to check, e.g. "Rice"')
});

export class InventoryTools {
  @Tool({
    name: 'check_inventory',
    description: 'Check whether an item is in stock and how much quantity is available.',
    inputSchema: InputSchema
  })
  async checkInventory(input: z.infer<typeof InputSchema>, _ctx: ExecutionContext) {
    const record = getInventory().find(
      (i) => i.item.toLowerCase() === input.item.toLowerCase()
    );

    if (!record) {
      return { available: false, quantity: 0, item: input.item, note: 'Item not found in inventory' };
    }

    return {
      item: record.item,
      available: record.quantity > 0,
      quantity: record.quantity,
      belowSafetyStock: record.quantity < record.safetyStock
    };
  }
}
