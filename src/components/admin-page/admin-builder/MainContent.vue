<template>
    <main class="flex-1 p-6">
      <header class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Statistics</h1>
        <button class="bg-sign-out-color text-sign-out px-4 py-2 rounded">Sign Out</button>
      </header>
      <div class="grid grid-cols-3 gap-4 mb-6">
        <MultiCard title="Prouct" count="10 Products" />
        <MultiCard title="Order" count="1 Orders" />
        <MultiCard title="User" count="3 Accounts" />
      </div>
      <ActiveProduct />
      <ActiveOrder />
      <TasksPerformance />
    </main>
</template>

<script>
import ActiveOrder from './main-content-builder/ActiveOrder.vue';
import ActiveProduct from './main-content-builder/ActiveProduct.vue';
import MultiCard from './main-content-builder/MultiCard.vue';
import TasksPerformance from './main-content-builder/TasksPerformance.vue';

export default {
    name: 'MainContent',
    components: { MultiCard, ActiveProduct, ActiveOrder, TasksPerformance }
}
</script>

<style>
.bg-sign-out-color{
  background-color: #000;
} 
.text-sign-out{
  color: #fff;
}
button{
  cursor: pointer;
  transition: all 0.2s ease-in-out 0ms;
}
button:hover{
  background-color: #2e2e2e;
  box-shadow: 0px 0px 20px -18px;
}
button:active{
  transform: scale(0.95);
}
</style>