<template>
  <a
    :href="bookmark.url"
    target="_blank"
    class="hover:shadow-lg transition-shadow  h-25 px-4 py-4 rounded-xl bg-neutral-200"
  >
    <div
      class="flex flex-col"
      style="height: 100%;"
    >
      <div class="flex-1 text-black mb-4">
        {{ bookmark.title }}
      </div>

      <div>
        <div
          v-for="(item, i) in bookmark.tags"
          :key="i"
          class="badge badge-primary mr-2"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Bookmark } from "@/types/response.d.ts";

defineProps<{
  bookmark: Bookmark
}>();

</script>

<style lang="scss" scoped></style>
