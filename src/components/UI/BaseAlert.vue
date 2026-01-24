<template>
    <Transition name="alert">
    <div v-if="alert.show" :class="[AlertClass,'absolute top-2 right-0 px-5 py-3 font-quicksand rounded-lg bg-white']">
        <span class="p-0 m-0 inline">{{ AlertIcon }}</span> <p class="inline font-semibold">{{ alert.title }}</p>
    </div>
    </Transition>
</template>
<script setup lang="ts"> 
import { useAlertStore } from '@/stores/alert';
import { computed } from 'vue';

const alert = useAlertStore()

const props = withDefaults(defineProps<{
title?: string
AlertClass?: string
show?: boolean
}>(), {
show: false
})


const AlertIcon = computed(()=>{
    if(alert.signal=='red') return '❌'
    else return '✅'
})

</script>
<style scoped>

.alert-enter-active,
.alert-leave-active {
  transition: all 0.4s ease;
}

.alert-enter-from,
.alert-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.alert-enter-to,
.alert-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>