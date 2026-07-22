<script setup>
import { ref } from 'vue';
import PublicNavLink from './PublicNavLink.vue';
import { RouterLink } from 'vue-router';
import AppLogo from '@/modules/shared/components/AppLogo.vue';
import DropdownMenu from '@/modules/shared/components/DropdownMenu.vue';
import DropdownItem from '@/modules/shared/components/DropdownItem.vue';

import { useAuthStore } from '@/modules/auth/stores/authStore.js';

const authStore = useAuthStore();

const openMenu = ref(false);
</script>

<template>
   
   <nav class="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         <!-- Logo -->
         <RouterLink to="/">
            <AppLogo />
         </RouterLink>
         <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <DropdownMenu>
               <template #trigger="{ open }">
                  <button type="button"
                     class="flex text-sm bg-neutral-primary rounded-full md:me-0 focus:ring-4 focus:ring-neutral-tertiary"
                     id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                     data-dropdown-placement="bottom">
                     <span class="sr-only">Open user menu</span>
                     <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo">
                  </button>
               </template>

               <template v-if="authStore.isAuthenticated">
                  <DropdownItem :to="{name: 'admin.dashboard'}">
                     Admin
                  </DropdownItem>
                  <button
                     @click="authStore.logout()"
                     class="block text-left w-full px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >
                     Logout
                  </button>
               </template>
               <template v-else>
                  <DropdownItem :to="{name: 'login'}">
                     Iniciar sesión
                  </DropdownItem>
                  <DropdownItem :to="{name: 'register'}">
                     Registrarse
                  </DropdownItem>
               </template>


            </DropdownMenu>
            
            <button 
               @click="openMenu = !openMenu"
               data-collapse-toggle="navbar-user" type="button"
               class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
               aria-controls="navbar-user" aria-expanded="false">
               <span class="sr-only">Open main menu</span>
               <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
               </svg>
            </button>
         </div>
         <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul
               class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
               <li>
                  <PublicNavLink :to="{
                     name: 'home'
                  }">
                     Home
                  </PublicNavLink>
                  <!-- <a href="#" class="text-blue-600">Home</a> -->
               </li>
               <li>
                  <PublicNavLink to="/about">
                     About
                  </PublicNavLink>
               </li>
            </ul>
         </div>
      </div>
   </nav>

</template>
