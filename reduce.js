 function countWords(arr) {
      return arr.reduce(function(countMap, word) {
        countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
        return countMap
      }, {}) // second argument to reduce initialises countMap to {}
  }
    
function countWords(inputWords){
	var present ={};
	inputWords.reduce(function(prev,currentObj,idx,arr){
		if(!present[currentObj]){
			present[currentObj]=1;
		}else{
			present[currentObj]++;
		}
		return currentObj;
	},null);
	return present;
}
module.exports=countWords
