const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

const bubbleSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                arr = swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

let arr = [5, 7, 2, 15, 11, 9, 8, 6];
console.log(...bubbleSort(arr));