<template>
        <button class="w-full shadow-lg text-sm font-quicksand p-4 w-full rounded-lg font-semibold px-1 py-3 transition duration-600 ease-in" :class="[BgVariant,TextVariant]">
            {{ buttonTitle }}
            <img v-if="buttonImage" :src="buttonImage" class="h-[20px]">
        </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';

    const props = defineProps<{
        buttonTitle:string,
        background? : 'royalBlue' | 'white',
        text? : 'royalBlue' | 'white' | 'black',
        buttonImage:string,
    }>()
    const BgVariant = computed(()=>{return {royalBlue : 'bg-royalBlue hover:bg-blue-800',white : 'bg-white hover:bg-gray-200'}[props.background ?? 'royalBlue']
    })

    const TextVariant = computed(()=>{return{royalBlue:'text-royalBlue',white:'text-white',black:'text-black'}[props.text ?? 'black']
    })
</script>
<style>

</style>