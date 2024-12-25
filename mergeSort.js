function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  } else {
    const halfLength = Math.ceil(arr.length / 2);
    const arr1 = arr.slice(0, halfLength);
    const arr2 = arr.slice(halfLength);
    const sortedArr1 = mergeSort(arr1);
    const sortedArr2 = mergeSort(arr2);

    const newArr = [];
    let arr1Index = 0;
    let arr2Index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr1Index == arr1.length) {
        newArr.push(sortedArr2[arr2Index++]);
      } else if (arr2Index == arr2.length) {
        newArr.push(sortedArr1[arr1Index++]);
      } else if (sortedArr1[arr1Index] <= sortedArr2[arr2Index]) {
        newArr.push(sortedArr1[arr1Index++]);
      } else {
        newArr.push(sortedArr2[arr2Index++]);
      }
    }
    return newArr;
  }
}
console.log(mergeSort([1, 4, 5, 3, 5, 3, 2, 7, 9]));
