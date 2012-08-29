/*
   Find the 10001st prime number.
*/ 


window.onload = function() {  
    
    window.seven = function seven() {
        return getPrimesFromList(_.range(2,110000))[10000];
    };

    var getPrimesFromList = function getPrimesFromList(list) {
        var prevLen;
        for(var i = 0; i != prevLen; i++){
            prevLen = list.length;
            list = _.filter(list,function(x){ return x % list[i] !== 0 || list[i] === x; });
        }
        return list;        
    };
    
    console.log("7: " + seven() );
    
};