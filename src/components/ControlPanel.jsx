import React from "react";

const ControlPanel = ({
  generateArray,
  startSorting,
  pauseSorting,
  resetArray,
  speed,
  setSpeed,
  isSorting,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl">

      {/* Heading */}

      <h2 className="text-2xl font-bold text-white mb-6">
        🎮 Control Panel
      </h2>

      {/* Buttons */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Generate */}

        <button
          onClick={generateArray}
          disabled={isSorting}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-xl font-semibold hover:scale-105 active:scale-95 transition disabled:opacity-50"
        >
          🎲 Generate
        </button>

        {/* Start */}

        <button
          onClick={startSorting}
          disabled={isSorting}
          className="bg-green-600 py-3 rounded-xl font-semibold hover:bg-green-700 active:scale-95 transition disabled:opacity-50"
        >
          ▶ Start
        </button>

        {/* Pause */}

        <button
          onClick={pauseSorting}
          className="bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 active:scale-95 transition"
        >
          ⏸ Pause
        </button>

        {/* Reset */}

        <button
          onClick={resetArray}
          className="bg-red-600 py-3 rounded-xl font-semibold hover:bg-red-700 active:scale-95 transition"
        >
          🔄 Reset
        </button>

      </div>

      {/* Speed */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <h3 className="font-semibold text-gray-300">
            Animation Speed
          </h3>

          <span className="text-cyan-400 font-bold">
            {speed} ms
          </span>

        </div>

        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full accent-cyan-500 cursor-pointer"
        />

        <div className="flex justify-between text-sm text-gray-500 mt-2">

          <span>⚡ Fast</span>

          <span>🐢 Slow</span>

        </div>

      </div>

    </div>
  );
};

export default ControlPanel;