<template>
    <button :type="type" :class="['shadow-lg text-sm font-quicksand w-full rounded-lg font-semibold px-1 py-4 transition duration-600 ease-in cursor-pointer text-black font-quicksand',btnClass,$attrs.class]" >
        {{ btnTitle }}
        <img v-if="buttonImage" :src="buttonImage" class="h-[20px]">
    </button>
</template>
<script setup lang="ts">
    import {ref} from 'vue'
    const props = defineProps<{
        type:'button'|'submit'|'reset',
        btnClass?:string,
        btnTitle:string,
        buttonImage?:string,
    }>()
</script>
<style scoped>

</style>