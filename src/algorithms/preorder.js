// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Preorder Traversal
export const preorderTraversal = async (
  tree,
  node,
  setCurrentNode,
  setVisitedNodes,
  setTraversalOrder,
  speed,
  visited = []
) => {

  if (!node) return;

  // Visit Root
  setCurrentNode(node.value);

  visited.push(node.value);

  setVisitedNodes([...visited]);
  setTraversalOrder([...visited]);

  await sleep(speed);

  // Left
  await preorderTraversal(
    tree,
    node.left,
    setCurrentNode,
    setVisitedNodes,
    setTraversalOrder,
    speed,
    visited
  );

  // Right
  await preorderTraversal(
    tree,
    node.right,
    setCurrentNode,
    setVisitedNodes,
    setTraversalOrder,
    speed,
    visited
  );

};