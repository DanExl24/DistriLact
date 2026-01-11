<template>
    <header class="bg-royalBlue w-full h-[80px] fixed top-0 z-50 px-2 py-2">
        <nav class="flex items-center justify-between gap-4">
            <div class="flex gap-0 items-center flex-none">
                <img :src="Logo" class="h-[65px]">
                <h2 class="text-white font-robotoSlab">DistriLact</h2>
            </div>
            <ButtonNav button-title="Crea tu Cuenta" btn-class=" text-center bg-white text-royalBlue py-2 px-4 w-1/2" to="/Register"/>
            <DropDown class="min-w-[150px]">
                <template #trigger>
                    <DropDownTitle title="Ayuda" />
                </template>
                <ul>
                    <DropDownItem type="button">Blog</DropDownItem>
                    <DropDownItem type="button">Correo Servicio al cliente</DropDownItem>
                    <DropDownItem type="button">Preguntas Frecuentes</DropDownItem>
                    <DropDownItem type="button">Politica de Privacidad</DropDownItem>
                </ul>
            </DropDown>
            <DropDown class="min-w-[150px]">
                <template #trigger>
                    <DropDownTitle title="Seguridad" />
                </template>
                <ul>
                    <DropDownItem type="button">Metodos de Pago</DropDownItem>
                    <DropDownItem type="button">Garantias de Seguridad</DropDownItem>
                </ul>
            </DropDown>
            <ButtonNav button-title="Explorar Productos" btn-class="bg-white text-royalBlue flex items-center justify-center gap-2 px-4 py-2  w-1/2" :button-image="blueCart" to="/Login"/>
        </nav>
    </header>
</template>
<script setup lang="ts">
    import Logo from '@/assets/Logo/Logo-DistriLact.png'
    import blueCart from '@/assets/Icons/blue-cart.png'
    import ButtonNav from '../UI/ButtonNav.vue';
    import DropDown from '../UI/DropDown.vue';
    import DropDownTitle from '../UI/DropDownTitle.vue';
    import DropDownItem from '../UI/DropDownItem.vue';
</script>
<style>
</style>