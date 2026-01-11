<template>
    <div class="flex">
        <span class="text-white font-robotoSlab">{{ title }}</span>
        <img :src="Arrow" alt="">
    </div>
</template>
<script setup lang="ts">
    import Arrow from '@/assets/Icons/arrow.png'
    const props = defineProps<{
        title:string
    }>()
</script>
<style>
    
</style>