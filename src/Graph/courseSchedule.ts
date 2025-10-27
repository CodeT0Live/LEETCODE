// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

// Let's detect a cycle in undirected grahp using a BFS traversal
// Time Complexity is O(N+P) and Space Complexity is O(N+P)
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const adjacencyList: number[][] = Array.from({length: numCourses},()=>[]);
    const inDegree = new Array<number>(numCourses).fill(0);
    const queue = new Array<number>();

    for( const [a, b] of prerequisites){
        adjacencyList[b].push(a);
        inDegree[a]++;
    }

    for(let i=0; i< inDegree.length; i++){
        if(inDegree[i] === 0){
            queue.push(i);
        }
    }

    let processed = 0;
    let head = 0;

    while(head < queue.length){
        const node = queue[head++];
        processed++;
        for(const adj of adjacencyList[node]){
            inDegree[adj]--;

            if(inDegree[adj]===0){
                queue.push(adj);
            }
        }
    }
    
    return numCourses === processed;
};


export const numCourses = 2;
const prerequisites = [[1,1]];

// export const numCourses = 4;
// const prerequisites = [
//   [1, 0],
//   [2, 0],
//   [3, 1],
//   [3, 2]
// ];

const result = canFinish(numCourses, prerequisites);
console.log(result);