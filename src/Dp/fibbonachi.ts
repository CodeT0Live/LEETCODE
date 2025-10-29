//Solve Fibonnachi
// The below program uses just the recurrsion. Where each number is computed in recurrsive manner.
/*
                                      fib(5)
                                    /       \
                                fib(4)       fib(3)
                                /   \         
                            fib(3)  fib(2)      
                            /   \     /  \    
                        fib(2)   fib(1)   fib(0)          
                        /  \                        
                    fib(1)  fib(0)

        We have computed fib(2) twice and fib(1), fib(0) also twice. This increases both time and space complexity when dealing 
        with larger recurrisive problem. 
        Time Complexity: O(2pow n)
        Space Complexity: O(n) --> Stack memory
*/

function getFibonacci(n: number):number{

    // Base case for recurrision to end
    if(n<=1){
        return n;
    }

    return getFibonacci(n-1) + getFibonacci(n-2);
}

// With memoization
function getFibonacciWithMemoization(n:number, memoization: Map<number,number>): number{
     // Base case for recurrision to end
    if(n<=1){
        return n;
    }
    if(memoization.has(n))
        return memoization.get(n)!;

    const result = getFibonacciWithMemoization(n-1, memoization) + getFibonacciWithMemoization(n-2, memoization);
    memoization.set(n, result);
    return result;
}


// With Tabulation
function getFibonacciWithTabulation(n:number): number{
    
    let previous = 1;
    let previous1 = 0;

    for(let i=2; i<= n; i++){
        const current = previous + previous1;
        previous1 = previous;
        previous = current;
    }
    return previous;
}




export const input:number  = 15;
console.time("recurrison");
console.log(getFibonacci(input));
console.timeEnd("recurrison");
console.time("withMemoization");
console.log(getFibonacciWithMemoization(input, new Map<number,number>()));
console.timeEnd("withMemoization");
console.time("Tabulation");
console.log(getFibonacciWithTabulation(input));
console.timeEnd("Tabulation");

/*
Results |
When input = 45

With recursive
Result : 1134903170

Execution Time:
recurrison: 10293.446044921875 ms
recurrison: 10.294s

With Memoization
Result: 1134903170

Execution Time:
withMemoization: 0.112060546875 ms
withMemoization: 0.165ms

With Tabulation
Result: 1134903170

Execution Time:
Tabulation: 0.086181640625 ms
Tabulation: 0.142ms


*/