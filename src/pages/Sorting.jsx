import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import ArrayBars from "../components/ArrayBars";
import ControlPanel from "../components/ControlPanel";
import ComplexityCard from "../components/ComplexityCard";
import SpeedSlider from "../components/SpeedSlider";

const Sorting = () => {

  const [array, setArray] = useState([
    30, 70, 45, 90, 20, 80, 50, 65, 10, 55
  ]);

  const [speed, setSpeed] = useState(300);

  const [isSorting, setIsSorting] = useState(false);

  // Generate Random Array
  const generateArray = () => {

    const newArray = [];

    for (let i = 0; i < 10; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 10);
    }

    setArray(newArray);
  };

  // Temporary Functions
  const startSorting = () => {
    alert("Bubble Sort animation will be added next.");
    setIsSorting(true);

    setTimeout(() => {
      setIsSorting(false);
    }, 1000);
  };

  const pauseSorting = () => {
    alert("Pause feature coming soon.");
  };

  const resetArray = () => {
    generateArray();
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen flex">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <div className="flex-1 p-8">

        {/* Heading */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold">
            📊 Sorting Visualizer
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Learn sorting algorithms through beautiful
            interactive animations.
          </p>

        </div>

        {/* Array */}

        <ArrayBars
          array={array}
          comparing={[]}
          swapping={[]}
          sorted={[]}
        />

        {/* Control Panel */}

        <div className="mt-10">

          <ControlPanel
            generateArray={generateArray}
            startSorting={startSorting}
            pauseSorting={pauseSorting}
            resetArray={resetArray}
            speed={speed}
            setSpeed={setSpeed}
            isSorting={isSorting}
          />

        </div>

        {/* Speed */}

        <div className="mt-10">

          <SpeedSlider
            speed={speed}
            setSpeed={setSpeed}
          />

        </div>

        {/* Complexity */}

        <div className="mt-10">

          <ComplexityCard
            algorithm="Bubble Sort"
            best="O(n)"
            average="O(n²)"
            worst="O(n²)"
            space="O(1)"
            description="Bubble Sort repeatedly compares adjacent elements and swaps them whenever they are in the wrong order. Although simple to understand, it is inefficient for large datasets."
          />

        </div>

      </div>

    </div>
  );
};

export default Sorting;