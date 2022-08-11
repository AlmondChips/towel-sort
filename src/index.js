
// You should implement your task here.

module.exports = function towelSort(matrix) {
	
let resultArray = []
	for( index in matrix){
		if ((Number(index)+1) %2 === 0)
		resultArray.push(...matrix[index].sort((a,b) => b-a));
			else resultArray.push(...matrix[index]) 	
		
	}


	
  return resultArray;
}


