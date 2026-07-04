// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Breadth First Search
export const bfs = async (
  graph,
  startNode,
  setCurrentNode,
  setVisitedNodes,
  speed
) => {

  const queue = [];
  const visited = new Set();

  queue.push(startNode);
  visited.add(startNode);

  while (queue.length > 0) {

    const current = queue.shift();

    // Highlight current node
    setCurrentNode(current);

    // Show visited nodes
    setVisitedNodes([...visited]);

    await sleep(speed);

    // Visit neighbours
    for (const neighbour of graph[current]) {

      if (!visited.has(neighbour)) {

        visited.add(neighbour);

        queue.push(neighbour);

      }

    }

  }

  // Clear current highlight
  setCurrentNode(null);

  return [...visited];

};