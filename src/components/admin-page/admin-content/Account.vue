<template>
    <div class="flex flex-col h-screen bg-background">
        <Sidebar />
        <HeadContent />
        <MainAccountContent />
    </div>
</template>

<script>
import HeadContent from '../admin-builder/HeadContent.vue';
import Sidebar from '../admin-builder/Sidebar.vue';
import MainAccountContent from './admin-content-builder/MainAccountContent.vue';

    export default{
        name: 'Account',
        components: {Sidebar, HeadContent, MainAccountContent}
    }
</script>

<style src="@/assets/style.css"></style>