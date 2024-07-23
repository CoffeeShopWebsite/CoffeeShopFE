<template>
    <div class="bg-purple-600 text-white p-4 rounded-lg">
      <h2 class="text-lg">{{ title }}</h2>
      <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
  props: ['title', 'count']
}
</script>