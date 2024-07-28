<template>
    <main class="flex-1 p-6 m-custom-1">
      <ActiveProduct />
      <UpadateBuilder />
    </main>
</template>

<script>
import ActiveProduct from '../../admin-builder/main-content-builder/ActiveProduct.vue';
import UpadateBuilder from './main-content-builder/UpadateBuilder.vue';

export default{
  components: {ActiveProduct, UpadateBuilder}
}
</script>