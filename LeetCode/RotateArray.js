// Given an array, rotate the array to the right by k steps, where k is non-negative.


// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


let nums = [0,1,0,3,12];
let k = 2;
let result = [...nums];
nums.so
let len = nums.length;
for(let i = 0; i < len; i++){
    let mod = k % len;
    console.log((mod + i) % len);
    let index = (mod + i) % len;
    nums[i] = result[index];
}
console.log(nums);