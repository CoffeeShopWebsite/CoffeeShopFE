<template>
    <div class="flex flex-col h-screen bg-background">
        <Sidebar />
        <HeadContent />
        <MainContent />
    </div>
</template>

<script>
import Sidebar from './admin-builder/Sidebar.vue';
import MainContent from './admin-builder/MainContent.vue';
import HeadContent from './admin-builder/HeadContent.vue';

export default {
    name: 'Admin',
    components: { Sidebar, MainContent, HeadContent }
}
</script>

<style src="@/assets/style.css"></style>