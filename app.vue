<template>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">

      <!-- App -->
      <div v-if="false" class="min-h-screen">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!-- Left sidebar -->
          <div class="hidden min-h-screen md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SideBarLeft />
            </div>
          </div>
          <!-- End Left sidebar -->

          <!-- Main content -->
          <main class="col-span-12 md:col-span-8 xl:col-span-6  ">
            <router-view />
          </main>
          <!-- End Main content -->

          <!-- Right content -->
          <div class="hidden min-h-screen md:block xs-col-span-1 xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SideBarRight />
            </div>
          </div>
          <!-- End Right content -->
        </div>
      </div>

      <AuthPage v-else />
    </div>
  </div>
</template>
<script setup>
const darkMode = ref(false)
</script>
