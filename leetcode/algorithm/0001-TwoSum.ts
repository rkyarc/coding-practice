/*
Exercise 0001 - Two Sum
---------------------------------------------------------
Task:
You are given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice. You can return the 
answer in any order.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Link:
https://leetcode.com/problems/two-sum/description/
---------------------------------------------------------*/

// Cara 1
function twoSum(nums: number[], target: number): number[] {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i
                result[1] = j
            }
        }
    }
    return result
};

console.log(twoSum([1, 2, 4], 6))