
export interface Product {
  id: string;
  name: string;
  cost: number;
  sell: number;
  demand: number;
}

export interface CalculatedProduct extends Product {
  unitProfit: number;
  totalWeeklyProfit: number;
  marginPercentage: number;
}

export interface StrategyResult {
  name: string;
  products: CalculatedProduct[];
  totalWeeklyProfit: number;
}
