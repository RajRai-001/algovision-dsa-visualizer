import React from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AlgorithmCard from "../components/AlgorithmCard";

const Home = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Hero Section */}

      <Hero />

      {/* Algorithms */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Explore Algorithms
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
            Learn the most important Data Structures and Algorithms
            through interactive visualizations and real-time animations.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          <AlgorithmCard
            icon="📊"
            title="Sorting"
            description="Visualize Bubble, Selection, Insertion, Merge and Quick Sort step by step."
            time="O(n log n)"
            space="O(1)"
            difficulty="Easy - Medium"
            path="/sorting"
          />

          <AlgorithmCard
            icon="🔍"
            title="Searching"
            description="Understand Linear Search and Binary Search with animations."
            time="O(log n)"
            space="O(1)"
            difficulty="Easy"
            path="/searching"
          />

          <AlgorithmCard
            icon="🌳"
            title="Trees"
            description="Learn Binary Search Tree, AVL Tree and Tree Traversals."
            time="O(log n)"
            space="O(n)"
            difficulty="Medium"
            path="/trees"
          />

          <AlgorithmCard
            icon="🕸️"
            title="Graphs"
            description="Visualize BFS, DFS and Dijkstra's Algorithm interactively."
            time="O(V + E)"
            space="O(V)"
            difficulty="Medium"
            path="/graphs"
          />

          <AlgorithmCard
            icon="📈"
            title="Dynamic Programming"
            description="Master DP with Fibonacci, Climbing Stairs, House Robber and more."
            time="Varies"
            space="Varies"
            difficulty="Hard"
            path="/dynamic-programming"
          />

          <AlgorithmCard
            icon="🏆"
            title="Practice Zone"
            description="Practice problems, quizzes and interview questions."
            time="-"
            space="-"
            difficulty="All Levels"
            path="/practice"
          />

        </div>

      </section>

      {/* Why AlgoVision */}

      <section className="bg-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose AlgoVision?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-800 rounded-3xl p-8 text-center hover:scale-105 transition">

              <div className="text-5xl mb-5">
                🎬
              </div>

              <h3 className="text-xl font-bold">
                Animations
              </h3>

              <p className="text-gray-400 mt-3">
                Watch every algorithm execute step by step.
              </p>

            </div>

            <div className="bg-slate-800 rounded-3xl p-8 text-center hover:scale-105 transition">

              <div className="text-5xl mb-5">
                📚
              </div>

              <h3 className="text-xl font-bold">
                Learn
              </h3>

              <p className="text-gray-400 mt-3">
                Understand concepts with simple explanations.
              </p>

            </div>

            <div className="bg-slate-800 rounded-3xl p-8 text-center hover:scale-105 transition">

              <div className="text-5xl mb-5">
                💻
              </div>

              <h3 className="text-xl font-bold">
                Code
              </h3>

              <p className="text-gray-400 mt-3">
                View implementations in C++, Java and Python.
              </p>

            </div>

            <div className="bg-slate-800 rounded-3xl p-8 text-center hover:scale-105 transition">

              <div className="text-5xl mb-5">
                🚀
              </div>

              <h3 className="text-xl font-bold">
                Practice
              </h3>

              <p className="text-gray-400 mt-3">
                Solve interview questions after learning.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold text-cyan-400">
                10+
              </h2>
              <p className="mt-3 text-gray-400">
                Algorithms
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-cyan-400">
                100%
              </h2>
              <p className="mt-3 text-gray-400">
                Interactive
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-cyan-400">
                Free
              </h2>
              <p className="mt-3 text-gray-400">
                Learning
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-cyan-400">
                ∞
              </h2>
              <p className="mt-3 text-gray-400">
                Practice
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <Footer />

    </div>
  );
};

export default Home;