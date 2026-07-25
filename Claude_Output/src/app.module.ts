import { McpApp, Module, ConfigModule } from '@nitrostack/core';
import { InventoryModule } from './modules/inventory/inventory.module.js';
import { VendorModule } from './modules/vendor/vendor.module.js';
import { RfqModule } from './modules/rfq/rfq.module.js';
import { DecisionModule } from './modules/decision/decision.module.js';
import { SystemHealthCheck } from './health/system.health.js';

/**
 * Linear workflow: Inventory -> Vendor -> RFQ -> Supplier Recommendation.
 * 4 tools, one per module. No agents, no orchestration framework —
 * the AI Chat layer calls these tools directly in sequence.
 */
@McpApp({
  module: AppModule,
  server: { name: 'horizoneldersdum', version: '1.0.0' },
  logging: { level: 'info' }
})
@Module({
  name: 'app',
  description: 'Autonomous procurement workflow - 4 MCP tools',
  imports: [
    ConfigModule.forRoot(),
    InventoryModule,
    VendorModule,
    RfqModule,
    DecisionModule
  ],
  providers: [SystemHealthCheck]
})
export class AppModule {}
