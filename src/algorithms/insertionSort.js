// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Insertion Sort Animation
export const insertionSort = async (
  array,
  setArray,
  setComparing,
  setSwapping,
  setSorted,
  speed
) => {

  let arr = [...array];

  let sorted = [0];

  setSorted([...sorted]);

  for (let i = 1; i < arr.length; i++) {

    let key = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > key) {

      // Highlight Comparing
      setComparing([j, j + 1]);

      await sleep(speed);

      // Highlight Swapping
      setSwapping([j, j + 1]);

      await sleep(speed);

      arr[j + 1] = arr[j];

      setArray([...arr]);

      await sleep(speed);

      setComparing([]);
      setSwapping([]);

      j--;

    }

    arr[j + 1] = key;

    setArray([...arr]);

    await sleep(speed);

    sorted.push(i);

    setSorted([...sorted]);

  }

  return arr;

};