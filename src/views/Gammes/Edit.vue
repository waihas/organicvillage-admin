<template>
    <div class="container px-6 mx-auto grid">
        <template v-if="loading">
            <LoadingSpinner></LoadingSpinner>
        </template>

        <template v-else-if="gamme">
            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Gamme: {{gamme?.name}}
                <router-link
                    :to="{ name: 'gammes.index' }"
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
                        v-model="gamme.name"
                    />
                    <span v-if="errors.name" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.name}}
                    </span>
                </label>

                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Description</span>
                    <textarea
                        v-model="gamme.description"
                        class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray"
                        rows="2"
                    ></textarea>
                    <span v-if="errors.description" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.description}}
                    </span>
                </label>

                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Price *</span>
                    <div class="relative text-gray-500 focus-within:text-primary-600 dark:focus-within:text-primary-400">
                        <input
                            class="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray form-input"
                            placeholder="500 (without currency symbol i.e. DH)"
                            v-model="gamme.price"
                            type="number"
                        />
                        <div class="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12.236 8.433c-1.084-.563-.955-1.54.665-1.634 1.732-.102 3.512.594 5.148 1.171l1.104-5.021c-1.527-.464-2.898-.737-4.153-.881v-2.068h-5v2.364c-3.326.969-4.792 3.47-4.792 5.816 0 5.245 5.964 6.138 7.513 6.858 1.38.618 1.215 1.526-.022 1.805-1.969.449-4.807-.743-6.357-1.345l-1.342 4.857c1.635.845 3.344 1.374 5 1.618v2.027h5v-2.236c2.932-.784 5.005-2.806 5-5.944 0-4.631-4.717-5.96-7.764-7.387zm.764 11.688v1.879h-1v-1.826c-1.581.012-3.234-.294-4.64-.88l.321-1.162c2.26.77 4.036.978 5.458.655 3.025-.685 3.608-4.13.41-5.562-1.809-.843-6.349-1.39-6.349-5.045 0-2.103 1.692-3.89 4.799-4.254v-1.926h1v1.863c1.123-.02 2.391.121 3.808.479l-.225 1.022c-1.176-.358-2.503-.632-3.799-.555-3.716.218-4.297 3.924-1.43 5.411 3.179 1.497 6.655 2.423 6.655 5.602.005 2.699-2.277 4.027-5.008 4.299z"/>
                            </svg>
                        </div>
                    </div>
                    <span v-if="errors.price" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.price}}
                    </span>
                </label>

                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Discount price</span>
                    <div class="relative text-gray-500 focus-within:text-primary-600 dark:focus-within:text-primary-400">
                        <input
                            class="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray form-input"
                            placeholder="500 (without currency symbol i.e. DH)"
                            v-model="gamme.discount_price"
                            type="number"
                        />
                        <div class="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M12.236 8.433c-1.084-.563-.955-1.54.665-1.634 1.732-.102 3.512.594 5.148 1.171l1.104-5.021c-1.527-.464-2.898-.737-4.153-.881v-2.068h-5v2.364c-3.326.969-4.792 3.47-4.792 5.816 0 5.245 5.964 6.138 7.513 6.858 1.38.618 1.215 1.526-.022 1.805-1.969.449-4.807-.743-6.357-1.345l-1.342 4.857c1.635.845 3.344 1.374 5 1.618v2.027h5v-2.236c2.932-.784 5.005-2.806 5-5.944 0-4.631-4.717-5.96-7.764-7.387zm.764 11.688v1.879h-1v-1.826c-1.581.012-3.234-.294-4.64-.88l.321-1.162c2.26.77 4.036.978 5.458.655 3.025-.685 3.608-4.13.41-5.562-1.809-.843-6.349-1.39-6.349-5.045 0-2.103 1.692-3.89 4.799-4.254v-1.926h1v1.863c1.123-.02 2.391.121 3.808.479l-.225 1.022c-1.176-.358-2.503-.632-3.799-.555-3.716.218-4.297 3.924-1.43 5.411 3.179 1.497 6.655 2.423 6.655 5.602.005 2.699-2.277 4.027-5.008 4.299z"/>
                            </svg>
                        </div>
                    </div>
                    <span v-if="errors.discount_price" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.discount_price}}
                    </span>
                </label>

                <label class="block mt-4 text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Image URL</span>
                    <input
                        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                        v-model="gamme.image"
                    />
                    <span v-if="errors.image" class="text-xs text-red-600 dark:text-red-400">
                        {{errors.image}}
                    </span>
                    <img v-if="gamme.image" :src="gamme.image" class="w-48 h-48 mt-4 mx-auto rounded-lg" />
                </label>
            </div>

            <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Products
                <button @click="addProduct" class="flex items-center float-right justify-between px-4 text-sm font-medium leading-5 text-gray-600 transition-colors duration-150 bg-transparent border border-transparent rounded-lg focus:outline-none focus:shadow-outline-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
                    </svg>
                    <span class="hover:underline">Add</span>
                </button>
            </h4>
            <span v-if="errors.products" class="text-xs pb-3 text-red-600 dark:text-red-400">
                {{errors.products}}
            </span>
            <div v-for="(product, idx) in products" :key="idx" class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <button v-if="idx == (products.length - 1) && (idx != 0)" @click="removeProduct" class="flex items-center float-right justify-between pl-4 text-sm font-medium leading-5 text-gray-600 transition-colors duration-150 bg-transparent border border-transparent rounded-lg focus:outline-none focus:shadow-outline-primary">
                    <span class="hover:underline">Delete</span>
                </button>

                <label class="block text-sm">
                    <span class="text-gray-700 dark:text-gray-400">Name *</span>
                    <div class="relative text-gray-500 focus-within:text-primary-600 dark:focus-within:text-primary-400">
                        <input
                            class="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray form-input"
                            placeholder="Amlou Originale (Kg)"
                            v-model="product.name"
                        />
                        <div class="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                            <svg fill="currentColor" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M23 6.066v12.065l-11.001 5.869-11-5.869v-12.131l11-6 11.001 6.066zm-21.001 11.465l9.5 5.069v-10.57l-9.5-4.946v10.447zm20.001-10.388l-9.501 4.889v10.568l9.501-5.069v-10.388zm-5.52 1.716l-9.534-4.964-4.349 2.373 9.404 4.896 4.479-2.305zm-8.476-5.541l9.565 4.98 3.832-1.972-9.405-5.185-3.992 2.177z"/>
                            </svg>
                        </div>
                    </div>
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

        this.slug = params.slug;
    },
    components: {
        LoadingSpinner,
        RecordNotFound,
    },
    data() {
        return {
            slug: null,
            loading: false,
            gamme: {
                name: null,
                description: null,
                image: 'https://picsum.photos/seed/picsum/200/300',
                price: null,
                discount_price: null,
            },
            errors: {
                name: null,
                description: null,
                image: null,
                price: null,
                discount_price: null,
                products: null,
            },
            products: [
                {
                   name: null,
                }
            ]
        }
    },
    mounted() {
        this.loadGamme();
    },
    methods: {
        loadGamme() {
            this.loading = true;
            axios.get(`gammes/${this.slug}/show`)
                .then(res => {
                    if (res.data.data.status !== 'approved') {
                        return this.$router.push({ name: 'gammes.show', params: { slug: this.slug } })
                    }
                    this.gamme.name =res.data.data.name;
                    this.gamme.description =res.data.data.description;
                    this.gamme.image =res.data.data.image;
                    this.gamme.price =res.data.data.price;
                    this.gamme.discount_price =res.data.data.discount_price;
                    this.products = res.data.data.products;
                })
                .catch(err => {
                    console.error(err);
                })
                .finally(() => { this.loading = false; })
        },
        addProduct() {
            let item = {
                name: null,
            }
            this.products.push(item);
        },
        removeProduct() {
            this.products.pop();
        },
        async update() {
            if (!this.gamme.name) {
                return this.errors.name = 'The name is required.';
            } else if (!this.gamme.price) {
                return this.errors.price = 'The price is required.';
            } else if (this.products.length == 0) {
                return this.errors.products = "At least one product should be added.";
            } else if (this.gamme.price < this.gamme.discount_price) {
                return this.errors.discount_price = `The discount price should be smaller than ${this.gamme.price}.`;
            } else {
                this.products.forEach(product => {
                    if (!product.name) {
                        return this.errors.products = "The name is required.";
                    }
                });
            }

            let data = {
                name: this.gamme.name,
                description: this.gamme.description,
                price: this.gamme.price,
                discount_price: this.gamme.discount_price,
                image: this.gamme.image,
                products: this.products
            }

            await this.$store.dispatch("updateGamme", { slug: this.slug, data: data })
                .then((isUpdated) => {
                    if(isUpdated) {
                        helpers.showAlert('success', 'Congratulations!', 'The gamme has been updated successfully.', false, 2000)
                        this.$router.push({ name: 'gammes.index' })
                    }
                })
                .catch(err => {
                    console.log(err)
                    if (err.response?.data?.errors?.name) {
                        this.errors.name = err.response.data.errors.name[0];
                    }
                    if (err.response?.data?.errors?.description) {
                        this.errors.description = err.response.data.errors.description[0];
                    }
                    if (err.response?.data?.errors?.image) {
                        this.errors.image = err.response.data.errors.image[0];
                    }
                    if (err.response?.data?.errors?.price) {
                        this.errors.price = err.response.data.errors.price[0];
                    }
                    if (err.response?.data?.errors?.products) {
                        this.errors.products = err.response.data.errors.products;
                    }
                    helpers.showAlert('error', 'Invalid data!', '', false, 500);
                })
        }
    }
}
</script>