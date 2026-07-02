<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>
    <RouterLink
        activeClass="bg-gray-100"
        class="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group">
        <slot></slot>

    </RouterLink>
</template>