function radixSort(arr) {
    let n = arr.length
    let max = Number.MIN_VALUE
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) max = arr[i]
    }

    for (let pos = 1; max / pos > 0; pos *= 10) {
        countingSort(arr, n, pos)
    }

    return arr
}

function countingSort(arr, n, pos) {
    let freq = new Array(10).fill(0)
    for (let i = 0; i < n; i++) {
        freq[Math.floor(arr[i] / pos) % 10]++
    }
    for (let i = 1; i < 10; i++) {
        freq[i] += freq[i - 1]
    }

    let result = []
    for (let i = n - 1; i >= 0; i--) {
        result[--freq[Math.floor(arr[i] / pos) % 10]] = arr[i]
    }

    for (let i = 0; i < n; i++) {
        arr[i] = result[i]
    }
}

console.log(radixSort([8, 156, 2, 889, 532, 222, 1, 44, 432]))