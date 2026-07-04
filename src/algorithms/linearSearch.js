// Delay Function
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const linearSearch = async (
  array,
  target,
  setComparing,
  setFound,
  speed
) => {

  for (let i = 0; i < array.length; i++) {

    setComparing([i]);

    await sleep(speed);

    if (array[i] === Number(target)) {

      setFound([i]);

      setComparing([]);

      return i;

    }

    setComparing([]);

  }

  return -1;

};
