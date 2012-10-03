describe("I have found a solution for problem: ", function() {

  describe("one", function() {
      it("Find the sum of all the multiples of 3 or 5 below 1000.", function() {
        var one = function() {
            var sum = 0;
            for (var i = 1; i < 1000; i++) {
                if ( i % 3 === 0 || i % 5 === 0 ) {
                  sum += i;  
                }
            }
            return sum;
        }();
    
        expect(one).toBe(233168);
      });
  });


  describe("two", function() {
      it("By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.", function() {
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
    
        expect(two).toBe(4613732);
      });
  });


  describe("three", function() {
      it("What is the largest prime factor of the number 600851475143 ?", function() {
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
    
        expect(three).toBe(6857);
      });
  });

  describe("four", function() {
        
    var isPal = function isPal(n) {
     var pal = n.toString(); 
     var beg = 0;
     var end = pal.length-1;   
     while ( pal[beg] === pal[end] ) {
        if (beg++ >= end--) return true;      
     }    
     return false;   
    };
    
    it("Find the largest palindrome made from the product of two 3-digit numbers.", function() {
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
            return a*b;
        }();

        expect(four).toBe(906609);
      });
  });

  describe("five", function() {
    
    it("What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?", function() {
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

        expect(five).toBe(232792560);
      });
  });

  describe("six", function() {
    
    it("Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.", function() {
       var six = function() {
            var nums = _.range(101);
            var sumOfSquares = _.reduce(nums, function(memo, num){return memo + num*num;},0);
            var squareOfSums = Math.pow(_.reduce(nums, function(memo, num){return memo + num;},0),2);
        
            return squareOfSums - sumOfSquares;
        }();

        expect(six).toBe(25164150);
      });
  });

  describe("seven", function() {
    var getPrimesFromList = function getPrimesFromList(list) {
        var prevLen;
        for(var i = 0; i != prevLen; i++){
            prevLen = list.length;
            list = _.filter(list,function(x){ return x % list[i] !== 0 || list[i] === x; });
        }
        return list;        
    };
    
    it("What is the 10,001st prime number?", function() {
       seven = function seven() {
        return getPrimesFromList(_.range(2,110000))[10000];
        }();

        expect(seven).toBe(104743);
      });
  });

  describe("eight", function() {
    
    it("Find the greatest product of five consecutive digits in the 1000-digit number.", function() {
        var eight = function eight() {
            var product = 0;
            var bigNum = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
            var bigArray = bigNum.split('');
            var product = 0;
            var tempProduct = 0;
            
            for (var i = 0; i < bigArray.length - 4; i++) {
                tempProduct = _.reduce(bigArray.slice(i,i+5), function(memo,x) { return memo * x; }, 1);
                product = tempProduct > product ? tempProduct : product;
            }
            
            return product;
        }();

        expect(eight).toBe(40824);
      });
  });

  describe("nine", function() {
    
    it("There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.", function() {
        nine = function nine() {
            var m = 32,
                n = 1,
                a, b, c;
                  
            while( a + b + c != 1000 ) {
                a = Math.pow(m,2) - Math.pow(n,2);
                b = 2 * m * n;
                c = Math.pow(m,2) + Math.pow(n,2);
                
                n += 1;
                if ( n > m ) {
                    n = 1;
                    m -= 1;
                }
            }
            
            return a * b * c;
        }();

        expect(nine).toBe(31875000);
      });
  });

  describe("ten", function() {
    
    // I did not come up with the majority of the code below.  
    // Sieve algorithm found at: http://c2.com/cgi/wiki?SieveOfEratosthenesInManyProgrammingLanguages
    // See http://wp.me/p29JRp-5o for explaination in my own words.
    it("Find the sum of all the primes below two million.", function() {
        var ten = function sieve(max) {
            var D = [], 
                primes = [], 
                sum = 0;
            for (var q=2; q < max; q++) {
        		if (D[q]) {
        			for (var i=0; i < D[q].length; i++) {
        				var p = D[q][i];
                        
        				if (D[p+q]) 
                            D[p+q].push(p);
        				else 
                            D[p+q]=[p];
        			}
        			delete D[q];
        		} else {
                    sum += q;
        			primes.push(q);
        			if (q*q<max) 
                        D[q*q]=[q];
        		}
        	}
        	return sum;
         }(2000001);

        expect(ten).toBe(142913828922);
      });
  });

});