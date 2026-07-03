import React from "react";

const ComplexityCard = ({
  algorithm,
  best,
  average,
  worst,
  space,
  description,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl">

      {/* Header */}

      <div className="flex items-center gap-3 mb-6">

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-2xl">
          📊
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            {algorithm}
          </h2>

          <p className="text-gray-400 text-sm">
            Complexity Analysis
          </p>
        </div>

      </div>

      {/* Complexity Table */}

      <div className="space-y-4">

        <div className="flex justify-between items-center bg-slate-800 rounded-xl px-4 py-3">
          <span className="text-gray-300">🟢 Best Case</span>
          <span className="font-bold text-green-400">{best}</span>
        </div>

        <div className="flex justify-between items-center bg-slate-800 rounded-xl px-4 py-3">
          <span className="text-gray-300">🟡 Average Case</span>
          <span className="font-bold text-yellow-400">{average}</span>
        </div>

        <div className="flex justify-between items-center bg-slate-800 rounded-xl px-4 py-3">
          <span className="text-gray-300">🔴 Worst Case</span>
          <span className="font-bold text-red-400">{worst}</span>
        </div>

        <div className="flex justify-between items-center bg-slate-800 rounded-xl px-4 py-3">
          <span className="text-gray-300">💾 Space Complexity</span>
          <span className="font-bold text-cyan-400">{space}</span>
        </div>

      </div>

      {/* Description */}

      <div className="mt-8 p-4 rounded-2xl bg-slate-800 border border-slate-700">

        <h3 className="text-lg font-semibold text-cyan-400 mb-2">
          📘 About
        </h3>

        <p className="text-gray-300 leading-7">
          {description}
        </p>

      </div>

    </div>
  );
};

export default ComplexityCard;