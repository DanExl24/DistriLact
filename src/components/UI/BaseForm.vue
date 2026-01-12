<template>
    <form 
    ref="BaseForm"
    :method="method"
    :fade="fade"
    :class="[formClass,
            'bg-white h-auto text-center p-4 border rounded-lg flex items-center flex-col shadow-xl w-1/4 gap-4', 
            props.fade ? 'transition-opacity duration-1000' : 'opacity-100']">
        <slot></slot>
    </form>
</template>
<script setup lang="ts">
    import {ref,onMounted, computed} from 'vue';

    const props = defineProps<{
        method:'POST' | 'GET',
        formClass?:string,
        fade?:boolean,
    }>()
    const BaseForm = ref<HTMLDivElement | null>(null)
    const fadeIn = () => {
        const form = BaseForm.value
        if(!form) return
        form.style.opacity='0';
        setTimeout(() => {
            form.style.opacity='1'
        }, 50);
    }
    onMounted(()=>{
        if(props.fade){
            fadeIn()
        } 
    })
</script>
<style>

</style>