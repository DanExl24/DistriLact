<template>
  <div class="login flex justify-center items-center relative overflow-hidden" :style="{ backgroundImage: `url(${loginImg})` }">
    <BaseAlert/>
    <BaseForm @submit="submit" method="POST">
      <h2 class="font-bold font-robotoSlab text-2xl mb-10 mt-1">Inicia Sesion</h2>
      <BaseInput validate="email" type="email" name="userEmail" v-model="userEmail" placeholder="Correo Electronico" />
      <BaseInput type="password" name="userEmail" v-model="userPassword" placeholder="Correo Electronico" />
      <p class="text-right text-sm self-end mt-0 mb-5 underline font-semibold font-robotoSlab">
          <RouterLink to="/Missing">
              Olvide Mi Contraseña
          </RouterLink>
      </p>
      <ButtonBase variant="blue" btn-title="Registrarse" type="submit"/>
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
import ButtonBase from '@/components/UI/ButtonBase.vue';
import { useAlertStore } from '@/stores/alert';
import BaseAlert from '@/components/UI/BaseAlert.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const userEmail = ref('')
const userPassword = ref('')

const router = useRouter()

//Mensaje de advertencia
const alert = useAlertStore()

// array de inputs
const inputs  = [userEmail,userPassword]

const submit = async () => {
  console.log(userEmail.value)
  console.log(userPassword.value)
  try{

    for(const input of inputs){
      if(input.value==''){
      alert.trigger('Rellene los campos obligatorios','red')
      alert.close()
      return
    }
    }


    const response = await fetch('http://localhost:3000/api/login',{
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        email : userEmail.value,
        password : userPassword.value
      })
    })
    const data = await response.json()
    console.log(data)
    if(response.ok){
      alert.trigger('Inicio de sesion exitoso','green')
      alert.close()
      setTimeout(() => {
            router.push('/')
      }, 2500)
    }
    else{
        alert.trigger('Credenciales Incorrectas','red')
      alert.close()
      console.error(data.message)
    }
  } catch(error){
    console.log(error)
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
