<script setup>
import FormInput from '@/modules/shared/components/FormInput.vue';
import FormLabel from '@/modules/shared/components/FormLabel.vue';
import MyButton from '@/modules/shared/components/MyButton.vue';
import TextLink from '@/modules/shared/components/TextLink.vue';
import { reactive, ref } from 'vue';

import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const credentials = reactive({
   email: '',
   password: ''
});

const errors = ref([]);

async function handleLogin() {

   errors.value = [];

   try {
      await authStore.login(credentials);
      router.push('/');
   } catch (error) {
      // console.log(error);

      const responseErrors = error.errors;

      // console.log(responseErrors);

      for (const field in responseErrors) {
         errors.value.push(responseErrors[field][0])
      }

      console.log(errors.value);

   }

};

</script>

<template>
   <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      Inicia sesión en tu cuenta
   </h1>

   <div v-if="errors.length" class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
   <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
   </svg>
   <span class="sr-only">Info</span>
   <div>
      <span v-for="error in errors">
         {{ error }} <br>
      </span>
   </div>
   </div>


   <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
      <div>
         <FormLabel for="email">Your email</FormLabel>
         <FormInput type="email" name="email" id="email" placeholder="name@company.com" />
      </div>
      <div>
         <FormLabel for="password">Password</FormLabel>
         <FormInput type="password" name="password" id="password" placeholder="••••••••" />
      </div>
      <div class="flex items-center justify-between">
         <div class="flex items-start">
            <div class="flex items-center h-5">
               <input id="remember" aria-describedby="remember" type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800" />
            </div>
            <div class="ml-3 text-sm">
               <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
            </div>
         </div>
         <TextLink to="#">Forgot password?</TextLink>
      </div>
      <MyButton type="submit" color="success">Sign in</MyButton>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
         Don’t have an account yet?
         <TextLink to="#">Sign up</TextLink>
      </p>
   </form>
</template>