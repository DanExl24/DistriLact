<template>
  <div class="login flex justify-center items-center" :style="{ backgroundImage: `url(${loginImg})` }">
    <BaseForm method="GET">
      <h2 class="font-bold font-robotoSlab text-2xl mb-4 mt-1">Recuperar Cuenta</h2>
      <p class="text-left text-red-500 text-normal self-end mt-0 mb-2 font-semibold font-robotoSlab">
        Escribe tu correo electronico para que podamos enviarte un mensaje con las instrucciones
      </p>
      <BaseInput validate="email" type="email" name="userEmail" placeholder="Correo Electronico" />
      <ButtonNav button-title="Recuperar Cuenta" variant="blue" to="/"/>
      <hr class="w-11/12  border-gray-500 my-5">
      <p class="font-robotoSlab text-sm">
          Recordaste tu contraseña?
      <RouterLink to="/Login" class="text-royalBlue font-semibold hover:underline">
      Inicia Sesion.
      </RouterLink>
      </p>
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
import loginImg from '@/assets/Login/login.jpg'
import BaseForm from '@/components/UI/BaseForm.vue';
import BaseInput from '@/components/UI/BaseInput.vue';
import ButtonNav from '@/components/UI/ButtonNav.vue';
</script>

<style scoped>
.login {
  width: 100%;
  height: 100dvh;
  background-size: cover;
  background-position: center;

}
</style>
