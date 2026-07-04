export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const dijkstra = async (
  graph,
  startNode,
  setCurrentNode,
  setVisitedNodes,
  speed
) => {

  const distances = {};
  const visited = [];
  const unvisited = [];

  // Initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
    unvisited.push(node);
  }

  distances[startNode] = 0;

  while (unvisited.length > 0) {

    // Find node with minimum distance
    let current = unvisited[0];

    for (const node of unvisited) {
      if (distances[node] < distances[current]) {
        current = node;
      }
    }

    // Remove current node
    unvisited.splice(unvisited.indexOf(current), 1);

    // Highlight current node
    setCurrentNode(current);

    visited.push(current);

    setVisitedNodes([...visited]);

    await sleep(speed);

    // Update neighbors
    for (const neighbor of graph[current]) {

      const newDistance =
        distances[current] + neighbor.weight;

      if (newDistance < distances[neighbor.node]) {

        distances[neighbor.node] = newDistance;

      }

    }

  }

  setCurrentNode(null);

  return distances;

};