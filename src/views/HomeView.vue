<template>
  <div class="mx-auto lg:w-9/12 py-4 px-4">
    <search-bar
      v-model="searchValue"
    />

    <section class=" hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4">
      <category-card
        v-for="(item,i) in categories"
        :key="i"
        :category="item"
      />
    </section>
  
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
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
import CategoryCard from "@/components/CategoryCard.vue"
import type {Bookmark} from "@/types/response.d.ts"
import { ref, computed } from "vue";
import { useBookmarkStore } from "@/stores/Bookmark";
import { storeToRefs } from "pinia";

const $bookmarkStore = useBookmarkStore()

const searchValue = ref("");
const { bookmarks, categories } = storeToRefs($bookmarkStore)

$bookmarkStore.fetchBookmarks()
$bookmarkStore.fetchCategories()

const filteredBookmarks = computed(() => {
  return bookmarks.value.filter((item: Bookmark) => {
    return item.title.toLowerCase().includes(searchValue.value.toLowerCase())
  })
})
</script>

