<template>
  <div
    class="bg-gradient-to-r from-primary to-accent h-16 rounded-full flex justify-center items-center text-white font-semibold"
  >
    <div>
      {{ category.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from "@/types/response";

defineProps<{
  category: Category;
}>();
</script>

<style scoped>

</style>
