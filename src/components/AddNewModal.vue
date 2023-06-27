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
        <div class="tabs tabs-boxed w-full flex">
          <a
            :class="getClasses('bookmark')"
            @click="activeTab='bookmark'"
          >
            Bookmark
          </a> 
          <a
            :class="getClasses('category')"
            @click="activeTab='category'"
          >
            Category
          </a> 
        </div>
    
        <div
          v-if="activeTab === 'bookmark'"
          class="py-4"
        >
          <input
            class="input input-bordered w-full mb-2"
            placeholder="Title"
          >

          <input
            class="input input-bordered w-full mb-2"
            placeholder="Url"
          >

          <select class="select select-bordered w-full mb-2">
            <option
              disabled
              selected
            >
              Tags
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>

          <select class="select select-bordered w-full">
            <option
              disabled
              selected
            >
              Group
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
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

import { ref } from "vue";

const activeTab = ref('bookmark')




const getClasses = (tab: string) => {
  const defaultClass = 'tab flex-1'
  return tab === activeTab.value ? `${defaultClass} tab-active` : `${defaultClass}`
}

</script>

<style scoped>

</style>