function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function partition(arr, s, e) {
    let i = s,
        j = e
    let pivot = arr[s]
    while (i < j) {
        while (i <= e && arr[i] <= pivot) {
            i++
        }
        while (j >= s && arr[j] > pivot) {
            j--
        }
        if (i < j) swap(arr, i, j)
    }
    swap(arr, s, j)
    return j
}

function quickSort(arr, s, e) {
    if (s < e) {
        let pivot = partition(arr, s, e)
        quickSort(arr, s, pivot - 1)
        quickSort(arr, pivot + 1, e)
    }
    return arr
}

function sort(arr) {
    let s = 0,
        e = arr.length - 1
    return quickSort(arr, s, e)
}

console.log(sort([2, -1, 4, 3, 7, 3, 0, -5]))