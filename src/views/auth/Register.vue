<template>
  <div class="login flex justify-center items-center" :style="{ backgroundImage: `url(${loginImg})` }">
    <formLogins 
    texto-perdida=""
    showName 
    showEmail 
    showPassword 
    showTelephone 
    title="Crea una cuenta" 
    button-title="Registrarse" 
    paragraph="Ya tienes una cuenta?" 
    link="Inicia Sesion" 
    missing=""
    to="/Login" />
  </div>
</template>

<script setup lang="ts">
import loginImg from '@/assets/register.jpg'
import formLogins from '@/components/form-logins.vue';
</script>

<style scoped>
.login {
  width: 100%;
  height: 100dvh;
  background-size: cover;
  background-position: center;

}
</style>
