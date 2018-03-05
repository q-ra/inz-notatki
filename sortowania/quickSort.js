let arr = [100, 20, 3, -16, 2, 156, 1, 2, 1456, -25]


function quickSort(left, right, arr) {
    let i,j, pivot
    i = (left + right) / 2 | 0
    pivot = arr[i]
    arr[i] = arr[right]
    for(i = j = left; i < right; i += 1){
        if(arr[i] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j += 1
        }
    }
    arr[right] = arr[j]
    arr[j] = pivot
    if ( left < j - 1) quickSort(left, j - 1, arr)
    if (j + 1 < right) quickSort(j +1, right, arr)
    return arr
}

console.log(quickSort(0, 9, arr))