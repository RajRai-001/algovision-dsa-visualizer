// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Quick Sort
export const quickSort = async (
  array,
  setArray,
  setComparing,
  setSwapping,
  setSorted,
  speed
) => {

  let arr = [...array];

  await quickSortHelper(
    arr,
    0,
    arr.length - 1,
    setArray,
    setComparing,
    setSwapping,
    setSorted,
    speed
  );

  setSorted([...Array(arr.length).keys()]);

  return arr;

};

// Recursive Function

const quickSortHelper = async (
  arr,
  low,
  high,
  setArray,
  setComparing,
  setSwapping,
  setSorted,
  speed
) => {

  if (low < high) {

    const pivotIndex = await partition(
      arr,
      low,
      high,
      setArray,
      setComparing,
      setSwapping,
      speed
    );

    await quickSortHelper(
      arr,
      low,
      pivotIndex - 1,
      setArray,
      setComparing,
      setSwapping,
      setSorted,
      speed
    );

    await quickSortHelper(
      arr,
      pivotIndex + 1,
      high,
      setArray,
      setComparing,
      setSwapping,
      setSorted,
      speed
    );

  }

};

// Partition Function

const partition = async (
  arr,
  low,
  high,
  setArray,
  setComparing,
  setSwapping,
  speed
) => {

  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {

    // Comparing with Pivot
    setComparing([j, high]);

    await sleep(speed);

    if (arr[j] < pivot) {

      i++;

      // Swapping
      setSwapping([i, j]);

      await sleep(speed);

      [arr[i], arr[j]] = [arr[j], arr[i]];

      setArray([...arr]);

      await sleep(speed);

    }

    setComparing([]);
    setSwapping([]);

  }

  // Final Pivot Swap

  setSwapping([i + 1, high]);

  await sleep(speed);

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  setArray([...arr]);

  await sleep(speed);

  setSwapping([]);

  return i + 1;

};