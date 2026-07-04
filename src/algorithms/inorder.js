// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Inorder Traversal
export const inorderTraversal = async (
  tree,
  node,
  setCurrentNode,
  setVisitedNodes,
  setTraversalOrder,
  speed,
  visited = []
) => {

  if (!node) return;

  await inorderTraversal(
    tree,
    node.left,
    setCurrentNode,
    setVisitedNodes,
    setTraversalOrder,
    speed,
    visited
  );

  setCurrentNode(node.value);

  visited.push(node.value);

  setVisitedNodes([...visited]);
  setTraversalOrder([...visited]);

  await sleep(speed);

  await inorderTraversal(
    tree,
    node.right,
    setCurrentNode,
    setVisitedNodes,
    setTraversalOrder,
    speed,
    visited
  );

};