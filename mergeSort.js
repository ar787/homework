function merge(arr1, arr2) {
    
    let res = []
    let leftIndex = 0
    let rightIndex = 0

     while(arr1.length && arr2.length) {
         if (arr1[0] < arr2[0] ) {
             res.push(arr1.shift())
         } else {
             res.push(arr2.shift())
         }
     }

    return [...res, ...arr1, ...arr2]
}


function mergeSort(arr) {
    if(arr.length <  2 ) {
        return arr
    }

    let left = arr.splice(0, ~~(arr.length/2))

    return merge(mergeSort(left), mergeSort(arr))
}

 
console.log("sorted",mergeSort([1,23,6,7,8,9,2,4,10,43]))
