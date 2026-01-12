<template>
  <div class="login flex justify-center items-center" :style="{ backgroundImage: `url(${loginImg})` }">
    <BaseForm method="GET">
      <h2 class="font-bold font-robotoSlab text-2xl mb-10 mt-1">Crea una Cuenta</h2>
      <BaseInput validate="name" type="text" name="userName" placeholder="Nombre de Usuario" />
      <BaseInput validate="email" type="email" name="userEmail" placeholder="Correo Electronico" />
      <BaseInput type="password" name="userPassword" placeholder="Contraseña" />
      <BaseInput validate="telephone" type="telephone" name="userTelephone" placeholder="Telefono (opcional)" />
      <ButtonNav button-title="Registrarse" variant="blue" to="/"/>
      <hr class="w-11/12  border-gray-500 my-5">
      <p class="font-robotoSlab text-sm">
          Ya tienes una cuenta?
      <RouterLink to="/Login" class="text-royalBlue font-semibold hover:underline">
      Inicia Sesion.
      </RouterLink>
      </p>
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
import loginImg from '@/assets/register.jpg'
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
