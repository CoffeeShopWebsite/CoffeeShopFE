<template>
    <div class="flex flex-col h-screen bg-background">
        <Sidebar />
        <HeadContent />
        <MainProductContent />
    </div>
</template>

<script>
import HeadContent from '../admin-builder/HeadContent.vue';
import Sidebar from '../admin-builder/Sidebar.vue';
import MainProductContent from './admin-content-builder/MainProductContent.vue';

    export default{
        name: 'Account',
        components: {Sidebar, MainProductContent, HeadContent}
    }
</script>

<style src="@/assets/style.css"></style>