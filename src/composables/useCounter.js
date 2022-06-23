import { ref } from "vue";
const useCounter = (initialCount = 0, stepSize = 1) => {
  const count = ref(initialCount);

  const incrementCount = () => {
    count.value += stepSize;
  };

  return {
    count,
    incrementCount,
  };
};

export default useCounter;
