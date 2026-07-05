import React, { useState } from "react";

import Sidebar from "../components/Sidebar";
import ArrayBars from "../components/ArrayBars";
import ControlPanel from "../components/ControlPanel";
import SpeedSlider from "../components/SpeedSlider";
import ComplexityCard from "../components/ComplexityCard";

import { bfs } from "../algorithms/bfs";
import { dfs } from "../algorithms/dfs";
import { dijkstra } from "../algorithms/dijkstra";

const Graphs = () => {

  const [speed, setSpeed] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  const [algorithm, setAlgorithm] = useState("Breadth First Search (BFS)");

  const [currentNode, setCurrentNode] = useState(null);
  const [visitedNodes, setVisitedNodes] = useState([]);

  // Graph Data
    const graph = {
     A: [
       { node: "B", weight: 4 },
       { node: "C", weight: 2 },
     ],
   
     B: [
       { node: "A", weight: 4 },
       { node: "C", weight: 1 },
       { node: "D", weight: 5 },
     ],
   
     C: [
       { node: "A", weight: 2 },
       { node: "B", weight: 1 },
       { node: "D", weight: 8 },
       { node: "E", weight: 10 },
     ],
   
     D: [
       { node: "B", weight: 5 },
       { node: "C", weight: 8 },
       { node: "E", weight: 2 },
     ],
   
     E: [
       { node: "C", weight: 10 },
       { node: "D", weight: 2 },
     ],
   };

  const graphDetails = {
    "Breadth First Search (BFS)": {
      best: "O(V + E)",
      average: "O(V + E)",
      worst: "O(V + E)",
      space: "O(V)",
      description:
        "Breadth First Search explores a graph level by level using a queue.",
    },

    "Depth First Search (DFS)": {
      best: "O(V + E)",
      average: "O(V + E)",
      worst: "O(V + E)",
      space: "O(V)",
      description:
        "Depth First Search explores one branch completely before backtracking.",
    },

    "Dijkstra's Algorithm": {
      best: "O((V + E) log V)",
      average: "O((V + E) log V)",
      worst: "O((V + E) log V)",
      space: "O(V)",
      description:
        "Dijkstra's Algorithm finds the shortest path from a source node to all other nodes.",
    },
  };

  const generateGraph = () => {

  setCurrentNode(null);

  setVisitedNodes([]);

};

  const startTraversal = async () => {

  setIsRunning(true);

  setCurrentNode(null);
  setVisitedNodes([]);

  if (algorithm === "Breadth First Search (BFS)") {

    await bfs(
      graph,
      "A",
      setCurrentNode,
      setVisitedNodes,
      speed
    );

  }

  else if (algorithm === "Depth First Search (DFS)") {

    await dfs(
      graph,
      "A",
      setCurrentNode,
      setVisitedNodes,
      speed
    );

  }

  else {

    await dijkstra(
      graph,
      "A",
      setCurrentNode,
      setVisitedNodes,
      speed
    );

  }

  setIsRunning(false);

};

  const pauseTraversal = () => {
    alert("Pause feature coming soon.");
  };

 const resetGraph = () => {

  setCurrentNode(null);

  setVisitedNodes([]);

  setIsRunning(false);

};
  const nodeClass = (node, defaultColor) => {

    if (currentNode === node)
      return "bg-yellow-500";

    if (visitedNodes.includes(node))
      return "bg-green-500";

    return defaultColor;
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen flex">

      <Sidebar />

      <div className="flex-1 p-8">

        {/* Heading */}

        <div className="mb-10">

          <h1 className="text-5xl font-bold">
            🕸️ Graph Visualizer
          </h1>

          <p className="text-gray-400 mt-4 text-lg">
            Visualize graph algorithms step by step.
          </p>

        </div>

        {/* Algorithm */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 mb-10">

          <label className="block mb-3 text-lg font-semibold">
            Select Algorithm
          </label>

          <select
            value={algorithm}
            onChange={(e) => {

              setAlgorithm(e.target.value);

              setCurrentNode(null);
              setVisitedNodes([]);
               setIsRunning(false);

            }}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 outline-none"
          >
            <option>Breadth First Search (BFS)</option>
            <option>Depth First Search (DFS)</option>
            <option>Dijkstra's Algorithm</option>
          </select>

        </div>

        {/* Graph */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10">

          <h2 className="text-2xl font-bold mb-10">
            🌐 Graph Visualization
          </h2>

          <div className="flex justify-center">

            <div className="relative w-[650px] h-[420px]">

             {/* Edges */}

            <div className="absolute top-16 left-[240px] w-32 h-1 bg-slate-500 rotate-[28deg]" />

            <div className="absolute top-16 left-[390px] w-32 h-1 bg-slate-500 -rotate-[28deg]" />

            <div className="absolute top-44 left-[100px] w-24 h-1 bg-slate-500 rotate-[35deg]" />

            <div className="absolute top-44 left-[225px] w-24 h-1 bg-slate-500 -rotate-[35deg]" />

            <div className="absolute top-44 left-[445px] w-24 h-1 bg-slate-500 rotate-[35deg]" />

            <div className="absolute top-44 left-[565px] w-24 h-1 bg-slate-500 -rotate-[35deg]" />

              {/* Nodes */}

              <div
                className={`absolute top-7 left-[345px] w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${nodeClass(
                  "A",
                  "bg-cyan-500"
                )}`}
              >
                A
              </div>

              <div
                className={`absolute top-35 left-45 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${nodeClass(
                  "B",
                  "bg-blue-500"
                )}`}
              >
                B
              </div>

              <div
                className={`absolute top-35 right-17 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${nodeClass(
                  "C",
                  "bg-blue-500"
                )}`}
              >
                C
              </div>

              <div
                className={`absolute bottom-15 left-25 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${nodeClass(
                  "D",
                  "bg-purple-500"
                )}`}
              >
                D
              </div>

              <div
                className={`absolute bottom-10 right-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${nodeClass(
                  "E",
                  "bg-purple-500"
                )}`}
              >
                E
              </div>

            </div>

          </div>

        </div>



        

        {/* Controls */}

        <div className="mt-10">

          <ControlPanel
            generateArray={generateGraph}
            startSorting={startTraversal}
            pauseSorting={pauseTraversal}
            resetArray={resetGraph}
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
            best={graphDetails[algorithm].best}
            average={graphDetails[algorithm].average}
            worst={graphDetails[algorithm].worst}
            space={graphDetails[algorithm].space}
            description={graphDetails[algorithm].description}
          />

        </div>

      </div>

    </div>
  );
};

export default Graphs;