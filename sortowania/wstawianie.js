let arr = [100, 20, 3, -16, 2, 156, 1, 2, 1456, -25]


function insert(arr) {
  for(let j =  arr.length - 2; j>=0; j -=1  ) {
      let x = arr[j]
      let i = j + 1
      while( i < arr.length && x > arr[i]) {
          arr[i-1] = arr[i]
          i += 1
      }
      arr[i - 1] = x
  }
  return arr
}

console.log(insert(arr))
