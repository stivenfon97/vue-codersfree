<script setup>
import { RouterView } from 'vue-router';

import AdminNav from './components/AdminNav.vue';
import AdminAside from './components/AdminAside.vue';
</script>

<template>

    <AdminNav />

    <AdminAside />

    <div class="p-4 sm:ml-64 mt-14">
        <div class="p-4 border-1 border-default border-dashed rounded-base">

            <RouterView />

        </div>
    </div>

</template>