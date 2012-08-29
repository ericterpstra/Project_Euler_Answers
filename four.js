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

var isPal = function(n) {
 var pal = n.toString(); 
 var beg = 0;
 var end = pal.length-1;   
 while ( pal[beg] === pal[end] ) {
    if (beg++ >= end--) return true;      
 }    
 return false;   
};

console.log(four);