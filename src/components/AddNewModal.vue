<template>
  <div>
    <!-- Open the modal using ID.showModal() method -->
    <dialog
      id="my_modal_2"
      class="modal"
    >
      <form
        method="dialog"
        class="modal-box bg-white"
      >
        <h3 class="font-bold text-lg">
          Hello!
        </h3>
        <p class="py-4">
          Press ESC key or click outside to close
        </p>
      </form>
      
      <form
        method="dialog"
        class="modal-backdrop"
      >
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>