<!-- eslint-disable vue/require-explicit-emits -->
<template>
  <div class="my-4">
    <input
      class="w-full input px-4 py-2 rounded-full bg-neutral-200 text-black placeholder-grey-500 focus:outline-none focus:ring-2 focus:ring-primary"
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
