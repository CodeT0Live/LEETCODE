/**
  Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
  You must write an algorithm that runs in O(n) time and without using the division operation.

  Example 1:
  Input: nums = [1,2,3,4]
      Left Pass [1,2]
  Output: [24,12,8,6]

  Example 2:
  Input: nums = [-1,1,0,-3,3]
  Output: [0,0,9,0,0]
 
  Constraints:
    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 * @param nums
 * @returns 
 */

function productExceptSelf_BruteForce(nums: number[]): number[] {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let local = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        local = nums[j] * local;
      }
    }
    result[i] = local;
  }
  return result;
}

function productExceptSelf_Optimised(nums: number[]): number[] {
  const result = new Array<number>(nums.length);
  const preFixArray = new Array<number>(nums.length).fill(1);
  const suffixArray = new Array<number>(nums.length).fill(1);

  // calculate prefix
  for (let i = 1; i < nums.length; i++) {
    preFixArray[i] = preFixArray[i - 1] * nums[i - 1];
  }
  console.log(preFixArray);
  //calculate suffix
  for (let i = nums.length - 2; i >= 0; i--) {
    suffixArray[i] = suffixArray[i + 1] * nums[i + 1];
  }
  console.log(suffixArray);
  for (let i = 0; i < nums.length; i++) {
    result[i] = preFixArray[i] * suffixArray[i];
  }

  return result;
}

function productExcepSelf_OptimisedWithMemory(nums: number[]): number[] {
  const result = new Array(nums.length).fill(1);
  //calculate prefix
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  // calculate suffix
  let suffix = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    suffix = suffix * nums[i + 1];  
    result[i] = suffix * result[i];
    
  }
  return result;
}

export const input = [21, 17, 30, 13, 15, 3, 7, 11]; //[-1,1,0,-3,3];
const result = productExceptSelf_Optimised(input);
const result1 = productExcepSelf_OptimisedWithMemory(input);
console.log(result);
console.log(result1);
