function countingSort(arr) {
    let n = arr.length

    // finding max value
    let max = Number.MIN_VALUE
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) max = arr[i]
    }

    // creating frequency array
    let freq = new Array(max + 1).fill(0)
    for (let i = 0; i < n; i++) {
        freq[arr[i]]++
    }

    //updating frequency array
    for (let i = 1; i < freq.length; i++) {
        freq[i] += freq[i - 1]
    }

    // creating sorted array
    let result = []
    for (let i = n - 1; i >= 0; i--) {
        result[--freq[arr[i]]] = arr[i]
    }

    return result
}

console.log(countingSort([1, 2, 5, 78, 99, 2, 6, 99]))