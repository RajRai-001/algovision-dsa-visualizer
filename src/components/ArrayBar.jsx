import React from "react";

const ArrayBars = ({
  array,
  comparing = [],
  swapping = [],
  sorted = [],
}) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-bold text-white">
          📊 Array Visualization
        </h2>

        <p className="text-gray-400">
          Total Elements :
          <span className="text-cyan-400 font-bold ml-2">
            {array.length}
          </span>
        </p>

      </div>

      {/* Bars */}

      <div className="flex justify-center items-end gap-2 h-[420px] overflow-hidden">

        {array.map((value, index) => {
          let color =
            "bg-gradient-to-t from-cyan-500 to-blue-500";

          if (comparing.includes(index))
            color =
              "bg-gradient-to-t from-yellow-400 to-orange-500";

          if (swapping.includes(index))
            color =
              "bg-gradient-to-t from-red-500 to-pink-600";

          if (sorted.includes(index))
            color =
              "bg-gradient-to-t from-green-500 to-emerald-600";

          return (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              {/* Value */}

              <span className="text-xs text-gray-300 mb-2">
                {value}
              </span>

              {/* Bar */}

              <div
                className={`
                  ${color}
                  w-8
                  rounded-t-lg
                  transition-all
                  duration-300
                  ease-in-out
                  shadow-lg
                `}
                style={{
                  height: `${value * 3}px`,
                }}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Legend */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-500"></div>
          <span className="text-gray-300">Normal</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-yellow-400"></div>
          <span className="text-gray-300">Comparing</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-red-500"></div>
          <span className="text-gray-300">Swapping</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-green-500"></div>
          <span className="text-gray-300">Sorted</span>
        </div>

      </div>
    </div>
  );
};

export default ArrayBars;