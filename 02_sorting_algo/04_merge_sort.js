// merging two sorted arrays
function merge(arr1, arr2) {
    let arr = []
    let m = arr1.length
    let n = arr2.length
    let i = 0,
        j = 0

    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i])
            i++
        } else {
            arr.push(arr2[j])
            j++
        }
    }

    while (i < m) {
        arr.push(arr1[i])
        i++
    }

    while (j < n) {
        arr.push(arr2[j])
        j++
    }

    return arr
}

// let arr1 = [1, 3, 5, 7, 9]
// let arr2 = [2, 4, 6, 8]
// console.log(merge(arr1, arr2))

//////////////////////////////////////////////////////////

// merge sort
function mergeSort(arr) {
    let n = arr.length
    // base case
    if (n <= 1) return arr

    // divide
    let mid = Math.floor(n / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, n)

    left = mergeSort(left)
    right = mergeSort(right)

    return merge(left, right)
}

console.log(mergeSort([5, 4, 1, 2, 3, -2, 0, -99, 100, 7]))