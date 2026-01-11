<template>
    <li>
    <component :is="typeComponent" class="bg-white text-royalBlue text-left font-robotoSlab py-2 px-3 w-full text-left hover:bg-gray-200 transition duration-650 ease-in">
        <slot></slot>
    </component>
    </li>
</template>
<script setup lang="ts">
import { computed } from 'vue';

    const props = defineProps<{
        type? : 'button' | 'text' | 'link'
    }>()
    const typeComponent = computed(()=>{
        if(props.type==='link') return 'router-link';
        else if(props.type==='text') return 'div';
        else return 'button';
    })
</script>
<style>
    
</style>