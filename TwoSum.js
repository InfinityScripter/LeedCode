//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// You can return the answer in any order.

// var twoSum = function(nums, target) {
//     var map = {};
//     for (var i = 0; i < nums.length; i++) {
//         var complement = target - nums[i];
//         if (complement in map) {
//             return [map[complement], i];
//         }
//         map[nums[i]] = i;
//     }}

var twoSum = function(nums, target) {
    const seen = {};
    for(let i = 0; i < nums.length; i++){
        const firstNum = nums[i];
        const secondNum = target - firstNum;
        if(secondNum in seen){
            return [seen[secondNum], i];
        }
        seen[firstNum] = i;
    }
    return [0, 0];
};
