<template>
    <Transition name="alert">
    <div v-if="show" :class="[AlertClass,'absolute top-2 right-0 px-5 py-3 font-quicksand rounded-lg bg-white']">
        <span class="p-0 m-0 inline">{{ AlertIcon }}</span> <p class="inline font-semibold">{{ title }}</p>
    </div>
    </Transition>
</template>
<script setup lang="ts"> 
import { computed,watch } from 'vue';

    const props = withDefaults(defineProps<{
    title: string
    AlertClass?: string
    AlertSignal?: 'red' | 'green'
    show?: boolean
    }>(), {
    show: false
    })

const emit = defineEmits(['close'])

watch(() => props.show,(value) => {
    if (value) {
      setTimeout(() => {
        emit('close')
      }, 2000)
    }
  }
)


const AlertIcon = computed(()=>{
    if(props.AlertSignal=='red') return '❌'
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