<template>
  <div class="login flex justify-center items-center" :style="{ backgroundImage: `url(${loginImg})` }">
    <BaseForm @submit="submit" method="POST">
      <h2 class="font-bold font-robotoSlab text-2xl mb-10 mt-1">Crea una Cuenta</h2>
      <BaseInput validate="name" type="text" v-model="userName" placeholder="Nombre de Usuario" />
      <BaseInput validate="email" type="email" v-model="userEmail" placeholder="Correo Electronico" />
      <BaseInput type="password" v-model="userPassword" placeholder="Contraseña" />
      <BaseInput validate="telephone" type="telephone" v-model="userTelephone" placeholder="Telefono (opcional)" />
      <ButtonBase btn-class="bg-royalBlue text-white" btn-title="Registrarse" type="submit"/>
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
import {ref} from 'vue';
import { useRouter } from 'vue-router';

import loginImg from '@/assets/register.jpg'
import BaseForm from '@/components/UI/BaseForm.vue';
import BaseInput from '@/components/UI/BaseInput.vue';
import ButtonBase from '@/components/UI/ButtonBase.vue';

// Campos
const userName = ref('')
const userEmail = ref('')
const userPassword = ref('')
const userTelephone = ref('')
// Navegacion con router
const router = useRouter()

const submit = async () => {
console.log({
  name: userName.value,
  email: userEmail.value,
  password: userPassword.value,
  telephone: userTelephone.value
})
try{
  const response = await fetch('http://localhost:3000/api/users',{
    method : 'POST',
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify({
      name : userName.value,
      email : userEmail.value,
      password : userPassword.value,
      telephone : userTelephone.value
    })
  })
  const data = await response.json()
  console.log(data)
  if(response.ok){
    router.push('/')
  }
  else{
    console.error(data.message)
  }
} catch(error) {
  console.error("error de red",error)
}

}



</script>

<style scoped>
.login {
  width: 100%;
  height: 100dvh;
  background-size: cover;
  background-position: center;

}
</style>
