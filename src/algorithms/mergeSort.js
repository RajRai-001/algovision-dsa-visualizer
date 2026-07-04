// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Merge Sort
export const mergeSort = async (
  array,
  setArray,
  setComparing,
  setSwapping,
  setSorted,
  speed
) => {

  let arr = [...array];

  await mergeSortHelper(
    arr,
    0,
    arr.length - 1,
    setArray,
    setComparing,
    setSwapping,
    speed
  );

  setSorted([...Array(arr.length).keys()]);

  return arr;
};

// Recursive Function

const mergeSortHelper = async (
  arr,
  left,
  right,
  setArray,
  setComparing,
  setSwapping,
  speed
) => {

  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  await mergeSortHelper(
    arr,
    left,
    mid,
    setArray,
    setComparing,
    setSwapping,
    speed
  );

  await mergeSortHelper(
    arr,
    mid + 1,
    right,
    setArray,
    setComparing,
    setSwapping,
    speed
  );

  await merge(
    arr,
    left,
    mid,
    right,
    setArray,
    setComparing,
    setSwapping,
    speed
  );

};

// Merge Function

const merge = async (
  arr,
  left,
  mid,
  right,
  setArray,
  setComparing,
  setSwapping,
  speed
) => {

  let leftArray = arr.slice(left, mid + 1);
  let rightArray = arr.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArray.length && j < rightArray.length) {

    setComparing([k]);

    await sleep(speed);

    if (leftArray[i] <= rightArray[j]) {

      arr[k] = leftArray[i];
      i++;

    } else {

      arr[k] = rightArray[j];
      j++;

    }

    setSwapping([k]);

    setArray([...arr]);

    await sleep(speed);

    setComparing([]);
    setSwapping([]);

    k++;

  }

  while (i < leftArray.length) {

    arr[k] = leftArray[i];

    setArray([...arr]);

    await sleep(speed);

    i++;
    k++;

  }

  while (j < rightArray.length) {

    arr[k] = rightArray[j];

    setArray([...arr]);

    await sleep(speed);

    j++;
    k++;

  }

};