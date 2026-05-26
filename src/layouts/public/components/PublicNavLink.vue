<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router'; 
   
   const props = defineProps({
      to: [String, Object]
   });

   const route = useRoute();

   const isActive = computed(() => {

      if (!props.to) return false;

      if (typeof props.to === 'string') {
         return route.path === props.to;
      }
      
      if (props.to.name) {
         return route.name === props.to.name;
      }

      if (props.to.path) {
         return route.path === props.to.path;
      }

      return false;
   });

</script>

<template>
   <RouterLink 
      :to="to"
      :class="{
         'block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0': isActive,
         'block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent': !isActive
      }"
   >
      <slot></slot>
   </RouterLink>
</template>