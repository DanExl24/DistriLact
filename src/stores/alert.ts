import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
  const show = ref(false)
  const title = ref('')
  const signal = ref<'red' | 'green'>('green')

  function trigger(titleText: string, color: 'red' | 'green') {
    title.value = titleText
    signal.value = color
    show.value = true
  } 

  function close() {
    setTimeout(() => {
            show.value = false
    }, 1500);
  }

  return { show, title, signal, trigger, close }
})