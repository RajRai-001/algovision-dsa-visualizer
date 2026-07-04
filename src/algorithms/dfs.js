// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Depth First Search
export const dfs = async (
  graph,
  startNode,
  setCurrentNode,
  setVisitedNodes,
  speed
) => {

  const visited = new Set();

  await dfsHelper(
    graph,
    startNode,
    visited,
    setCurrentNode,
    setVisitedNodes,
    speed
  );

  setCurrentNode(null);

  return [...visited];

};

const dfsHelper = async (
  graph,
  node,
  visited,
  setCurrentNode,
  setVisitedNodes,
  speed
) => {

  visited.add(node);

  setCurrentNode(node);

  setVisitedNodes([...visited]);

  await sleep(speed);

  for (const neighbour of graph[node]) {

    if (!visited.has(neighbour)) {

      await dfsHelper(
        graph,
        neighbour,
        visited,
        setCurrentNode,
        setVisitedNodes,
        speed
      );

    }

  }

};