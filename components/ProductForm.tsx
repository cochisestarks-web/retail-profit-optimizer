
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductFormProps {
  onAdd: (product: Omit<Product, 'id'>) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [sell, setSell] = useState('');
  const [demand, setDemand] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !cost || !sell || !demand) return;

    onAdd({
      name,
      cost: parseFloat(cost),
      sell: parseFloat(sell),
      demand: parseInt(demand, 10)
    });

    setName('');
    setCost('');
    setSell('');
    setDemand('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Frozen Pizza"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Cost Price ($)</label>
          <input
            type="number"
            step="0.01"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="0.00"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Sell Price ($)</label>
          <input
            type="number"
            step="0.01"
            value={sell}
            onChange={(e) => setSell(e.target.value)}
            placeholder="0.00"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Weekly Demand (Units)</label>
        <input
          type="number"
          value={demand}
          onChange={(e) => setDemand(e.target.value)}
          placeholder="0"
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-slate-900 text-white font-semibold py-3 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
