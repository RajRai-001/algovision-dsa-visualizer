import React from "react";

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl">

      {/* Heading */}

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-xl font-bold text-white">
          ⚡ Animation Speed
        </h2>

        <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold">
          {speed} ms
        </span>

      </div>

      {/* Slider */}

      <input
        type="range"
        min="50"
        max="1000"
        step="50"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
        className="w-full h-2 accent-cyan-500 cursor-pointer"
      />

      {/* Labels */}

      <div className="flex justify-between mt-3 text-sm text-gray-400">

        <span>⚡ Fast</span>

        <span>🚀 Normal</span>

        <span>🐢 Slow</span>

      </div>

      {/* Progress Bar */}

      <div className="w-full bg-slate-700 h-2 rounded-full mt-6 overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full transition-all duration-300"
          style={{
            width: `${((speed - 50) / (1000 - 50)) * 100}%`,
          }}
        ></div>

      </div>

    </div>
  );
};

export default SpeedSlider;