<template>
    <div class="bg-white w-1/4 h-1/2 text-center p-3 border rounded-lg">
        <h2 class="font-bold text-2xl mb-10">{{ title }}</h2>
        <input v-if="showName" type="text" placeholder="Nombre de Usuario">
        <input v-if="showEmail" type="text" placeholder="Correo Electronico">
        <input v-if="showPassword" type="text" placeholder="Contraseña">
        <input v-if="showTelephone" type="text" placeholder="Nro Telefono (opcional)">
        <p v-if="forget" class="text-right"><a href="#">Olvide Mi Contraseña</a></p>
        <button class="bg-blue-800 font-sm text-white p-2 w-full rounded-lg">{{ buttonTitle }}</button>
    </div>
</template>
<script setup lang="ts">

const props = defineProps<{
    title : string,
    showName? : boolean,
    showEmail? :boolean,
    showPassword? : boolean,
    showTelephone? : boolean,
    forget? : boolean,
    buttonTitle:string,
}>()

</script>
<style scoped>
input{
    background-color:rgb(241, 241, 241) ;
    color: black;
    padding: 16px;
    border-radius: 8px;
    width: 100%;
    margin-bottom: 1rem;
}
</style>