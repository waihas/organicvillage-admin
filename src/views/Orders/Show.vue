<template>
    <div class="container px-6 mx-auto grid">
        <template v-if="loading">
            <LoadingSpinner></LoadingSpinner>
        </template>

        <template v-else-if="order">
            <h4 class="text-lg mt-4 font-semibold text-gray-600 dark:text-gray-300">
                <router-link
                    :to="{ name: 'orders.index' }"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-white transition-colors duration-150 bg-transparent hover:bg-primary-600 border-2 border-primary-600 rounded-lg active:bg-primary-600 focus:outline-none focus:shadow-outline-primary ml-2">
                    <span>Back</span>
                </router-link>
                <router-link
                    :to="{ name: 'orders.edit', params: { code: code } }"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 hover:bg-primary-700 border-2 border-primary-600 rounded-lg active:bg-primary-600 focus:outline-none focus:shadow-outline-primary">
                    <span>Edit</span>
                </router-link>
                <template v-if="order.status == 'new'">
                    <button
                        @click="accepted"
                        class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-lg active:bg-green-600 focus:outline-none focus:shadow-outline-primary mr-3"
                    >Accept order</button>
                    <button
                        @click="declined"
                        class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 hover:bg-red-700 border-2 border-red-600 rounded-lg active:bg-red-600 focus:outline-none focus:shadow-outline-primary mr-3"
                    >Decline order</button>
                </template>
                <button
                    v-else-if="order.status == 'declined'"
                    @click="newed"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 hover:bg-blue-700 border-2 border-blue-600 rounded-lg active:bg-blue-600 focus:outline-none focus:shadow-outline-primary mr-3"
                >Make as new</button>
                <button
                    v-else-if="order.status == 'accepted'"
                    @click="delivering"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 hover:bg-blue-700 border-2 border-blue-600 rounded-lg active:bg-blue-600 focus:outline-none focus:shadow-outline-primary mr-3"
                >In delivery</button>
                <button
                    v-else-if="order.status == 'delivering'"
                    @click="delivered"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 hover:bg-blue-700 border-2 border-blue-600 rounded-lg active:bg-blue-600 focus:outline-none focus:shadow-outline-primary mr-3"
                >Order is delivered</button>
            </h4>

            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200 truncate">
                #{{order.code}}
                <div class="text-sm mt-2">
                    <span v-if="order.status == 'new'" class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        New
                    </span>
                    <span v-else-if="order.status == 'accepted'" class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full dark:text-white dark:bg-purple-600">
                        Accepted
                    </span>
                    <span v-else-if="order.status == 'declined'" class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                        Declined
                    </span>
                    <span v-else-if="order.status == 'delivering'" class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-700">
                        Delivering
                    </span>
                    <span v-else-if="order.status == 'delivered'" class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                        Delivered
                    </span>
                </div>
            </h2>

            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Client information
            </h4>
            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Name
                        </p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            {{order?.user?.name}}
                        </p>
                    </div>
                </div>
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                        <svg class="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Phone
                        </p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            {{order?.user?.phone}}
                        </p>
                    </div>
                </div>
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M13 2h2v2h1v19h1v-15l6 3v12h1v1h-24v-1h1v-11h7v11h1v-19h1v-2h2v-2h1v2zm8 21v-2h-2v2h2zm-15 0v-2h-3v2h3zm8 0v-2h-3v2h3zm-2-4v-13h-1v13h1zm9 0v-1h-2v1h2zm-18 0v-2h-1v2h1zm4 0v-2h-1v2h1zm-2 0v-2h-1v2h1zm9 0v-13h-1v13h1zm7-2v-1h-2v1h2zm-18-1v-2h-1v2h1zm2 0v-2h-1v2h1zm2 0v-2h-1v2h1zm14-1v-1h-2v1h2zm0-2.139v-1h-2v1h2z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            City
                        </p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            {{order?.user?.city}}
                        </p>
                    </div>
                </div>
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M13 23l-9.983-.014v-9.979l8.974-7.995c1.124.999 2.25 1.998 3.378 2.998l2.255 1.999c1.127.999 2.252 1.992 3.376 2.991v10l-5.993-.014-.007-4.986h-2v5zm6-2l.019-7.121-7.028-6.193-6.991 6.218v7.096h6v-5h6v5h2zm-10-5v3h-2v-3h2zm3-15l12 10.654-1.328 1.494-10.672-9.488-10.672 9.488-1.328-1.494 12-10.654z"/>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Address
                        </p>
                        <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            {{order?.user?.street}} - {{order?.user?.address}}
                        </p>
                    </div>
                </div>
            </div>

            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Total
            </h4>
            <div class="px-4 py-3 mb-8 bg-white rounded-lg dark:bg-gray-800">
                <p class="text-gray-600 dark:text-gray-400">
                    {{order.total}} MAD
                </p>
            </div>

            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Items
            </h4>
            <div class="grid gap-6 mb-8 md:grid-cols-2">
                <div v-for="item in order.items" :key="item.uuid" :class="item.type == 'product' ? 'bg-white' : 'text-white bg-primary-600'" class="min-w-0 p-4 rounded-lg shadow-xs dark:bg-gray-800">
                    <div class="flex items-center">
                        <div class="relative hidden w-12 h-12 mr-3 rounded-full md:block">
                            <img
                                v-if="item.image"
                                class="object-cover w-full h-full rounded-full"
                                :src="item.image"
                                loading="lazy"
                            />
                            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p class="font-semibold">{{item.name}}</p>
                            <p :class="item.type == 'product' ? 'text-gray-600 dark:text-gray-400' : 'text-white'">
                                <span v-if="item.weight">{{item.weight}} | </span>
                                <span v-if="item.discount_price" class="font-semibold">{{item.discount_price}}</span>
                                <span v-else class="font-semibold">{{item.price}}</span> MAD | {{item.quantity}}x
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <button
                    @click="deleteOrder"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 hover:bg-red-700 border-2 border-red-600 rounded-lg active:bg-red-600 focus:outline-none focus:shadow-outline-primary"
                >Delete order</button>
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

        this.code = params.code;
    },
    components: {
        LoadingSpinner,
        RecordNotFound,
    },
    data() {
        return {
            code: null,
            order: null,
            loading: false,
        }
    },
    mounted() {
        this.loadOrder();
    },
    methods: {
        loadOrder() {
            this.loading = true;
            axios.get(`orders/${this.code}/show`)
                .then(res => {
                    this.order = res.data.data;
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => { this.loading = false; })
        },
        accepted() {
            this.$store.dispatch('acceptOrder', this.code)
            .then(() => {
                helpers.showAlert('success', 'Order accepted!');
                this.loadOrder();
            })
            .catch((err) => {
                helpers.showAlert('error', err?.response?.statusText)
            });
        },
        declined() {
            this.$store.dispatch('declineOrder', this.code)
            .then(() => {
                helpers.showAlert('success', 'Order declined!');
                this.loadOrder();
            })
            .catch((err) => {
                helpers.showAlert('error', err?.response?.statusText)
            });
        },
        newed() {
            this.$store.dispatch('renewOrder', this.code)
            .then(() => {
                helpers.showAlert('success', 'Order restored!');
                this.loadOrder();
            })
            .catch((err) => {
                helpers.showAlert('error', err?.response?.statusText)
            });
        },
        delivering() {
            this.$store.dispatch('deliveringOrder', this.code)
            .then(() => {
                helpers.showAlert('success', 'Order in delivery!');
                this.loadOrder();
            })
            .catch((err) => {
                helpers.showAlert('error', err?.response?.statusText)
            });
        },
        delivered() {
            this.$store.dispatch('deliveredOrder', this.code)
            .then(() => {
                helpers.showAlert('success', 'Order delivered!');
                this.loadOrder();
            })
            .catch((err) => {
                helpers.showAlert('error', err?.response?.statusText)
            });
        },
        deleteOrder() {
            helpers.showConfirmAlert('warning', 'Are you sure?', "After deleting an order, it can't be restored.", 'Delete', 'Cancel', () => {
                this.$store.dispatch('deleteOrder', this.code)
                    .then(() => {
                        helpers.showAlert('success', 'Order deleted successfully!');
                        this.$router.push({ name: 'orders.index' });
                    })
                    .catch((err) => {
                        helpers.showAlert('error', err?.response?.statusText)
                    });
            });
        },
    }
}
</script>