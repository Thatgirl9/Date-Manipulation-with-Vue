// useDate.js
import { ref } from 'vue';

const useDate = (initialDate = new Date()) => {
  const date = ref(initialDate);

  const addDate = (days) => {
    const newDate = new Date(date.value);
    newDate.setDate(date.value.getDate() + days);
    date.value = newDate;
  };

  const addMonth = (months) => {
    const newDate = new Date(date.value);
    newDate.setMonth(date.value.getMonth() + months);
    date.value = newDate;
  };

  return { date, addDate, addMonth };
};

export default useDate;
