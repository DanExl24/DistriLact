<template>
  <div class="login flex justify-center items-center" :style="{ backgroundImage: `url(${loginImg})` }">
    <formLogins 
    perdida
    texto-perdida="Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu cuenta."
    showEmail   
    title="Recuperar Cuenta" 
    button-title="Recuperar" 
    paragraph="Recordaste tu contraseña?" 
    link="Inicia Sesion" 
    missing=""
    to="/Login" />
  </div>
</template>

<script setup lang="ts">
import loginImg from '@/assets/Login/login.jpg'
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
