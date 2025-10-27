/**
 Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

  0 <= a, b, c, d < n
  a, b, c, and d are distinct.
  nums[a] + nums[b] + nums[c] + nums[d] == target
  You may return the answer in any order.

 

  Example 1:

  Input: nums = [1,0,-1,0,-2,2], target = 0
        [-2,-1,0,0,1,2]
  Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

  Example 2:

  Input: nums = [2,2,2,2,2], target = 8
  Output: [[2,2,2,2]]
 

Constraints:

  1 <= nums.length <= 200
  -109 <= nums[i] <= 109
  -109 <= target <= 109

 */

  function fourSum(nums:number[], target:number): number[][]{
    nums.sort((a,b)=>a-b)
      for(let i=0; i<nums.length; i++){
        let left = i+1;
        let fourthPointer = left+1
        let right = nums.length-1;

        while(fourthPointer<right){
          const sum = nums[i]+nums[left]+nums[fourthPointer]+nums[right];
          console.log(nums[i],nums[left],nums[fourthPointer],nums[right], ` Sum: ${sum}`);
          if(sum>target){
            right--;
          }else if(sum<target){
            fourthPointer++;
          }else{
            fourthPointer++;
            right--;
          }

        }
      }
    return[[1,2]];
  }







export const input=[1,0,-1,0,-2,2];
const target =0;
const result = fourSum(input, target);
console.log(result);