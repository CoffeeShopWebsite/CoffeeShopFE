<template>
    <section>
      <h2 class="text-xl font-bold mb-4">Tasks Performance</h2>
      <div class="flex-task">
        <div class="text-center">
          <span class="block text-lg">Completed</span>
          <span class="block text-2xl font-bold">100%</span>
        </div>
        <div class="text-center">
          <span class="block text-lg">In Progress</span>
          <span class="block text-2xl font-bold">90%</span>
        </div>
        <div class="text-center">
          <span class="block text-lg">Deleted</span>
          <span class="block text-2xl font-bold">0%</span>
        </div>
      </div>
    </section>
</template>

<style scoped>
.flex-task{
  display: flex;
  justify-content: space-around;
}
</style>