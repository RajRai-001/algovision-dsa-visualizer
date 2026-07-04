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
  speed,
  visited = []
) => {

  if (!node) return;

  await postorderTraversal(
    tree,
    node.left,
    setCurrentNode,
    setVisitedNodes,
    speed,
    visited
  );

  await postorderTraversal(
    tree,
    node.right,
    setCurrentNode,
    setVisitedNodes,
    speed,
    visited
  );

  setCurrentNode(node.value);

  visited.push(node.value);

  setVisitedNodes([...visited]);

  await sleep(speed);

};