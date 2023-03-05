<template>
  <div class="h-screen flex flex-col">
    <div class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20"
         :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <LogoTwitter/>
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-3">
      <SideBarLeftTab active>
        <template v-slot:icon>
          <HomeIcon/>
        </template>
        <template v-slot:name>
          Home
        </template>
      </SideBarLeftTab>

      <SideBarLeftTab active>
        <template v-slot:icon>
          <HashtagIcon/>
        </template>
        <template v-slot:name>
          Explore
        </template>
      </SideBarLeftTab>

      <SideBarLeftTab active>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name>
          Notification
        </template>
      </SideBarLeftTab>

      <SideBarLeftTab active>
        <template v-slot:icon>
          <InboxIcon/>
        </template>
        <template v-slot:name>
          Messages
        </template>
      </SideBarLeftTab>

      <SideBarLeftTab active>
        <template v-slot:icon>
          <BookmarkIcon/>
        </template>
        <template v-slot:name>
          Bookmarks
        </template>
      </SideBarLeftTab>

      <SideBarLeftTab active>
        <template v-slot:icon>
          <DocumentTextIcon/>
        </template>
        <template v-slot:name>
          Lists
        </template>
      </SideBarLeftTab>

      <SideBarLeftTab active>
        <template v-slot:icon>
          <UsersIcon/>
        </template>
        <template v-slot:name>
          Profile
        </template>
      </SideBarLeftTab>

      <SideBarLeftTab active>
        <template v-slot:icon>
          <DotsCircleHorizontalIcon />
        </template>
        <template v-slot:name>
          More
        </template>
      </SideBarLeftTab>
    </div>
  </div>

</template>

<script setup>
import {HomeIcon} from '@heroicons/vue/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UsersIcon,
  DotsCircleHorizontalIcon
} from '@heroicons/vue/outline'

const {defaultTransition} = useTailwindConfig()
</script>

<style scoped>

</style>