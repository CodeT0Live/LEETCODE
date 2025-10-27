/**
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
Return the sum of the three integers.
You may assume that each input would have exactly one solution.

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

Constraints:

    3 <= nums.length <= 500
    -1000 <= nums[i] <= 1000
    -104 <= target <= 104

 */


    function threeSumClosest(nums: number[], target: number): number{
      let closestDifference

        // Sort the array
        nums.sort((a,b)=> a-b);
      for(let i=0; i<nums.length; i++){
        let left = i+1;
        let right = nums.length-1;
        while(left < right){
          const sum = nums[i]+nums[left]+ nums[right];
          
   
          const difference = Math.abs(target-sum);

          if(closestDifference === undefined){
            closestDifference = sum
          }
          if(difference < Math.abs(target-closestDifference)){
            closestDifference = sum
          }

          if(sum > target){
            right--;
          }else if(sum<target){
            left++;
          }else{
            closestDifference = sum;
            while(left < right){
              if(nums[left]=== nums[left+1]){
                left++;
              }else if(nums[right]===nums[right-1]){
                right--;
              }else{
                break;
              }
            }
            right--;
            left++;
          }
        }
      }

      return closestDifference??0;
    }
    
    export const input = [0,1,2];
    const target = 3;
    const result = threeSumClosest(input, target)
    console.log(result);