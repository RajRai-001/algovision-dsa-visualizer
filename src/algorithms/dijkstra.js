// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Dijkstra Algorithm
export const dijkstra = async (
  graph,
  startNode,
  setCurrentNode,
  setVisitedNodes,
  speed
) => {

  const distances = {};
  const visited = new Set();

  // Initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
  }

  distances[startNode] = 0;

  while (visited.size < Object.keys(graph).length) {

    let current = null;

    for (const node in distances) {

      if (
        !visited.has(node) &&
        (current === null ||
          distances[node] < distances[current])
      ) {

        current = node;

      }

    }

    if (current === null) break;

    visited.add(current);

    setCurrentNode(current);

    setVisitedNodes([...visited]);

    await sleep(speed);

    for (const neighbour of graph[current]) {

      const weight = 1;

      if (
        distances[current] + weight <
        distances[neighbour]
      ) {

        distances[neighbour] =
          distances[current] + weight;

      }

    }

  }

  setCurrentNode(null);

  return distances;

};