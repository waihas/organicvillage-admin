<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar :isSideMenuOpen="isSideMenuOpen" @close-side-menu="isSideMenuOpen = false" />

        <div class="flex flex-col flex-1">
            <Navigation @open-side-menu="isSideMenuOpen = !isSideMenuOpen" />
            <div class="h-full overflow-y-auto">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navigation from '@/components/Navigation.vue'

export default {
    components: {
        Sidebar,
        Navigation
    },
    data() {
        return {
            isSideMenuOpen: false,
        }
    }
}
</script>