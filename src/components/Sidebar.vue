<template>
  <aside
    class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
    <div class="py-4 text-gray-500 dark:text-gray-400">
      <router-link class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="/">
        OrganicVillage
      </router-link>
      <ul class="mt-12">
        <li class="relative space-y-2 px-6 py-1">
          <router-link exact-active-class="bg-primary-400 text-white"
            class="inline-flex items-center w-full text-sm font-medium transition duration-200 ease-in hover:bg-primary-500 hover:text-white  py-2 px-2 rounded-lg "
            :to="{name: 'overview'}">
            <!-- <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
              </path>
            </svg> -->
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span class="ml-4">Overview</span>
          </router-link>
          <router-link exact-active-class="bg-primary-400 text-white"
            class="inline-flex items-center w-full text-sm font-medium transition duration-200 ease-in hover:bg-primary-500 hover:text-white  py-2 px-2 rounded-lg "
            :to="{name: 'products.index'}">
            <!-- <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
              </path>
            </svg> -->
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
            </svg>
            <span class="ml-4">Products</span>
          </router-link>
          <router-link exact-active-class="bg-primary-400 text-white"
            class="inline-flex items-center w-full text-sm font-medium transition duration-200 ease-in hover:bg-primary-500 hover:text-white  py-2 px-2 rounded-lg "
            :to="{name: 'gammes.index'}">
            <!-- <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
              </path>
            </svg> -->
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            <span class="ml-4">Gammes</span>
          </router-link>
          <router-link exact-active-class="bg-primary-400 text-white"
            class="inline-flex items-center w-full text-sm font-medium transition duration-200 ease-in hover:bg-primary-500 hover:text-white  py-2 px-2 rounded-lg "
            :to="{name: 'orders.index'}">
            <!-- <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
              </path>
            </svg> -->
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span class="ml-4">Orders</span>
          </router-link>
          <router-link exact-active-class="bg-primary-400 text-white"
            class="inline-flex items-center w-full text-sm font-medium transition duration-200 ease-in hover:bg-primary-500 hover:text-white  py-2 px-2 rounded-lg "
            :to="{name: 'tracking.index'}">
            <!-- <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
              </path>
            </svg> -->
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span class="ml-4">Tracking</span>
          </router-link>
          <!-- <router-link exact-active-class="bg-primary-400 text-white"
            class="inline-flex items-center w-full text-sm font-medium transition duration-200 ease-in hover:bg-primary-500 hover:text-white  py-2 px-2 rounded-lg "
            :to="{name: 'orders.index'}">
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span class="ml-4">Webmail</span>
          </router-link>
          <router-link exact-active-class="bg-primary-400 text-white"
            class="inline-flex items-center w-full text-sm font-medium transition duration-200 ease-in hover:bg-primary-500 hover:text-white  py-2 px-2 rounded-lg "
            :to="{name: 'orders.index'}">
            <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span class="ml-4">Marketing</span>
          </router-link> -->
        </li>
        <li class="relative px-6 py-3">
          <button
            class="px-3 inline-flex items-center justify-between w-full text-sm font-medium transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            v-on:click="togglePagesMenu" aria-haspopup="true">
            <span class="inline-flex items-center">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                </path>
              </svg>
              <span class="ml-4">Settings</span>
            </span>
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <template v-if="isPagesMenuOpen">
            <ul x-transition:enter="transition-all ease-in-out duration-300"
              x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
              x-transition:leave="transition-all ease-in-out duration-300"
              x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
              class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
              aria-label="submenu">
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.index' }">
                  General
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.cities.index' }">
                  Cities
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.delivery' }">
                  Delivery
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.headscripts' }">
                  Head scripts
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.pagetext' }">
                  Page text
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.socialmedia' }">
                  Social media
                </router-link>
              </li>
            </ul>
          </template>
        </li>
      </ul>
      <!-- <div class="px-6 my-6">
        <button
          class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
          Create account
          <span class="ml-2" aria-hidden="true">+</span>
        </button>
      </div> -->
    </div>
  </aside>

  <!-- Mobile Sidebar -->
  <div v-if="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
    x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0"
    class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
    v-on:click="closeSideMenu"></div>
  <aside class="fixed inset-y-0 z-20 flex-shrink-0 w-96 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
    v-if="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
    x-transition:enter-start="opacity-0 transform -translate-x-20" x-transition:enter-end="opacity-100"
    x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0 transform -translate-x-20" @keydown.escape="closeSideMenu">
    <div class="py-4 text-gray-500 dark:text-gray-400">
      <router-link class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" to="#">
        OrganicVillage
      </router-link>
      <ul>
        <li class="relative px-6 py-3">
          <router-link active-class="bg-primary-200"
            class="inline-flex items-center w-full text-sm font-medium transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :to="{name: 'overview'}">
            <!-- <component :is="HomeIcon" class="flex-shrink-0 h-6 w-6" aria-hidden="true" /> -->
            <span class="ml-4">Overview</span>
          </router-link>
        </li>
        <li class="relative px-6 py-3">
          <router-link active-class="bg-primary-200"
            class="inline-flex items-center w-full text-sm font-medium transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :to="{name: 'products.index'}">
            <!-- <component :is="HomeIcon" class="flex-shrink-0 h-6 w-6" aria-hidden="true" /> -->
            <span class="ml-4">Products</span>
          </router-link>
        </li>
        <li class="relative px-6 py-3">
          <router-link active-class="bg-primary-200"
            class="inline-flex items-center w-full text-sm font-medium transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :to="{name: 'gammes.index'}">
            <!-- <component :is="HomeIcon" class="flex-shrink-0 h-6 w-6" aria-hidden="true" /> -->
            <span class="ml-4">Gammes</span>
          </router-link>
        </li>
        <li class="relative px-6 py-3">
          <router-link active-class="bg-primary-200"
            class="inline-flex items-center w-full text-sm font-medium transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :to="{name: 'orders.index'}">
            <!-- <component :is="HomeIcon" class="flex-shrink-0 h-6 w-6" aria-hidden="true" /> -->
            <span class="ml-4">Orders</span>
          </router-link>
        </li>
        <li class="relative px-6 py-3">
          <router-link active-class="bg-primary-200"
            class="inline-flex items-center w-full text-sm font-medium transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :to="{name: 'tracking.index'}">
            <!-- <component :is="HomeIcon" class="flex-shrink-0 h-6 w-6" aria-hidden="true" /> -->
            <span class="ml-4">Tracking</span>
          </router-link>
        </li>
        <!-- <li class="relative px-6 py-3">
          <router-link active-class="bg-primary-200"
            class="inline-flex items-center w-full text-sm font-medium transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :to="`/somewhere`">
            <span class="ml-4">Webmail</span>
          </router-link>
        </li>
        <li class="relative px-6 py-3">
          <router-link active-class="bg-primary-200"
            class="inline-flex items-center w-full text-sm font-medium transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            :to="`/somewhere`">
            <span class="ml-4">Marketing</span>
          </router-link>
        </li> -->
        <li class="relative px-6 py-3">
          <button
            class="inline-flex items-center justify-between w-full text-sm font-medium transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            v-on:click="togglePagesMenu" aria-haspopup="true">
            <span class="inline-flex items-center">
              <svg class="w-5 h-5" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z">
                </path>
              </svg>
              <span class="ml-4">Settings</span>
            </span>
            <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <div v-if="isPagesMenuOpen">
            <ul x-transition:enter="transition-all ease-in-out duration-300"
              x-transition:enter-start="opacity-25 max-h-0" x-transition:enter-end="opacity-100 max-h-xl"
              x-transition:leave="transition-all ease-in-out duration-300"
              x-transition:leave-start="opacity-100 max-h-xl" x-transition:leave-end="opacity-0 max-h-0"
              class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 dark:text-gray-400 dark:bg-gray-900"
              aria-label="submenu">
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.index' }">
                  General
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.cities.index' }">
                  Cities
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.delivery' }">
                  Delivery
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.headscripts' }">
                  Head scripts
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.pagetext' }">
                  Page text
                </router-link>
              </li>
              <li class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
                <router-link class="w-full" :to="{ name: 'settings.socialmedia' }">
                  Social media
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- <div class="px-6 my-6">
        <button
          class="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
          Create account
          <span class="ml-2" aria-hidden="true">+</span>
        </button>
      </div> -->
    </div>
  </aside>
</template>

<script>

export default {
    props: ['isSideMenuOpen'],
    data() {
        return {
            isPagesMenuOpen: false,
            pages: [
              {
                name: 'Dashboard',
                // icon: HomeIcon,
                to: ''
              },
              {
                name: 'Buttons',
                // icon: CursorClickIcon,
                to: 'buttons'
              },
              {
                name: 'Cards',
                // icon: CollectionIcon,
                to: 'cards'
              },
              {
                name: 'Charts',
                // icon: ChartPieIcon,
                to: 'charts'
              },
              {
                name: 'Forms',
                // icon: ClipboardListIcon,
                to: 'forms'
              },
              {
                name: 'Modals',
                // icon: DuplicateIcon,
                to: 'modals'
              },
              {
                name: 'Tables',
                // icon: MenuIcon,
                to: 'tables'
              }
            ]
        }
    },
    methods: {
        togglePagesMenu() {
            this.isPagesMenuOpen = !this.isPagesMenuOpen;
        },
        closeSideMenu() {
            return this.$emit('closeSideMenu');
        }
    }
}
</script>
