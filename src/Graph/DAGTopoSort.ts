// This code demonstrates topological sorting


function topoSortBFS(numberOfVertex: number, adjacencyList:number[][]): Array<number>{

    const indegree = Array<number>(numberOfVertex).fill(0);
    const queue = Array<number>();
    const result = Array<number>();

    // itterate over adjacencyList and create indegree array
    for(let i=0; i< numberOfVertex; i++){
        for(const adj of adjacencyList[i]){
            indegree[adj]++;
        }   
    }
    // Add all the nodes with indegree zero into queue for BFS traversal
    for(let i=0; i< numberOfVertex; i++){
        if(indegree[i] === 0){
            queue.push(i);
        }
    }

    while(queue.length>0){
        const node = queue.shift()!; // Adding ! to ensure Typescript not to complain that .shift might return number | undefined
        // console.log(node);
        result.push(node);

        for(const adj of adjacencyList[node]){
            indegree[adj]--;

            if(indegree[adj] === 0){
                queue.push(adj);
            }
        }
    }


    return result;
}


function topoSortDFS(numberOfVertex: number, adjacencyList: number[][]): Array<number>{
    const result = new Array<number>();
    const visited = new Map<number, boolean>();

    const dfs = function(node: number, adjacencyList: number[][]){
        visited.set(node, true);

        for(const adj of adjacencyList[node]){
            if(!visited.has(adj)){
                dfs(adj, adjacencyList);
            }
        }
        result.unshift(node);
    }

    for(let i=0; i< numberOfVertex; i++){
        if(!visited.has(i)){
            dfs(i, adjacencyList);
        }
    }

    return result;
}

export  const numberOfVertex = 7;
        const adjacencyList = [
  [1],      // 0 → 1
  [2],      // 1 → 2
  [],       // 2 → none
  [4],      // 3 → 4
  [5],      // 4 → 5
  [6],      // 5 → 6
  []        // 6 → none
];

const BFSResult = topoSortBFS(numberOfVertex, adjacencyList);
const DFSResult = topoSortDFS(numberOfVertex, adjacencyList);
console.log(BFSResult);
console.log(DFSResult);