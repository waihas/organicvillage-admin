<template>
    <div class="container px-6 mx-auto grid">
        <template v-if="loading">
            <LoadingSpinner></LoadingSpinner>
        </template>

        <template v-else-if="order">
            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Edit order #{{code}}
                <router-link
                    :to="{ name: 'orders.index' }"
                    class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-white transition-colors duration-150 bg-transparent hover:bg-primary-600 border-2 border-primary-600 rounded-lg active:bg-primary-600 focus:outline-none focus:shadow-outline-primary ml-2">
                    <span>Back</span>
                </router-link>
            </h2>

            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Order information
            </h4>
            <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Total *
                    </span>
                    <div class="relative text-gray-500 focus-within:text-primary-600 dark:focus-within:text-primary-400">
                        <input
                            class="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray form-input"
                            placeholder="500 (without currency symbol i.e. DH)"
                            v-model="order.total"
                            type="number"
                        />
                        <div class="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12.236 8.433c-1.084-.563-.955-1.54.665-1.634 1.732-.102 3.512.594 5.148 1.171l1.104-5.021c-1.527-.464-2.898-.737-4.153-.881v-2.068h-5v2.364c-3.326.969-4.792 3.47-4.792 5.816 0 5.245 5.964 6.138 7.513 6.858 1.38.618 1.215 1.526-.022 1.805-1.969.449-4.807-.743-6.357-1.345l-1.342 4.857c1.635.845 3.344 1.374 5 1.618v2.027h5v-2.236c2.932-.784 5.005-2.806 5-5.944 0-4.631-4.717-5.96-7.764-7.387zm.764 11.688v1.879h-1v-1.826c-1.581.012-3.234-.294-4.64-.88l.321-1.162c2.26.77 4.036.978 5.458.655 3.025-.685 3.608-4.13.41-5.562-1.809-.843-6.349-1.39-6.349-5.045 0-2.103 1.692-3.89 4.799-4.254v-1.926h1v1.863c1.123-.02 2.391.121 3.808.479l-.225 1.022c-1.176-.358-2.503-.632-3.799-.555-3.716.218-4.297 3.924-1.43 5.411 3.179 1.497 6.655 2.423 6.655 5.602.005 2.699-2.277 4.027-5.008 4.299z"/>
                            </svg>
                        </div>
                    </div>
                    <span v-if="errors.total" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.total}}
                    </span>
                </label>

                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Gammes (NOT ALLOWED TO BE EDITED YET)
                    </span>
                    <select
                        v-model="order.gammes"
                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-multiselect focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray"
                        multiple
                    >
                        <option v-for="gamme in gammes" :key="gamme.uuid" :value="gamme.uuid" :selected="order?.gammes?.includes(gamme.uuid)">
                            {{gamme.name}}
                        </option>
                    </select>
                    <span v-if="errors.gammes" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.gammes}}
                    </span>
                </label>

                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Products (NOT ALLOWED TO BE EDITED YET)
                    </span>
                    <select
                        v-model="order.products"
                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-multiselect focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray"
                        multiple
                    >
                        <option v-for="product in products" :key="product.uuid" :value="product.uuid" :selected="order?.products?.includes(product.uuid)">
                            {{product.name}}
                        </option>
                    </select>
                    <span v-if="errors.products" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.products}}
                    </span>
                </label>
            </div>

            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Client information
            </h4>
            <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Name *
                    </span>
                    <input
                        v-model="order.client_name"
                        class="block w-full mt-1 text-sm border-red-600 dark:text-gray-300 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red form-input"
                        placeholder="Jane Doe"
                    />
                    <span v-if="errors.client_name" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.client_name}}
                    </span>
                </label>

                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Phone *
                    </span>
                    <input
                        v-model="order.client_phone"
                        class="block w-full mt-1 text-sm border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input"
                        placeholder="06 00 00 00 00"
                    />
                    <span v-if="errors.client_phone" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.client_phone}}
                    </span>
                </label>

                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        City *
                    </span>
                    <select
                        v-model="order.client_city"
                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-multiselect focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray">
                        <option v-for="city in cities" :key="city.uuid" :value="city.uuid" :selected="city.uuid == order.client_city">
                            {{city.name}}    
                        </option>
                    </select>
                    <span v-if="errors.client_city" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.client_city}}
                    </span>
                </label>

                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Street
                    </span>
                    <input
                        v-model="order.client_street"
                        class="block w-full mt-1 text-sm border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input"
                        placeholder="Rue Massira"
                    />
                    <span v-if="errors.client_street" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.client_street}}
                    </span>
                </label>
                
                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">
                        Address *
                    </span>
                    <input
                        v-model="order.client_address"
                        class="block w-full mt-1 text-sm border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input"
                        placeholder="Floor 3, Door 2.."
                    />
                    <span v-if="errors.client_address" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.client_address}}
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

        this.code = params.code;
    },
    components: {
        LoadingSpinner,
        RecordNotFound,
    },
    data() {
        return {
            code: null,
            loading: false,
            order: {
                total: null,
                products: null,
                gammes: null,
                client_name: null,
                client_phone: null,
                client_city: null,
                client_street: null,
                client_address: null,
            },
            errors: {
                total: null,
                products: null,
                gammes: null,
                client_name: null,
                client_phone: null,
                client_city: null,
                client_street: null,
                client_address: null,
            },
        }
    },
    mounted() {
        this.loadOrder();
        this.$store.dispatch('fetchProducts', 1, 100);
        this.$store.dispatch('fetchGammes', 1, 100);
        this.$store.dispatch('fetchCities', 1, 100);
    },
    computed: {
        products() {
            return this.$store.getters.getProducts;
        },
        gammes() {
            return this.$store.getters.getGammes;
        },
        cities() {
            return this.$store.getters.getCities;
        },
    },
    methods: {
        loadOrder() {
            this.loading = true;
            axios.get(`orders/${this.code}/show`)
                .then(res => {
                    this.order.total = res.data.data.total;
                    this.order.products = res.data.data.items.filter((i) => { return i.type == 'product' }).map((i) => { return i.uuid });
                    this.order.gammes = res.data.data.items.filter((i) => { return i.type == 'gamme' }).map((i) => { return i.uuid });
                    this.order.client_name = res.data.data.user.name;
                    this.order.client_phone = res.data.data.user.phone;
                    this.order.client_city = res.data.data.user.city_uuid;
                    this.order.client_street = res.data.data.user.street;
                    this.order.client_address = res.data.data.user.address;
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => { this.loading = false; })
        },
        async update() {
            // if (!this.order.total) {
            //     return this.errors.total = 'The name is required.';
            // } else if (!this.gamme.price) {
            //     return this.errors.price = 'The price is required.';
            // } else if (this.products.length == 0) {
            //     return this.errors.products = "At least one product should be added.";
            // } else if (this.gamme.price < this.gamme.discount_price) {
            //     return this.errors.discount_price = `The discount price should be smaller than ${this.gamme.price}.`;
            // } else {
            //     this.products.forEach(product => {
            //         if (!product.name) {
            //             return this.errors.products = "The name is required.";
            //         }
            //     });
            // }

            // let data = {
            //     name: this.gamme.name,
            //     description: this.gamme.description,
            //     price: this.gamme.price,
            //     discount_price: this.gamme.discount_price,
            //     image: this.gamme.image,
            //     products: this.products
            // }

            // await this.$store.dispatch("updateOrder", { code: this.code, data: data })
            //     .then((isUpdated) => {
            //         if(isUpdated) {
            //             helpers.showAlert('success', 'Congratulations!', 'The order has been updated successfully.', false, 2000)
            //             this.$router.push({ name: 'orders.index' })
            //         }
            //     })
            //     .catch(err => {
            //         console.log(err)
            //         if (err.response?.data?.errors?.name) {
            //             this.errors.name = err.response.data.errors.name[0];
            //         }
            //         if (err.response?.data?.errors?.description) {
            //             this.errors.description = err.response.data.errors.description[0];
            //         }
            //         if (err.response?.data?.errors?.image) {
            //             this.errors.image = err.response.data.errors.image[0];
            //         }
            //         if (err.response?.data?.errors?.price) {
            //             this.errors.price = err.response.data.errors.price[0];
            //         }
            //         if (err.response?.data?.errors?.products) {
            //             this.errors.products = err.response.data.errors.products;
            //         }
            //         helpers.showAlert('error', 'Invalid data!', '', false, 500);
            //     })
        }
    }
}
</script>