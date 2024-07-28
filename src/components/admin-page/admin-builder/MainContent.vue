<template>
    <main class="flex-1 p-6 m-custom-1">
      <div class="grid grid-cols-3 gap-4 mb-6">
        <MultiCard title="Prouct" count="10 Products" />
        <MultiCard title="Order" count="6 Orders" />
        <MultiCard title="User" count="4 Accounts" />
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
    components: { MultiCard, ActiveProduct, ActiveOrder, TasksPerformance }
}
</script>