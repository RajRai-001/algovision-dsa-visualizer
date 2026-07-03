import React from "react";
import { Link } from "react-router-dom";

const AlgorithmCard = ({
  title,
  description,
  icon,
  time,
  space,
  difficulty,
  path,
}) => {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-700
      bg-slate-900
      hover:border-cyan-400
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-2xl
      hover:shadow-cyan-500/20
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition duration-500"></div>

      <div className="relative p-6">

        {/* Icon */}

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex justify-center items-center text-3xl shadow-lg">
          {icon}
        </div>

        {/* Title */}

        <h2 className="text-2xl font-bold mt-5 text-white">
          {title}
        </h2>

        {/* Description */}

        <p className="mt-4 text-gray-400 leading-7">
          {description}
        </p>

        {/* Complexity */}

        <div className="mt-6 space-y-3">

          <div className="flex justify-between">

            <span className="text-gray-500">
              Time Complexity
            </span>

            <span className="text-cyan-400 font-semibold">
              {time}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
              Space Complexity
            </span>

            <span className="text-cyan-400 font-semibold">
              {space}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-500">
              Difficulty
            </span>

            <span className="text-yellow-400 font-semibold">
              {difficulty}
            </span>

          </div>

        </div>

        {/* Button */}

        <Link
          to={path}
          className="
          mt-8
          block
          text-center
          rounded-xl
          py-3
          font-semibold
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
          hover:scale-105
          transition
          duration-300
          "
        >
          🚀 Visualize
        </Link>

      </div>
    </div>
  );
};

export default AlgorithmCard;