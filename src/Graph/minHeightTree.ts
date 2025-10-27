//  tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.


// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

// Constraints:

// 1 <= n <= 2 * 104
// edges.length == n - 1
// 0 <= ai, bi < n
// ai != bi
// All the pairs (ai, bi) are distinct.
// The given input is guaranteed to be a tree and there will be no repeated edges.



function findMinHeightTrees(n: number, edges: number[][]): number[]{
    const degree = new Array<number>(n).fill(0);
    const adjacencyList: number[][] = Array.from({length: n},()=>[]);
    const result:number[] = [];
    const queue = new Array<number>();

    //build adjacency list for undirected graph
    for(const [ai,bi] of edges){
        adjacencyList[ai].push(bi);
        adjacencyList[bi].push(ai);
        degree[ai]++;
        degree[bi]++;
    }

    for(let i=0; i<n; i++){
        if(degree[i]===1){
            queue.push(i);
        }
    }

    while(queue.length>2){
        const leaf = queue.shift()!;

        for(const neighbor of adjacencyList[leaf]){
            degree[neighbor]--;
            if(degree[neighbor]===1){
                queue.push(neighbor);
            }
        }
        adjacencyList.splice(leaf,1);
    }

    for(let i in adjacencyList){
        result.push(Number.parseInt(i));
    }

    return result;
}

export const nodes = 4;
const edges = [[1,0],[1,2],[1,3]];

const result = findMinHeightTrees(nodes, edges);