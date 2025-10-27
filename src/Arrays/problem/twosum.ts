/*
 *
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

// Brute Force approach
// Time complexity O(n pow2)
function twoSum_BruteForce(nums: number[], target: number): number[] {
  let count =0;
  for(let i =0; i< nums.length; i++){
    count++
    for( let j=i+1; j< nums.length; j++){
      count++
      const sum = nums[i]+ nums[j];
      if( sum === target){
        console.log(`Sum of ${nums[i]} + ${nums[j]} = ${sum}`)
        return [i, j];
      }
    }
  }
  console.log(`Worst case count: ${count}`);
  return [];
}



// O(n) approach using dictionary
// This approach uses dictionary to save another nested loop on array.
function twoSum_Optimised(nums: number[], target: number): number[]{

  const dictionary = new Map<number, number>();
  for(let i=0; i< nums.length; i++){
    const difference = target-nums[i];
    if(dictionary.has(difference)){
      return [dictionary.get(difference)!, i]
    }
    dictionary.set(nums[i],i);
  }
  return[];
}

export const input = [2,7,11,15];
const target = 9;
const result = twoSum_BruteForce(input,target);
const result1 = twoSum_Optimised(input, target);
console.log(result, result1);


