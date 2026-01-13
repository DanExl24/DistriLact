<template>
    <input 
    ref="BaseInput"
    :type="type" 
    :id="id" 
    :placeholder="placeholder"
    :validate="validate"
    :value="modelValue"
    @input="onInput"
    :class="['bg-gray-100 text-black p-[0.95rem] text-sm rounded w-full font-robotoSlab transition duration-600 ease-in placeholder-gray-600 focus:outline-none transform hover:scale-[1.02] border',borderClass]"
    >
</template>
<script setup lang="ts">
    import {ref} from 'vue';
    const props = defineProps<{
        type:'text' | 'email' | 'password' | 'number' | 'telephone',
        id?:string,
        placeholder:string,
        validate?:'name' | 'email'  | 'telephone',
        modelValue:string
    }>()
    const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
    const borderClass = ref('')

    const onInput = (e:Event) => {
        const inputValue = (e.target as HTMLInputElement).value
        emit('update:modelValue', inputValue)
        let regex
        switch(props.validate){
            case 'name':
                regex = /^[a-zA-Z0-9]+$/
                regex.test(inputValue) ? borderClass.value = 'border-green-500' : borderClass.value = 'border-red-500'
            break;
            case 'email':
                regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                regex.test(inputValue) ? borderClass.value = 'border-green-500' : borderClass.value = 'border-red-500'
            break;
            case 'telephone':
                regex = /^\d{10}$/
                regex.test(inputValue) ? borderClass.value = 'border-green-500' : borderClass.value = 'border-red-500'
            break;
            default:
                borderClass.value = 'border-gray-200'
        }
    }

</script>
<style scoped>

</style>