// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Postorder Traversal
export const postorderTraversal = async (
  tree,
  node,
  setCurrentNode,
  setVisitedNodes,
  setTraversalOrder,
  speed,
  visited = []
) => {

  if (!node) return;

  await postorderTraversal(
    tree,
    node.left,
    setCurrentNode,
    setVisitedNodes,
     setTraversalOrder,
    speed,
    visited
  );

  await postorderTraversal(
    tree,
    node.right,
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

};