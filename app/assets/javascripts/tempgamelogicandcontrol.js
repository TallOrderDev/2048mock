

// function combineArraysBackwards(arrayOfArrays){
//   arrayOfArrays = combineArrays(reverseArrays(arrayOfArrays));
//   reverseArrays(arrayOfArrays);
//   return arrayOfArrays
// };

//   function reverseArrays(arrayOfArrays){
//     for(var i=0; i<arrayOfArrays.length; i++){arrayOfArrays[i].reverse();};
//     return arrayOfArrays
//   };

// function combineArrays(arrayOfArrays){
//   var newArrayOfArrays = [];
//   for(i=0; i<arrayOfArrays.length; i++){
//     newArrayOfArrays = newArrayOfArrays.concat([sumPadArray(arrayOfArrays[i])]);
//   };
//   return newArrayOfArrays
// };

//   function sumPadArray(array) {
//   var aNoZeros = removeZeros(array)
//   var aCombined = combineConsecutive(aNoZeros)
//   var aFinal = addZeros(aCombined)
//   return aFinal
//   };

//     var removeZeros = function(array){
//       var newArray = []
//       for(var i=0; i<array.length; i++){
//         if(array[i] !== 0){
//           newArray.push(array[i])
//         }
//       }
//       return newArray
//     }


//     var combineConsecutive = function(array){
//       var newArray = []
//       for(var i=0; i<array.length; i++){
//         if(array[i] === array[i+1]){
//           newArray.push(array[i] + array[i+1])
//           array.splice(i+1, 1);
//         }
//         else{
//           newArray.push(array[i])
//         }
//       }
//       return newArray
//     }

//     var addZeros = function(newArray){
//       while(newArray.length<4){
//         newArray.push(0)
//       }
//       return newArray
//     }
