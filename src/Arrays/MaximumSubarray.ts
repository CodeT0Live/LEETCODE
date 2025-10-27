/**
 Given an integer array nums, find the subarray with the largest sum, and return its sum.
  A subarray is a contiguous non-empty sequence of elements within an array.
    Example 1:

    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.
    Example 2:

    Input: nums = [1]
    Output: 1
    Explanation: The subarray [1] has the largest sum 1.
    Example 3:

    Input: nums = [5,4,-1,7,8]
    Output: 23
    Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

    Constraints:

    1 <= nums.length <= 105
    -104 <= nums[i] <= 104

 */

function maxSubArray(nums: number[]): number {
   console.time("executionTimeOptimised");
  let currentSum = nums[0]
  let maxSum = currentSum

  for (let i=1; i< nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    if (currentSum > maxSum) { maxSum = currentSum }
  }
  return maxSum
}
/**
 * 
 When an array of size 1 is sent what i need to do. return the first element as subarray.

 *  
 */
// function maxSubArray_BruteForce(nums: number[]): number {
//   let maxSum = nums[0];

//   // for (let i = 0; i < nums.length; i++) {
//   //   let current = nums[i];
//   //   for (let j = i + 1; j < nums.length; j++) {
//   //     current += nums[j];
//   //     if (maxSum < current) {
//   //       maxSum = current;
//   //     }
//   //   }
//   //   if (maxSum < current) {
//   //     maxSum = current;
//   //   }
//   // }

//   return maxSum;
// }


function maxSubArray_Approach(nums: number[]): number{
  console.time("executionTime");
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
console.timeEnd("executionTime");
  return maxSum;
}

export const input = [1];//
const result = maxSubArray(input);
const result2 = maxSubArray_Approach(input);
const target = 6;
console.log(`Optimised Approach Result:`, result);
// console.log(`Brute force Result: ${result1}`);
console.log(`Brute force Result GPT:`, result2)
console.log(`is result == target`, target === result);
