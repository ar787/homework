function binarySearch(arr, n) {
    let left = 0
    let right = arr.length - 1
   
    while(left <= right) {

        let mid = Math.floor((left + right) / 2)
        
        if(n === arr[mid]) return mid
        
        else if(arr[mid] <  n) left = mid + 1
        
        else right = mid - 1
    }

    return -1
}

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(binarySearch(arr, 9))
