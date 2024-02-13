let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);
let currMax = -9999;
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] > currMax) {
        currMax = nums[i];

    }

}

console.log(currMax);