<!-- eslint-disable vue/require-explicit-emits -->
<template>
  <div class="my-4">
    <input
      class="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-xl"
      type="text"
      placeholder="Search"
      aria-label="Search"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" 
    >
  </div>
</template>

<script setup lang="ts">

defineProps<{
  modelValue: string;
}>();

defineEmits<{
  'update:modelValue': [(value: string) => void]
}>();

</script>

<style scoped></style>
