<template>
    <button :type="type" :class="['shadow-lg text-sm font-quicksand w-full rounded-lg font-semibold px-1 py-4 transition duration-600 ease-in cursor-pointer text-black font-quicksand',btnClass,variant,$attrs.class]" >
        {{ btnTitle }}
        <img v-if="buttonImage" :src="buttonImage" class="h-[20px]">
    </button>
</template>
<script setup lang="ts">
    import {computed} from 'vue'

    const props = defineProps<{
        type:'button'|'submit'|'reset',
        btnClass?:string,
        btnTitle:string,
        buttonImage?:string,
        variant?:'blue'|'white'
    }>()

    const variant = computed(()=>{
        if (props.variant == 'blue') return 'bg-royalBlue text-white hover:bg-[rgb(12, 41, 106)] hover:scale-[1.02]';
        if (props.variant == 'white') return 'bg-white text-royalBlue hover:bg-gray-200 hover:scale-[1.02]'
        else return 'bg-royalBlue text-white hover:bg-[rgb(29, 74, 189)] hover:scale-[1.02]'
    })
</script>
<style scoped>

</style>