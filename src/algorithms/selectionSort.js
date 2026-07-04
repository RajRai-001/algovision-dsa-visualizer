// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Selection Sort Animation
export const selectionSort = async (
  array,
  setArray,
  setComparing,
  setSwapping,
  setSorted,
  speed
) => {

  let arr = [...array];
  let sorted = [];

  for (let i = 0; i < arr.length - 1; i++) {

    let minIndex = i;

    // Highlight current minimum
    setComparing([minIndex]);

    for (let j = i + 1; j < arr.length; j++) {

      // Comparing
      setComparing([minIndex, j]);

      await sleep(speed);

      if (arr[j] < arr[minIndex]) {

        minIndex = j;

        setComparing([minIndex]);

      }

    }

    // Swap
    if (minIndex !== i) {

      setSwapping([i, minIndex]);

      await sleep(speed);

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

      setArray([...arr]);

      await sleep(speed);

    }

    setComparing([]);
    setSwapping([]);

    sorted.push(i);

    setSorted([...sorted]);

  }

  sorted.push(arr.length - 1);

  setSorted([...sorted]);

  return arr;
};