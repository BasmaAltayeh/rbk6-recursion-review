//this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// var object = {};
// var strObj="";
var stringifyJSON = function(obj) {
    var str=obj;
    if( typeof obj === "number"){
        
        return str.toString();
    }
    else if(obj === null){
        return 'null';
    }
    else if(typeof obj === "boolean"){
        return str.toString();
    }else if(typeof obj === "string"){
        return '\"'+ obj.toString()+'\"';
    }else if(Array.isArray(obj)){
        if(obj.length === 0){
            return '[]'
        }else if(){
            
        }
    }
    
    
// for (var key in obj){
//     var arr = Object.keys(obj);
//     for(var i = 0;i < arr.length;i++){
        
//     if(key=== arr[0]) {
//         strObj= '{' +'"' + key+'"'+ ':'+ obj[key]+",";
//     }
//     else if(key===arr[arr.length-1]) {
//         strObj= strObj+'"'+ key+ '"' + ':'+ obj[key] + "}" ;
//     }
//     else if(key !== arr[0]&& key !==arr[arr.length-1]) {
//         strObj='"'+ key+ '"'+ ':'+ obj[key]+strObj+',';
//     }
//     }
// }
};
