/*
   2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
   What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/ 

var five =

function() {
    var nums = [11,12,13,14,15,16,17,18,19,20];
    var divs = [2, 3, 5, 7, 11, 13, 17, 19];
    var i = 0;
    var nextI = true;
    var answer = 1;

    while ( nums.toString() != [1,1,1,1,1,1,1,1,1,1].toString() ) {
        nextI = true;
        for (var j = 0; j < nums.length; j++ ) {
            if (nums[j] % divs[i] === 0) {
                nextI = false;
                nums[j] = nums[j] / divs[i];
            }
        }    
        (nextI) ? i += 1 : answer *= divs[i];    
    }
    return answer;
}();

console.log("5: " +  five);