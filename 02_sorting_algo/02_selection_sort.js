function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
}

function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let min = arr[i]
        let minIndex = i;
        for (let j = i; j < n; j++) {
            if (arr[j] < min) {
                min = arr[j]
                minIndex = j
            }
        }
        swap(arr, i, minIndex)
    }
    return arr
}

console.log(selectionSort([5, 3, 15, 22, 2, 1, 99, 70, 45]))