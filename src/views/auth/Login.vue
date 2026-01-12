<template>
  <div class="login flex justify-center items-center" :style="{ backgroundImage: `url(${loginImg})` }">
    <BaseForm method="GET">
      <h2 class="font-bold font-robotoSlab text-2xl mb-10 mt-1">Inicia Sesion</h2>
      <BaseInput validate="email" type="email" name="userEmail" placeholder="Correo Electronico" />
      <BaseInput type="password" name="userEmail" placeholder="Correo Electronico" />
      <p class="text-right text-sm self-end mt-0 mb-5 underline font-semibold font-robotoSlab">
          <RouterLink to="/Missing">
              Olvide Mi Contraseña
          </RouterLink>
      </p>
      <ButtonNav button-title="Iniciar Sesion" variant="blue" to="/"/>
      <hr class="w-11/12  border-gray-500 my-5">
      <p class="font-robotoSlab text-sm">
          No tienes una cuenta?
      <RouterLink to="/Register" class="text-royalBlue font-semibold hover:underline">
      Registrate.
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
