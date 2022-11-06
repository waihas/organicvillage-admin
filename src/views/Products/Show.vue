<template>
    <div class="container px-6 mx-auto grid">
        <template v-if="loading">
            <LoadingSpinner></LoadingSpinner>
        </template>

        <template v-else-if="product">
            <h4 class="text-lg mt-4 font-semibold text-gray-600 dark:text-gray-300">
                <router-link
                    :to="{ name: 'products.index' }"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-white transition-colors duration-150 bg-transparent hover:bg-primary-600 border-2 border-primary-600 rounded-lg active:bg-primary-600 focus:outline-none focus:shadow-outline-primary ml-2">
                    <span>Back</span>
                </router-link>
                <button
                    v-if="product.status == 'deleted'"
                    @click="restore"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 hover:bg-primary-700 border-2 border-primary-600 rounded-lg active:bg-primary-600 focus:outline-none focus:shadow-outline-primary"
                >Restore</button>
                <button
                    v-else-if="product.status == 'pending' || product.status == 'rejected'"
                    @click="approve"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 hover:bg-primary-700 border-2 border-primary-600 rounded-lg active:bg-primary-600 focus:outline-none focus:shadow-outline-primary"
                >Approve</button>
                <router-link
                    v-else
                    :to="{ name: 'products.edit', params: { slug: slug } }"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 hover:bg-primary-700 border-2 border-primary-600 rounded-lg active:bg-primary-600 focus:outline-none focus:shadow-outline-primary">
                    <span>Edit</span>
                </router-link>
            </h4>

            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 truncate">
                {{product.name}}
                <div class="text-sm mt-2">
                    <span v-if="product.status == 'approved'" class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    Approved
                    </span>
                    <span v-else-if="product.status == 'pending'" class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                    Pending
                    </span>
                    <span v-else-if="product.status == 'deleted'" class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                    Deleted
                    </span>
                    <span v-else class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                    Rejected
                    </span>
                </div>
            </h2>

            <img v-if="product.image" :src="product.image" class="w-48 h-48 rounded-lg mb-5">
            
            <template v-if="product.description">
                <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                    Description
                </h4>
                <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        {{product.description}}
                    </p>
                </div>
            </template>

            <!-- Responsive cards -->
            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Performance
            </h4>
            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <!-- Card -->
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Total orders
                        </p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            {{product.total_orders_count}}
                        </p>
                    </div>
                </div>
                <!-- Card -->
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Total revenue
                        </p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            {{product.total_revenue}}
                        </p>
                    </div>
                </div>
                <!-- Card -->
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Monthly orders
                        </p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            {{product.monthly_orders_count}}
                        </p>
                    </div>
                </div>
                <!-- Card -->
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Monthly revenue
                        </p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            {{product.monthly_revenue}}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Cards with title -->
            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Prices
            </h4>
            <div class="grid gap-6 mb-8 md:grid-cols-2">
                <div v-for="price in product.prices" :key="price.uuid" class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <h4 class="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                        {{price.weight}}
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400">
                        {{price.price}} MAD
                    </p>
                </div>
                <!-- <div class="min-w-0 p-4 text-white bg-primary-600 rounded-lg shadow-xs">
                    <h4 class="mb-4 font-semibold">
                        Colored card
                    </h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Fuga, cum commodi a omnis numquam quod? Totam exercitationem
                        quos hic ipsam at qui cum numquam, sed amet ratione! Ratione,
                        nihil dolorum.
                    </p>
                </div> -->
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

        this.slug = params.slug;
    },
    components: {
        LoadingSpinner,
        RecordNotFound,
    },
    data() {
        return {
            slug: null,
            product: null,
            loading: false,
        }
    },
    mounted() {
        this.loadProduct();
    },
    methods: {
        loadProduct() {
            this.loading = true;
            axios.get(`products/${this.slug}/show`)
                .then(res => {
                    this.product = res.data.data;
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => { this.loading = false; })
        },
        restore() {
            this.$store.dispatch('restoreProduct', this.slug)
            .then(() => {
                helpers.showAlert('success', 'Product restored!');
                this.loadProduct();
            })
            .catch((err) => {
                helpers.showAlert('error', err?.response?.statusText)
            });
        },
        approve() {
            this.$store.dispatch('approveProduct', this.slug)
            .then(() => {
                helpers.showAlert('success', 'Product approved!');
                this.loadProduct();
            })
            .catch((err) => {
                helpers.showAlert('error', err?.response?.statusText)
            });
        }
    }
}
</script>