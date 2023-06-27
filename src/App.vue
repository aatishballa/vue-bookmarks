<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen w-screen">
    <app-header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped></style>
