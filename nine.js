/*
    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
*/ 


window.onload = function() {  
    
    window.nine = function nine() {
        var m = 32,
            n = 1,
            a, b, c,
            counter = 0;
       
        var isTriple = false;
        var sum = 0;    
        while( a + b + c != 1000 && counter <= 1024 ) {
            a = Math.pow(m,2) - Math.pow(n,2);
            b = 2 * m * n;
            c = Math.pow(m,2) + Math.pow(n,2);
            
            n += 1;
            if ( n > m ) {
                n = 1;
                m -= 1;
            }
            
            isTriple = Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2);
            sum = a + b + c;
            counter += 1;
        }
        
        return a * b * c;
    };

    console.log("9: " + nine() );
    
};