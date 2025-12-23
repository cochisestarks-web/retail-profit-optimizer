
import React from 'react';
import { CalculatedProduct } from '../types';

interface ProductListProps {
  products: CalculatedProduct[];
  onRemove: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onRemove }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 italic">
        No products added yet. Add one to start calculating.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Cost</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Sell</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Demand</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">U. Profit</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Margin</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">W. Profit</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {products.map((p) => (
            <tr key={p.id} className="hover:bg-slate-50 transition-colors group">
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{p.name}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-slate-600">${p.cost.toFixed(2)}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-slate-600">${p.sell.toFixed(2)}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-slate-600">{p.demand}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">${p.unitProfit.toFixed(2)}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-slate-600">{p.marginPercentage}%</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-right font-bold text-slate-900">${p.totalWeeklyProfit.toLocaleString()}</td>
              <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                <button
                  onClick={() => onRemove(p.id)}
                  className="text-red-400 hover:text-red-600 p-1 rounded transition-opacity opacity-0 group-hover:opacity-100"
                  title="Remove product"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
