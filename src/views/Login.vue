<template>
  <div class="login flex justify-center items-center" :style="{ backgroundImage: `url(${loginImg})` }">
    <formRegister showEmail showPassword forget title="Inicia Sesion" button-title="Iniciar Sesion" />
  </div>
</template>

<script setup lang="ts">
import loginImg from '@/assets/login.jpg'
import formRegister from '@/components/form-register.vue';
</script>

<style scoped>
.login {
  width: 100%;
  height: 100dvh;
  background-size: cover;
  background-position: center;

}
</style>
