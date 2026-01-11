<template>
  <div class="login flex justify-center items-center" :style="{ backgroundImage: `url(${loginImg})` }">
    <formLogins 
    texto-perdida=""
    showEmail 
    showPassword 
    forget 
    title="Inicia Sesion" 
    button-title="Iniciar Sesion" 
    paragraph="No tienes una cuenta?" 
    link="Registrate" 
    missing="/Missing"
    to="/Register" />
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
