import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import ControlPanel from "../components/ControlPanel";
import SpeedSlider from "../components/SpeedSlider";
import ComplexityCard from "../components/ComplexityCard";

import { preorderTraversal } from "../algorithms/preorder";
import { inorderTraversal } from "../algorithms/inorder";
import { postorderTraversal } from "../algorithms/postorder";

const Trees = () => {

  const [speed, setSpeed] = useState(300);

  const [isRunning, setIsRunning] = useState(false);

  const [algorithm, setAlgorithm] = useState("Preorder");

  const [currentNode, setCurrentNode] = useState(null);

  const [visitedNodes, setVisitedNodes] = useState([]);

  const [traversalOrder, setTraversalOrder] = useState([]);

  const tree = {
    value: 50,

    left: {
      value: 30,

      left: {
        value: 20,
        left: null,
        right: null,
      },

      right: {
        value: 40,
        left: null,
        right: null,
      },
    },

    right: {
      value: 70,

      left: {
        value: 60,
        left: null,
        right: null,
      },

      right: {
        value: 80,
        left: null,
        right: null,
      },
    },
  };

  const treeDetails = {

    Preorder: {

      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(h)",

      description:
        "Visits Root → Left → Right.",

    },

    Inorder: {

      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(h)",

      description:
        "Visits Left → Root → Right.",

    },

    Postorder: {

      best: "O(n)",
      average: "O(n)",
      worst: "O(n)",
      space: "O(h)",

      description:
        "Visits Left → Right → Root.",

    },

  };

  const startTraversal = async () => {

    setIsRunning(true);

    setCurrentNode(null);

    setVisitedNodes([]);
    setTraversalOrder([]);

    if (algorithm === "Preorder") {

          await preorderTraversal(
            tree,
          tree,
      setCurrentNode,
      setVisitedNodes,
      setTraversalOrder,
      speed
     );

    }

    else if (algorithm === "Inorder") {

        await inorderTraversal(
             tree,
     tree,
     setCurrentNode,
     setVisitedNodes,
     setTraversalOrder,
     speed
    );

    }

    else {

      await postorderTraversal(
      tree,
      tree,
      setCurrentNode,
      setVisitedNodes,
      setTraversalOrder,
      speed
     );
    }

    setCurrentNode(null);

    setIsRunning(false);

  };

  const generateTree = () => {

    setCurrentNode(null);

    setVisitedNodes([]);
    setTraversalOrder([]);

  };

  const pauseTraversal = () => {

    alert("Pause feature coming soon.");

  };

  const resetTree = () => {

    setCurrentNode(null);

    setVisitedNodes([]);
     setTraversalOrder([]);

     setIsRunning(false);

  };

  const nodeColor = (value, color) => {

    if (currentNode === value)
      return "bg-yellow-500";

    if (visitedNodes.includes(value))
      return "bg-green-500";

    return color;

  };

  return (
  <div className="bg-slate-950 text-white min-h-screen flex">

    <Sidebar />

    <div className="flex-1 p-8">

      {/* Heading */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          🌳 Tree Visualizer
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Visualize tree traversal algorithms step by step.
        </p>

      </div>

      {/* Algorithm Selector */}

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 mb-10">

        <label className="block mb-3 text-lg font-semibold">
          Select Traversal
        </label>

        <select
          value={algorithm}
          onChange={(e) => {

            setAlgorithm(e.target.value);

            setCurrentNode(null);

            setVisitedNodes([]);
            setTraversalOrder([]);

          }}
          className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none"
        >

          <option>Preorder</option>

          <option>Inorder</option>

          <option>Postorder</option>

        </select>

      </div>

      {/* Tree */}

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10">

        <h2 className="text-2xl font-bold mb-10">
          🌲 Binary Tree
        </h2>

        <div className="flex justify-center">

          <div className="relative w-[700px] h-[450px]">

            {/* Edges */}

            <div className="absolute top-16 left-[240px] w-32 h-1 bg-slate-500 rotate-[28deg]" />

            <div className="absolute top-16 left-[390px] w-32 h-1 bg-slate-500 -rotate-[28deg]" />

            <div className="absolute top-44 left-[130px] w-24 h-1 bg-slate-500 rotate-[35deg]" />

            <div className="absolute top-44 left-[255px] w-24 h-1 bg-slate-500 -rotate-[35deg]" />

            <div className="absolute top-44 left-[445px] w-24 h-1 bg-slate-500 rotate-[35deg]" />

            <div className="absolute top-44 left-[565px] w-24 h-1 bg-slate-500 -rotate-[35deg]" />

            {/* Root */}

            <div
              className={`absolute top-7 left-[344px] w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${nodeColor(
                50,
                "bg-cyan-500"
              )}`}
            >
              50
            </div>

            {/* Level 2 */}

            <div
              className={`absolute top-35 left-[210px] w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${nodeColor(
                30,
                "bg-blue-500"
              )}`}
            >
              30
            </div>

            <div
              className={`absolute top-35 right-[120px] w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${nodeColor(
                70,
                "bg-blue-500"
              )}`}
            >
              70
            </div>

            {/* Level 3 */}

            <div
              className={`absolute bottom-20 left-20 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${nodeColor(
                20,
                "bg-purple-500"
              )}`}
            >
              20
            </div>

            <div
              className={`absolute bottom-20 left-[310px] w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${nodeColor(
                40,
                "bg-purple-500"
              )}`}
            >
              40
            </div>

            <div
              className={`absolute bottom-20 right-[200px] w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${nodeColor(
                60,
                "bg-purple-500"
              )}`}
            >
              60
            </div>

            <div
              className={`absolute bottom-20  right-5 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${nodeColor(
                80,
                "bg-purple-500"
              )}`}
            >
              80
            </div>

          </div>

        </div>

      </div>

            <div className="mt-10 bg-slate-900 border border-slate-700 rounded-3xl p-6">
      
        <h2 className="text-2xl font-bold mb-4">
          📋 Traversal Order
        </h2>
      
        <div className="flex flex-wrap gap-2 text-xl font-semibold text-cyan-400">
      
          {traversalOrder.length === 0 ? (
      
            <span className="text-gray-400">
              Click Start Traversal
            </span>
      
          ) : (
      
            traversalOrder.map((node, index) => (
      
              <span key={index}>
      
                {node}
      
                {index !== traversalOrder.length - 1 && " → "}
      
              </span>
      
            ))
      
          )}
      
        </div>
      
      </div>

      {/* Control Panel */}

      <div className="mt-10">

        <ControlPanel
          generateArray={generateTree}
          startSorting={startTraversal}
          pauseSorting={pauseTraversal}
          resetArray={resetTree}
          speed={speed}
          setSpeed={setSpeed}
          isSorting={isRunning}
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
          algorithm={algorithm}
          best={treeDetails[algorithm].best}
          average={treeDetails[algorithm].average}
          worst={treeDetails[algorithm].worst}
          space={treeDetails[algorithm].space}
          description={treeDetails[algorithm].description}
        />

      </div>

    </div>

  </div>
);
};
export default Trees;