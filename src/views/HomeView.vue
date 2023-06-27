<template>
  <div class="mx-auto w-8/12 py-2 px-2">
    <search-bar
      v-model="searchValue"
    />
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
    >
      <bookmark-card
        v-for="(item,i) in filteredBookmarks"
        :key="i"
        :bookmark="item"
      />
    </section>

    <add-new-button />
    <add-new-modal />
  </div>
</template>
<script setup lang="ts">
import AddNewButton from "@/components/AddNewButton.vue";
import AddNewModal from "@/components/AddNewModal.vue";
import SearchBar from "@/components/SeachBar.vue";
import BookmarkCard from "@/components/BookmarkCard.vue"
import type {Bookmark} from "@/types/response.d.ts"
import { ref, computed } from "vue";
import { useBookmarkStore } from "@/stores/Bookmark";
import { storeToRefs } from "pinia";

const $bookmarkStore = useBookmarkStore()

const searchValue = ref("");
const { bookmarks } = storeToRefs($bookmarkStore)

$bookmarkStore.fetchBookmarks()

const filteredBookmarks = computed(() => {
  return bookmarks.value.filter((item: Bookmark) => {
    return item.title.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>

