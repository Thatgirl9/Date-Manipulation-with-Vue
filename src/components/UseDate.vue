
<template>
  <div class="body-div">
    <p>{{ date }}</p>
    <div class="btn-div">
    <button @click="addDate(1)" class="day">Change Day</button>
   
    <button @click="addMonth(1)" class="month">Change Month</button>
    </div>
    
    
  </div>
</template>

<script>
import useDate from '../composables/useDate.js';

export default {
  setup() {
    const { date, addDate, addMonth } = useDate();

    return { date, addDate, addMonth };
  },
};
</script>

<style>
.body-div{
  text-align: center;
  background-image: linear-gradient(135deg, #C33764 10%, #1D2671 100%);
  border-radius: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
  padding: 1em;
}

.btn-div{
  text-align: center;
  background-image: linear-gradient(135deg, #C33764 10%, #1D2671 100%);
  border-radius: 10px;
  padding: 0.9em;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:10px;
}

button{
  padding:0.5em;
  cursor: pointer;
  font-weight: 600;
  border-radius: 7px;
  font-size: 1.1rem;
  color:white;
}

.day{
  background-color: #1D2671;
  border:1px solid #C33764;
}

.month{
  background-color: #C33764;
  border: 1px solid #1D2671;
}

</style>
