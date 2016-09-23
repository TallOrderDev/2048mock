# console.log "SUPER DUPER CATS"

# cats = (arg) ->
#   console.log "CATS ARE US!"

# combineArraysBackwards = (arrayOfArrays) ->
#   arrayOfArrays = combineArrays(reverseArrays(arrayOfArrays))
#   reverseArrays arrayOfArrays
#   arrayOfArrays

# reverseArrays = (arrayOfArrays) ->
#   i = 0
#   while i < arrayOfArrays.length
#     arrayOfArrays[i].reverse()
#     i++
#   arrayOfArrays

# combineArrays = (arrayOfArrays) ->
#   newArrayOfArrays = []
#   i = 0
#   while i < arrayOfArrays.length
#     newArrayOfArrays = newArrayOfArrays.concat([ sumPadArray(arrayOfArrays[i]) ])
#     i++
#   newArrayOfArrays

# sumPadArray = (array) ->
#   aNoZeros = removeZeros(array)
#   aCombined = combineConsecutive(aNoZeros)
#   aFinal = addZeros(aCombined)
#   aFinal

# removeZeros = (array) ->
#   newArray = []
#   i = 0
#   while i < array.length
#     if array[i] != 0
#       newArray.push array[i]
#     i++
#   newArray

# combineConsecutive = (array) ->
#   newArray = []
#   i = 0
#   while i < array.length
#     if array[i] == array[i + 1]
#       newArray.push array[i] + array[i + 1]
#       array.splice i + 1, 1
#     else
#       newArray.push array[i]
#     i++
#   newArray

# addZeros = (newArray) ->
#   while newArray.length < 4
#     newArray.push 0
#   newArray
