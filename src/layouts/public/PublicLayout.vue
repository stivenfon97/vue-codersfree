<script setup>
   import { RouterLink, RouterView } from 'vue-router'
import PublicNav from './components/PublicNav.vue';
import PublicFooter from './components/PublicFooter.vue';
</script>

<template>
   

   <PublicNav></PublicNav>

   <div class="max-w-7xl mx-auto p-4 pt-20">
      <RouterView></RouterView>
   </div>

   <PublicFooter></PublicFooter>


</template>