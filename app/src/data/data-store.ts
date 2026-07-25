import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// ESM has no __dirname global.
const __dirname = dirname(fileURLToPath(import.meta.url));

function loadJson<T>(fileName: string): T {
  return JSON.parse(readFileSync(join(__dirname, fileName), 'utf-8')) as T;
}

export interface InventoryItem {
  item: string;
  available: boolean;
  quantity: number;
  safetyStock: number;
}

export interface Vendor {
  vendorId: string;
  name: string;
  item: string;
  price: number;
  rating: number;
  approved: boolean;
}

export const getInventory = (): InventoryItem[] => loadJson<InventoryItem[]>('inventory.json');
export const getVendors = (): Vendor[] => loadJson<Vendor[]>('vendors.json');
