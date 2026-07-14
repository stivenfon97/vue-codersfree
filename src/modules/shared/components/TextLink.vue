<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink class="text-sm font-medium text-green-600 hover:underline dark:text-green-500">
        <slot></slot>
    </RouterLink>
</template>