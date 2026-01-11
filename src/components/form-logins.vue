<template>
    <div ref="formd" class="transition-opacity duration-1000 bg-white w-1/4 h-auto text-center p-4 border rounded-lg flex items-center flex-col shadow-xl">
        <h2 class="font-bold font-robotoSlab text-2xl mb-10 mt-1">
            {{ title }}
        </h2>
        <p v-if="perdida" class=" text-left mb-2 text-red-600 font-robotoSlab">{{ textoPerdida }}</p>
        <input v-if="showName" type="text" placeholder="Nombre de Usuario">
        <input v-if="showEmail" type="text" placeholder="Correo Electronico">
        <input v-if="showPassword" type="text" placeholder="Contraseña">
        <input v-if="showTelephone" type="text" placeholder="Nro Telefono (opcional)">
        <p v-if="forget" class="text-right text-sm self-end mt-0 mb-5 underline font-semibold font-robotoSlab">
            <RouterLink :to="missing">
                Olvide Mi Contraseña
            </RouterLink>
        </p>
        <buttonNav button-title="Iniciar Sesion"  bgvariant="royalBlue" colorvariant="white"/>
        <hr class="w-11/12  border-gray-500 my-5">
        <p class="font-robotoSlab text-sm">
            {{ paragraph }} 
        <RouterLink :to="to" class="text-royalBlue font-semibold hover:underline">
        {{ link }}
        </RouterLink>
        </p>
    </div>
</template>
<script setup lang="ts">
    import {ref, onMounted} from 'vue'
    import buttonNav from './UI/buttonNav.vue';

const props = defineProps<{
    title : string,
    showName? : boolean,
    showEmail? :boolean,
    showPassword? : boolean,
    showTelephone? : boolean,
    forget? : boolean,
    paragraph : string,
    link : string,
    to : string,
    perdida? : boolean,
    textoPerdida : string,
    missing : string,
}>()

const formd = ref<HTMLDivElement | null>(null)

const fadeIn = () => {
    const form = formd.value
    if(!form) return
    form.style.opacity='0';
    setTimeout(() => {
        form.style.opacity='1'
    }, 50);
}

onMounted(()=>{
    fadeIn()
})

</script>
<style scoped>
input{
    background-color:rgb(241, 241, 241) ;
    color: black;
    padding: 0.95rem;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 1rem;
    font-family: "roboto slab";
    font-size: 14px;
    transition: 0.6s ease;
}
input::placeholder{
    color: rgb(75, 75, 75);
}
input:focus{
    outline: none;
}
input:hover{
    transform: scale(1.03);
}
button{
    transition: 0.6s ease;
}
button:hover{
    transform: scale(1.03);
    background-color: rgb(29, 74, 189);
}
</style>