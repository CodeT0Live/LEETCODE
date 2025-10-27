import { BFS } from './GraphTraveral';

class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbours?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbours === undefined ? [] : neighbours;
  }
}

// Time Complexity of this function is O(V+E)
// Space Complexity is O(n)
function cloneGraph(node: _Node | null): _Node | null {
  if (!node) {
    return node;
  }
  const queue: _Node[] = [];
  const visited = new Map<_Node, _Node>();
  visited.set(node, new _Node(node.val));
  queue.push(node);

  while (queue.length > 0) {
    const current = queue.shift()!;
    const clonedNode = visited.get(current)!;

    for (const neighbor of current.neighbors) {
      // loop throught neighbours
      if (!visited.has(neighbor)) {
        // Create a clone of neighbor node
        const clonedneighbor = new _Node(neighbor.val);
        visited.set(neighbor, clonedneighbor);
        // push the original neighbor node into queue for traversal.
        queue.push(neighbor);
      }
        clonedNode.neighbors.push(visited.get(neighbor)!);
    }
  }
  return visited.get(node)!;
}




// Create neighbors
export const node1 = new _Node(1);
const node2 = new _Node(2);
const node3 = new _Node(3);
const node4 = new _Node(4);
const node5 = new _Node(5);

// Connect neighbors (undirected)
node1.neighbors = [node2, node3];
node2.neighbors = [node1, node4];
node3.neighbors = [node1, node5];
node4.neighbors = [node2, node5];
node5.neighbors = [node3, node4];

const graph = node1;
const clonedGraph = cloneGraph(graph);
BFS(graph);
console.log("--------------------------------------");
BFS(clonedGraph);