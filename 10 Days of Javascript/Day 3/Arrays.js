/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a, b) => a < b); 
    let a = nums.shift();

    while (a == nums[0]) {
        a = nums.shift();
    }
    a = nums.shift();

    return a;
}

