function insertionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let j = i
        let temp = arr[j + 1]
        while (temp < arr[j] && j >= 0) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}

let arr = [5, 4, 2, 1, 3]
console.log(insertionSort(arr))