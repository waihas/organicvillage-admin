<template>
    <div class="container px-6 mx-auto grid">
        <template v-if="loading">
            <LoadingSpinner></LoadingSpinner>
        </template>

        <template v-else-if="city">
            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                City: {{city?.name}}
                <router-link
                    :to="{ name: 'settings.cities.index' }"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-white transition-colors duration-150 bg-transparent hover:bg-primary-600 border-2 border-primary-600 rounded-lg active:bg-primary-600 focus:outline-none focus:shadow-outline-primary ml-2">
                    <span>Back</span>
                </router-link>
            </h2>

            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Information
            </h4>

            <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Name *</span>
                    <input
                        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                        v-model="city.name"
                    />
                    <span v-if="errors.name" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.name}}
                    </span>
                </label>
            </div>

            <div class="flex justify-end">
                <button @click="update" class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/>
                    </svg>
                    <span>Update</span>
                </button>
            </div>

        </template>

        <template v-else>
            <RecordNotFound></RecordNotFound>
        </template>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import LoadingSpinner from '@/components/LoadingSpinner';
import RecordNotFound from '@/components/RecordNotFound';
import axios from '@/api/axios';
import helpers from '@/common/helpers';

export default {
    created() {
        const route = useRoute();
        const params = route.params;

        this.uuid = params.uuid;
    },
    components: {
        LoadingSpinner,
        RecordNotFound,
    },
    data() {
        return {
            uuid: null,
            loading: false,
            city: {
                name: null,
            },
            errors: {
                name: null,
            },
        }
    },
    mounted() {
        this.loadCity();
    },
    methods: {
        loadCity() {
            this.loading = true;
            axios.get(`cities/${this.uuid}/show`)
                .then(res => {
                    this.city.name =res.data.data.name;
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => { this.loading = false; })
        },
        async update() {
            if (!this.city.name) {
                return this.errors.name = 'The name is required.';
            }

            let data = {
                name: this.city.name,
            }

            await this.$store.dispatch("updateCity", { uuid: this.uuid, data: data })
                .then((isUpdated) => {
                    if(isUpdated) {
                        helpers.showAlert('success', 'Congratulations!', 'The city has been updated successfully.', false, 2000)
                        this.$router.push({ name: 'settings.cities.index' })
                    }
                })
                .catch(err => {
                    console.log(err)
                    if (err.response?.data?.errors?.name) {
                        this.errors.name = err.response.data.errors.name[0];
                    }
                    helpers.showAlert('error', 'Invalid data!', '', false, 500);
                })
        }
    }
}
</script>