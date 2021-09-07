// if array is sorted, only then binarySearch works

const binarySearch = (arr, element) => {
    let n = arr.length;
    let startIndex = 0;
    let endIndex = n - 1;

    while (startIndex <= endIndex) {
        let midIndex = Math.floor((startIndex + endIndex) / 2);
        if (arr[midIndex] === element) return midIndex;
        else if (arr[midIndex] > element) endIndex = midIndex - 1;
        else startIndex = midIndex + 1;
    }

    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(binarySearch(arr, 9))