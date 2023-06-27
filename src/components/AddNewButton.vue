<template>
  <button
    class="btn btn-primary rounded-full absolute bottom-12 right-24 h-20 w-20"
    @click="showModal"
  >
    <Icon size="24">
      <Plus />
    </Icon>
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@vicons/utils'
import { Plus } from '@vicons/fa'

interface modalHtmlElement extends HTMLElement {
  showModal: () => void
}

function showModal() {
  const modal : modalHtmlElement | null = document.getElementById('my_modal_2') as modalHtmlElement | null
  modal?.showModal()
}

</script>


<style scoped>

</style>
