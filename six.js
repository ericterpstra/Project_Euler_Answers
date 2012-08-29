/*
   Find the difference between the sum of the squares 
   of the first one hundred natural numbers and the square of the sum.
*/ 


window.onload = function() {  
   var six = function() {
        var nums = _.range(101);
        var sumOfSquares = _.reduce(nums, function(memo, num){return memo + num*num;},0);
        var squareOfSums = Math.pow(_.reduce(nums, function(memo, num){return memo + num;},0),2);
    
        return squareOfSums - sumOfSquares;
    };
    
    console.log("6: " + six());
};
