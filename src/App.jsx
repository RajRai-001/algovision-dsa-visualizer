import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sorting from "./pages/Sorting";
import Searching from "./pages/Searching";
import Trees from "./pages/Trees";
import Graphs from "./pages/Graphs";
import DynamicProgramming from "./pages/DynamicProgramming";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br
from-[#042c1d]
via-[#1a2c59]
to-[#6e85b5] text-white">

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/sorting"
          element={<Sorting />}
        />

        <Route
          path="/searching"
          element={<Searching />}
        />

        <Route
          path="/trees"
          element={<Trees />}
        />

        <Route
          path="/graphs"
          element={<Graphs />}
        />

        <Route
          path="/dynamic-programming"
          element={<DynamicProgramming />}
        />

      </Routes>

    </div>
  );
};

export default App;