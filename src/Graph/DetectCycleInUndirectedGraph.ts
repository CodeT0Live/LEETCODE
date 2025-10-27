type pair = { node: number; parent: number };
export function isCycleBFS(vertices: number, adjacencyList: number[][]): boolean{

    const visited = new Map<number, boolean>();
    const queue = new Array<pair>();

    const isCycle = function(node: number, adjacencyList: number[][]):boolean{

        queue.push({node, parent:-1});
        while(queue.length>0){
            const {node, parent} = queue.shift()!;
            visited.set(node, true);
            for(const adj of adjacencyList[node]){
                if(!visited.has(adj)){
                    queue.push({node: adj, parent: node});
                }else if( adj !== parent){
                    return true;
                }
            }
        }
        return false;
    }


    for(let i=0; i<vertices;i++){
        if(!visited.has(i)){
            if(isCycle(i, adjacencyList)) return true;
        }
    }


    return false;
}