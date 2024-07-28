<template>
    <main class="flex-1 p-6 m-custom-1">
      <ActiveOrder />
      <UpadateBuilder />
    </main>
</template>

<script>
import ActiveOrder from '../../admin-builder/main-content-builder/ActiveOrder.vue';
import UpadateBuilder from './main-content-builder/UpadateBuilder.vue';

export default{
    components: {ActiveOrder, UpadateBuilder}
}
</script>

