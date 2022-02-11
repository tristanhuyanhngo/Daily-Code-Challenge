/*
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
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// -- Using array => findIndex method
// Runtime: 630 ms, faster than 5.00% of JavaScript online submissions for Two Sum.
// Memory Usage: 44.1 MB, less than 7.49% of JavaScript online submissions for Two Sum.
let twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let remain = target - nums[i];
        let foundIndex = nums.findIndex((element, index) => element === remain && index !== i);

        if (foundIndex) {
            return [i, foundIndex].sort();
        }
    }
};

// -- Using object
// Runtime: 111 ms, faster than 60.50% of JavaScript online submissions for Two Sum.
// Memory Usage: 42 MB, less than 29.44% of JavaScript online submissions for Two Sum.
twoSum = function(nums, target) {
    let remainingObj = {}; // Use to store the remain of numbers when subtracted for target
    for (let i = 0; i < nums.length; i++) {
        let remain = target - nums[i];
        if (remainingObj[remain] !== undefined) {
            return [remainingObj[remain], i];
        }
        remainingObj[nums[i]] = i; 
    }
    
    return -1;
};