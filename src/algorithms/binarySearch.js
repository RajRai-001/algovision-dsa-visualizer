// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const binarySearch = async (
  array,
  target,
  setComparing,
  setFound,
  speed
) => {

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {

    const mid = Math.floor((left + right) / 2);

    setComparing([mid]);

    await sleep(speed);

    if (array[mid] === Number(target)) {

      setFound([mid]);

      setComparing([]);

      return mid;

    }

    if (array[mid] < Number(target)) {

      left = mid + 1;

    } else {

      right = mid - 1;

    }

    setComparing([]);

  }

  return -1;

};