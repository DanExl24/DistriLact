<template>
    <transition name="fade">
    <form 
    ref="BaseForm"
    v-bind="$attrs"
    :method="method"
    v-show="show"
    @submit.prevent="emitSubmit"
    :class="[formClass,
            'bg-white h-auto text-center p-4 border rounded-lg flex items-center flex-col shadow-xl w-1/4 gap-4']">
        <slot></slot>
    </form>
    </transition>
</template>
<script setup lang="ts">
    import {ref,onMounted} from 'vue'
    const props = defineProps<{
        method:'POST' | 'GET',
        formClass?:string,
    }>()
    const emit = defineEmits<{
    (e: 'submit'): void
    }>()
    const emitSubmit = () => {
    emit('submit')
    }
    const show = ref(true)
    onMounted(()=>{
        show.value=false
        setTimeout(() => {
            show.value=true
        }, 50)
    })
</script>
<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>