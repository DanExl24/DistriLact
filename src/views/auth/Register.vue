<template>
  <div class="login flex justify-center items-center relative overflow-hidden" :style="{ backgroundImage: `url(${loginImg})` }">
    <BaseAlert :show="show" @close= 'show = false' :title="AlertTitle" :AlertSignal="AlertSignal"/>
    <BaseForm @submit="submit" method="POST">
      <h2 class="font-bold font-robotoSlab text-2xl mb-10 mt-1">Crea una cuenta</h2>
      <BaseInput validate="name" type="text" v-model="userName" placeholder="Nombre de Usuario" />
      <BaseInput validate="email" type="email" v-model="userEmail" placeholder="Correo Electronico" />
      <BaseInput type="password" v-model="userPassword" placeholder="Contraseña" />
      <BaseInput validate="telephone" type="telephone" v-model="userTelephone" placeholder="Telefono (opcional)" />
      <ButtonBase variant="blue" btn-title="Registrarse" type="submit"/>
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
import BaseAlert from '@/components/UI/BaseAlert.vue';
// Campos
const userName = ref('')
const userEmail = ref('')
const userPassword = ref('')
const userTelephone = ref('')
// Navegacion con router
const router = useRouter()

//Mensaje de advertencia
const show = ref(false)
const AlertTitle = ref('')
const AlertSignal = ref<'red' | 'green'>('green')

const submit = async () => {
try{

  if(userName.value=='' || userEmail.value=='' || userPassword.value==''){
      show.value = true
      AlertTitle.value = 'Rellene los campos obligatorios'
      AlertSignal.value='red'
      return
  }
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
      show.value = true
      AlertTitle.value = 'Registro Exitoso'
      AlertSignal.value='green'
      setTimeout(() => {
            router.push('/')
      }, 1500)
  }
  else{
      AlertTitle.value = 'Credenciales Incorrectas'
      AlertSignal.value='red'
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
