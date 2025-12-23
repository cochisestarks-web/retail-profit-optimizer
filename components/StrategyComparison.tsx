
import React from 'react';
import { StrategyResult } from '../types';

interface StrategyComparisonProps {
  strategyA: StrategyResult;
  strategyB: StrategyResult;
}

const StrategyComparison: React.FC<StrategyComparisonProps> = ({ strategyA, strategyB }) => {
  const winner = strategyA.totalWeeklyProfit > strategyB.totalWeeklyProfit ? 'A' : 'B';
  const draw = strategyA.totalWeeklyProfit === strategyB.totalWeeklyProfit;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-slate-800">Strategy Comparison (Top 5 Focused)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strategy A Card */}
        <div className={`p-6 rounded-xl border-2 transition-all ${
          !draw && winner === 'A' 
            ? 'bg-blue-50 border-blue-200 shadow-md ring-1 ring-blue-100' 
            : 'bg-white border-slate-200 opacity-90'
        }`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest">High Margin</h3>
              <p className="text-xs text-slate-500">Sorted by % Profit Margin</p>
            </div>
            {!draw && winner === 'A' && (
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
                Most Profitable
              </span>
            )}
          </div>
          
          <ul className="space-y-2 mb-6">
            {strategyA.products.map((p, i) => (
              <li key={p.id} className="flex justify-between text-sm">
                <span className="text-slate-600 truncate mr-2">{i+1}. {p.name}</span>
                <span className="text-slate-900 font-medium whitespace-nowrap">${p.totalWeeklyProfit.toLocaleString()}</span>
              </li>
            ))}
            {strategyA.products.length === 0 && (
              <li className="text-slate-400 italic text-sm">Add products to see analysis</li>
            )}
          </ul>

          <div className="pt-4 border-t border-slate-200">
            <div className="text-xs text-slate-500 uppercase font-semibold">Total Weekly Contribution</div>
            <div className="text-3xl font-black text-slate-900">
              ${strategyA.totalWeeklyProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        </div>

        {/* Strategy B Card */}
        <div className={`p-6 rounded-xl border-2 transition-all ${
          !draw && winner === 'B' 
            ? 'bg-indigo-50 border-indigo-200 shadow-md ring-1 ring-indigo-100' 
            : 'bg-white border-slate-200 opacity-90'
        }`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest">High Volume</h3>
              <p className="text-xs text-slate-500">Sorted by Total Weekly Profit</p>
            </div>
            {!draw && winner === 'B' && (
              <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
                Most Profitable
              </span>
            )}
          </div>
          
          <ul className="space-y-2 mb-6">
            {strategyB.products.map((p, i) => (
              <li key={p.id} className="flex justify-between text-sm">
                <span className="text-slate-600 truncate mr-2">{i+1}. {p.name}</span>
                <span className="text-slate-900 font-medium whitespace-nowrap">${p.totalWeeklyProfit.toLocaleString()}</span>
              </li>
            ))}
            {strategyB.products.length === 0 && (
              <li className="text-slate-400 italic text-sm">Add products to see analysis</li>
            )}
          </ul>

          <div className="pt-4 border-t border-slate-200">
            <div className="text-xs text-slate-500 uppercase font-semibold">Total Weekly Contribution</div>
            <div className="text-3xl font-black text-slate-900">
              ${strategyB.totalWeeklyProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        </div>
      </div>
      
      {!draw && (
        <div className="text-center p-3 bg-slate-100 rounded-lg text-slate-600 text-sm font-medium">
          The <span className="text-slate-900 font-bold">{winner === 'A' ? 'High Margin' : 'High Volume'}</span> strategy generates 
          <span className="text-green-600 mx-1">
            ${Math.abs(strategyA.totalWeeklyProfit - strategyB.totalWeeklyProfit).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span> 
          more profit weekly.
        </div>
      )}
    </div>
  );
};

export default StrategyComparison;
