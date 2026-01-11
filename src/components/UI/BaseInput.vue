<template>
    <input 
    :type="type" 
    :name="name" 
    :id="id" 
    :placeholder="placeholder"
    class="bg-gray-100 text-black p-[0.95rem] text-sm rounded w-full font-robotoSlab transition duration-600 ease-in placeholder-gray-600 focus:outline-none transform hover:scale-[1.02]" 
    >
</template>
<script setup lang="ts">
    const props = defineProps<{
        type:'text' | 'email' | 'password' | 'number',
        name:string,
        id?:string,
        placeholder:string,
    }>()
</script>
<style scoped>

</style>