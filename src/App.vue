<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

import { useAuthStore } from './modules/auth/stores/authStore';

const authStore = useAuthStore();

onMounted(async() => {
  try {
    
    await authStore.fetchUser();

    console.log(authStore.user);
    
  } catch (error) {
    console.log(error);    
  }
});

</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
