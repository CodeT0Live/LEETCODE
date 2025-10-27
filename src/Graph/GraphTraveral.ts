class GraphNode {
  val: number;
  neighbors: GraphNode[];

  constructor(val: number, neighbors: GraphNode[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

export function BFS(node: GraphNode | null) {
  if (!node) {
    return;
  }

  const queue: GraphNode[] = [];
  const visited = new Set<number>();
  visited.add(node.val);
  queue.push(node);

  while (queue.length > 0) {
    const value = queue.shift()!;
    console.log(value.val);
    for (const neighbour of value.neighbors) {
      if (!visited.has(neighbour.val)) {
        visited.add(neighbour.val);
        queue.push(neighbour);
      }
    }
  }
}


export function DFS(node: GraphNode | null) {
  const visited = new Set<number>();
  function dfsHelper(node: GraphNode | null) {
    if (!node) {
      return;
    }
    console.log(node.val);
    visited.add(node.val);
    const neighbours = node.neighbors;
    for (const neighbour of neighbours) {
      if (!visited.has(neighbour.val)) {
        dfsHelper(neighbour);
      }
    }
  };
  dfsHelper(node);
}

// Create nodes
export const node1 = new GraphNode(1);
const node2 = new GraphNode(2);
const node3 = new GraphNode(3);
const node4 = new GraphNode(4);
const node5 = new GraphNode(5);

// Connect nodes (undirected)
node1.neighbors = [node2, node3];
node2.neighbors = [node1, node4];
node3.neighbors = [node1, node5];
node4.neighbors = [node2, node5];
node5.neighbors = [node3, node4];

// Starting point for traversal
const graph = node1;
// BFS(graph);
// DFS(graph);
