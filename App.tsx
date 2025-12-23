
import React, { useState, useMemo, useCallback } from 'react';
import { Product, CalculatedProduct, StrategyResult } from './types';
import { PRESET_PRODUCTS } from './constants';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import StrategyComparison from './components/StrategyComparison';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(PRESET_PRODUCTS);

  const calculatedProducts = useMemo(() => {
    return products.map(p => ({
      ...p,
      unitProfit: Number((p.sell - p.cost).toFixed(2)),
      totalWeeklyProfit: Number(((p.sell - p.cost) * p.demand).toFixed(2)),
      marginPercentage: Number((((p.sell - p.cost) / p.cost) * 100).toFixed(2))
    }));
  }, [products]);

  const addProduct = useCallback((newProduct: Omit<Product, 'id'>) => {
    const product: Product = {
      ...newProduct,
      id: Math.random().toString(36).substring(2, 9)
    };
    setProducts(prev => [...prev, product]);
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);

  const resetPresets = useCallback(() => {
    setProducts(PRESET_PRODUCTS);
  }, []);

  const highMarginStrategy = useMemo((): StrategyResult => {
    const sorted = [...calculatedProducts].sort((a, b) => b.marginPercentage - a.marginPercentage);
    const top5 = sorted.slice(0, 5);
    const total = top5.reduce((sum, p) => sum + p.totalWeeklyProfit, 0);
    return {
      name: "High Margin Strategy",
      products: top5,
      totalWeeklyProfit: total
    };
  }, [calculatedProducts]);

  const highVolumeStrategy = useMemo((): StrategyResult => {
    const sorted = [...calculatedProducts].sort((a, b) => b.totalWeeklyProfit - a.totalWeeklyProfit);
    const top5 = sorted.slice(0, 5);
    const total = top5.reduce((sum, p) => sum + p.totalWeeklyProfit, 0);
    return {
      name: "High Volume Strategy",
      products: top5,
      totalWeeklyProfit: total
    };
  }, [calculatedProducts]);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">FrostOptima</h1>
            <p className="text-slate-500 mt-1">Frozen Food Profit Calculator & Optimizer</p>
          </div>
          <button
            onClick={resetPresets}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors border border-blue-100"
          >
            Load Default Presets
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Add New Product</h2>
              <ProductForm onAdd={addProduct} />
            </section>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Inventory Overview</h2>
              <ProductList 
                products={calculatedProducts} 
                onRemove={removeProduct} 
              />
            </section>

            <StrategyComparison 
              strategyA={highMarginStrategy} 
              strategyB={highVolumeStrategy} 
            />
          </div>
        </div>
      </div>
      <footer className="mt-16 text-center text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} FrostOptima Logistics. Internal Tool Use Only.
      </footer>
    </div>
  );
};

export default App;
