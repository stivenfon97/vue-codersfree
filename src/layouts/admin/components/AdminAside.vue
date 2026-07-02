<script setup>
import { RouterLink } from 'vue-router';
import AdminNavLink from './AdminNavLink.vue';


const openSidebar = defineModel();

</script>


<template>
    <aside id="top-bar-sidebar" class="fixed top-0 left-0 z-40 w-64 h-full transition-transform sm:translate-x-0"
        :class="{
            '-translate-x-full': !openSidebar,
        }" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
            <a href="https://flowbite.com/" class="flex items-center ps-2.5 mb-5">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3" alt="Flowbite Logo" />
                <span class="self-center text-lg text-heading text">Flowbite</span>
            </a>
            <ul class="space-y-2 font-medium">
                <li>
                    <AdminNavLink :to="{ name: 'admin.dashboard' }">
                        <span class="inline-flex w-6 h-6 justify-center items-center">
                            <i class="fa-solid fa-gauge"></i>
                        </span>
                        <span class="ms-3">Dashboard</span>
                    </AdminNavLink>
                </li>
            </ul>
        </div>
    </aside>
</template>