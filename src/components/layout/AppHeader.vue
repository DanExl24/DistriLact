<template>
    <header class="bg-royalBlue w-full h-[80px] fixed top-0 z-50 px-2 py-2">
        <nav class="flex items-center justify-between">
            <div class="flex gap-0 items-center">
                <img :src="Logo" class="h-[65px]">
                <h2 class="text-white font-robotoSlab">DistriLact</h2>
            </div>
            <ButtonNav class="w-[13%]" button-title="Crea tu Cuenta" background="white" text="royalBlue" buttonImage=""/>
            <DropDown class="w-[20%]">
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
            <DropDown class="w-[20%]">
                <template #trigger>
                    <DropDownTitle title="Seguridad" />
                </template>
                <ul>
                    <DropDownItem type="button">Metodos de Pago</DropDownItem>
                    <DropDownItem type="button">Garantias de Seguridad</DropDownItem>
                </ul>
            </DropDown>
            <ButtonNav class="w-[14%] flex items-center justify-center gap-2 px-0" button-title="Explorar Productos" background="white" text="royalBlue" :button-image="blueCart"/>
        </nav>
    </header>
</template>
<script setup lang="ts">
    import Logo from '@/assets/Logo/Logo-DistriLact.png'
    import blueCart from '@/assets/Icons/blue-cart.png'
    import ButtonNav from '../UI/buttonNav.vue';
    import DropDown from '../UI/DropDown.vue';
    import DropDownTitle from '../UI/DropDownTitle.vue';
    import DropDownItem from '../UI/DropDownItem.vue';
</script>
<style>
</style>