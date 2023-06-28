<template>
  <div class="w-full navbar sticky top-0 bg-primary shadow-md text-white font-poppins">
    <div class="flex-1 px-2 mx-2">
      <Icon
        size="32"
        class="mr-2"
      >
        <CollectionsBookmarkSharp />
      </Icon>

      Bookmark Manager
    </div>
    <div class="flex-none hidden lg:block">
      <!-- <ul class="menu menu-horizontal">
        <li><a>My Account</a></li>
      </ul> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@vicons/utils';
import { CollectionsBookmarkSharp } from '@vicons/material';
</script>
