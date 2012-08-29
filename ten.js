/*
    Find the sum of all the primes below two million.
*/ 


function sieve(max) {
    var D = [], 
        primes = [], 
        sum = 0;
        
	for (var q=2; q < max; q++) {
        console.log("q: " + q);
		if (D[q]) {
            console.log("- D[q]: " + D[q]);
			for (var i=0; i < D[q].length; i++) {
				var p = D[q][i];
                console.log("--      p: " + p);
                console.log("-- D[p+q]: " + D[p+q]);
                
				if (D[p+q]) 
                    D[p+q].push(p);
				else 
                    D[p+q]=[p];
                console.log("-> D[p+q]: " + D[p+q]);
			}
			delete D[q];
		} else {
            sum += q;
			primes.push(q);
			if (q*q<max) 
                D[q*q]=[q];
		}
        console.log("D: " + D);
	}
	return sum;
 }

console.log(sieve(31));
    
