<template>
    <main class="flex-1 p-6 m-custom-1">
      <ActiveAccount />
      <UpadateBuilder />
    </main>
</template>

<script>
import ActiveAccount from '../../admin-builder/main-content-builder/ActiveAccount.vue';
import UpadateBuilder from './main-content-builder/UpadateBuilder.vue';
export default{
  components: {ActiveAccount, UpadateBuilder}
}
</script>

