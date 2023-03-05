<template>
  <div class="flex flex-col">
    <!-- Preview Card : What's happening -->
    <SideBarRightPreviewCard :title="`What's is happening`">
      <SideBarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ whatsHappening.title }}
          </h2>
          <p> {{ whatsHappening.count }}</p>
        </div>
      </SideBarRightPreviewCardItem>
    </SideBarRightPreviewCard>
    <!-- End Preview Card : What's happening -->

    <!-- Preview Card : Who to follow -->
    <SideBarRightPreviewCard :title="'Who to follow'">
      <SideBarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex flex-row">
            <img class="h-10 w-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
              <p class="text-xs text-gray-400">
                {{ whoToFollow.handle }}
              </p>
            </div>
          </div>
          <div class="flex h-full">
            <button class="px-4 py-2 rounded-full font-bold text-xs text-white dark:text-dark bg-black dark:bg-white">
              Follow
            </button>
          </div>
        </div>
      </SideBarRightPreviewCardItem>
    </SideBarRightPreviewCard>
    <!-- End Preview Card : Who to follow -->

  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: 'SpaceX',
    count: '18.8 Tweets'
  },
  {
    title: 'SpaceX',
    count: '18.8 Tweets'
  },
  {
    title: 'SpaceX',
    count: '18.8 Tweets'
  },
])
const whoToFollowItems = ref([
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200'
  },
  {
    name: 'Joe Biden',
    handle: '@JoeBiden',
    image: 'https://picsum.photos/200/200'
  },
])
</script>

