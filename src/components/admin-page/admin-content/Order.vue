<template>
    <div class="flex flex-col h-screen bg-background">
        <Sidebar />
        <HeadContent />
        <MainOrderContent />
    </div>
</template>

<script>
import HeadContent from '../admin-builder/HeadContent.vue';
import Sidebar from '../admin-builder/Sidebar.vue';
import MainOrderContent from './admin-content-builder/MainOrderContent.vue';

    export default{
        name: 'Account',
        components: {Sidebar, HeadContent, MainOrderContent}
    }
</script>

<style src="@/assets/style.css"></style>