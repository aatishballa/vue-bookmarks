import { defineStore } from "pinia";
import $axios from "@/utils/axios";
import type { Bookmark, Category } from "@/types/response";

export const useBookmarkStore = defineStore("bookmark", {
  state: () => {
    return {
      bookmarks: [] as Bookmark[],
      categories: [] as Category[],
    }
  },
  actions: {
    async fetchBookmarks() {
      try {
        const response = await $axios.get('/bookmarks')
        console.log(response)
        this.bookmarks = response.data as Bookmark[];
      } catch (error: any) {
        throw new Error(error)
      }
    },
    async fetchBookmark(id: number) {
      try {
        const response = await $axios.get(`/bookmarks/${id}`)
        return response.data as Bookmark;
      } catch (error: any) {
        throw new Error(error)
      }
    },
    async addBookmark(bookmark: Bookmark) {
      try {
        const response = await $axios.post('/bookmarks', bookmark)
        this.bookmarks.push(response.data as Bookmark);
      } catch (error: any) {
        throw new Error(error)
      }
    },
    async deleteBookmark(id: number) {
      try {
        await $axios.delete(`/bookmarks/${id}`)
        this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id)
      } catch (error: any) {
        throw new Error(error)
      }
    },
    async addTagToBookmark(id: number, tag: string) {
      try {
        await $axios.post(`/bookmarks/${id}/tags`, { tag })
      } catch (error: any) {
        throw new Error(error)
      }
    },
    async fetchCategories() {
      try {
        const response = await $axios.get('/categories')
        this.categories = response.data as Category[];
      } catch (error: any) {
        throw new Error(error)
      }
    }
  },
});
