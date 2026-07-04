// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Bubble Sort Animation
export const bubbleSort = async (
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

    for (let j = 0; j < arr.length - i - 1; j++) {

      // Highlight Comparing Bars

      setComparing([j, j + 1]);

      await sleep(speed);

      // Swap

      if (arr[j] > arr[j + 1]) {

        setSwapping([j, j + 1]);

        await sleep(speed);

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        setArray([...arr]);

        await sleep(speed);
      }

      setComparing([]);
      setSwapping([]);

    }

    sorted.push(arr.length - i - 1);

    setSorted([...sorted]);
  }

  sorted.push(0);

  setSorted([...sorted]);

  return arr;

};