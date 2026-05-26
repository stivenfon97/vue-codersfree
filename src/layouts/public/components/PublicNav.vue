<script setup>
import { ref } from 'vue';
import PublicNavLink from './PublicNavLink.vue';

const openMenu = ref(false);
</script>

<template>
   <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
         <!-- Logo -->
         <a href="https://flowbite.com/" class="flex items-center space-x-3">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
            <span class="text-xl text-gray-900 font-semibold whitespace-nowrap">Flowbite</span>
         </a>

         <!-- Desktop nav links -->
         <ul class="hidden md:flex items-center space-x-8 font-medium">
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
               </PublicNavLink></li>
         </ul>

         <!-- Right side: avatar + hamburger -->
         <div class="flex items-center space-x-3">
            <img class="w-8 h-8 rounded-full cursor-pointer" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
            <button @click="openMenu = !openMenu" type="button"
               class="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
               <span class="sr-only">Open main menu</span>
               <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
               </svg>
            </button>
         </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="openMenu" class="md:hidden border-t border-gray-200 bg-white shadow-lg">
         <ul class="flex flex-col font-medium p-4 space-y-1">
            <li><a href="#" class="block py-2 px-3 text-white bg-blue-600 rounded">Home</a></li>
            <li><a href="#" class="block py-2 px-3 text-gray-700 rounded hover:bg-gray-100">About</a></li>
         </ul>
      </div>
   </nav>
</template>
