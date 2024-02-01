/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {

    const result = [];
    nums.sort((a,b) => a-b);
    let temp_arr = [];

    for(let num of nums){

        // Add num to temp_arr if it's empty or the difference condition is met
        if(temp_arr.length == 0 || num - temp_arr[0] <= k){
            temp_arr.push(num);

            // If temp_arr has reached size 3, add it to the result and reset it
            if(temp_arr.length == 3){
                result.push(temp_arr);
                temp_arr = [];
            }

        } else {
            return [];
        }
    }

    return result;
};
