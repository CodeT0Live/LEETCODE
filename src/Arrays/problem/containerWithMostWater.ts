/**
 You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 Find two lines that together with the x-axis form a container, such that the container contains the most water.
 Return the maximum amount of water a container can store. Notice that you may not slant the container.
 
 Example 1:
  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49

Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 */

/*
  Approach:
    Should i sort this array ? No, because it will change the problem 
    Should i use two pointer? Probably Yes, it involves range
    Its just not the vertical line height that calculates the water capacity. its also the width.
    We need to take min of height of verical line because the max hieght the water can be stored is of min height.
    We need to calculate the area using width * height. Which gives us the area.
    As we are comparing the heighest water capacity. We need to go in sequence. Hence using two pointer
*/

function maxAreaa(height: number[]): number{
  let left = 0;
  let right = height.length-1;
  let largestArea=0;
  while(left<right){
    const area = Math.min(height[left],height[right]) * (right-left);
    if(largestArea < area){
      largestArea = area;
    }

    height[left]>height[right]? right--: left++
  }
  return largestArea;
}

console.log(maxAreaa([1,8,6,2,5,4,8,3,7]));