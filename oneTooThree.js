/* 
  Find the sum of all the multiples of 3 or 5 below 1000.
*/
var one = function() {
    var sum = 0;
    for (var i = 1; i < 1000; i++) {
        if ( i % 3 === 0 || i % 5 === 0 ) {
          sum += i;  
        }
    }
    return sum;
}();
console.log("1: " + one );

/* 
  By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
  find the sum of the even-valued terms.
*/
var two = function() {
    var lastFib = 1,
        fib = 2,
        sum = 0;
    
    while( fib < 4000000) {
        if( fib % 2 === 0 ) sum += fib;
        fib += lastFib;
        lastFib = fib - lastFib;
    }
    return sum;
}();
console.log("2: " + two );

/*
  Find the largest prime factor of a composite number.
*/
var three = function() {
    var biggest, n = 600851475143,
        sq_num = Math.sqrt(n),
        i = 2,
        count;

    while (n> 1 && i < sq_num ) {
        if ( n % i === 0 ) {
            count = 1;
            n = n / i; 
            while ( n % i === 0 ) {
                count++;
                n = n / i;        
            }
            biggest = i;
        }
        i++ ;        
    }

    return biggest;
}();
console.log("3: " + three);


var four = function() {
    var a = 999,
        b = 999,
        c = 0;        
    while( !isPal(a*b) ){
        b--;
        c++;
        if (c === 300) {
           a--;
           c = 0;
           b = 999;
        }        
    }
    console.log(a + " * " + b + " = " + a*b );
};

var isPal = function(n) {
 var pal = n.toString(); 
 var beg = 0;
 var end = pal.length-1;   
 while ( pal[beg] === pal[end] ) {
    if (beg++ >= end--) return true;      
 }    
 return false;   
};
four();
