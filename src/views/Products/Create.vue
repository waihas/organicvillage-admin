<template>
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Create a new product
        </h2>

        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            Information
            <router-link
                :to="{ name: 'products.index' }"
                class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-white transition-colors duration-150 bg-transparent hover:bg-primary-600 border-2 border-primary-600 rounded-lg active:bg-primary-600 focus:outline-none focus:shadow-outline-primary">
                <span>Back</span>
            </router-link>
        </h4>
        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Name *</span>
                <input
                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    v-model="product.name"
                />
                <span v-if="errors.name" class="text-xs text-red-600 dark:text-red-400">
                    {{errors.name}}
                </span>
            </label>

            <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Description</span>
                <textarea
                    v-model="product.description"
                    class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray"
                    rows="2"
                ></textarea>
                <span v-if="errors.description" class="text-xs text-red-600 dark:text-red-400">
                    {{errors.description}}
                </span>
            </label>

            <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Image URL</span>
                <input
                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    v-model="product.image"
                />
                <span v-if="errors.image" class="text-xs text-red-600 dark:text-red-400">
                    {{errors.image}}
                </span>
                <img v-if="product.image" :src="product.image" class="w-48 h-48 mt-4 mx-auto rounded-lg" />
            </label>
        </div>

        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            Prices
            <button @click="addPrice" class="flex items-center float-right justify-between px-4 text-sm font-medium leading-5 text-gray-600 transition-colors duration-150 bg-transparent border border-transparent rounded-lg focus:outline-none focus:shadow-outline-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
                </svg>
                <span class="hover:underline">Add</span>
            </button>
        </h4>
        <span v-if="errors.prices" class="text-xs pb-3 text-red-600 dark:text-red-400">
            {{errors.prices}}
        </span>
        <div v-for="(price, idx) in prices" :key="idx" class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <button v-if="idx == (prices.length - 1) && (idx != 0)" @click="removePrice" class="flex items-center float-right justify-between pl-4 text-sm font-medium leading-5 text-gray-600 transition-colors duration-150 bg-transparent border border-transparent rounded-lg focus:outline-none focus:shadow-outline-primary">
                <span class="hover:underline">Delete</span>
            </button>

            <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Weight</span>
                <div class="relative text-gray-500 focus-within:text-primary-600 dark:focus-within:text-primary-400">
                    <input
                        class="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray form-input"
                        placeholder="100 ml"
                        v-model="price.weight"
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm3 19c0 1.302-.839 2.401-2 2.816v-2.816h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2v-3h-1v3h-2v-3h-1v2.815c-1.161-.414-2-1.513-2-2.815v-14c0-1.302.839-2.401 2-2.816v2.816h1v-3h2v6h1v-6h2v3h1v-3h2v3h1v-3h2v6h1v-6h2v3h1v-2.816c1.161.415 2 1.514 2 2.816v14zm-14.141-9h1.141v6h-1.354v-3.889h-1.488v-1c.893-.041 1.701-.201 1.701-1.111zm8.315 4.667h1.826v1.306h-3.922v-.958c1.529-1.491 2.379-2.244 2.389-3.018 0-.462-.268-.717-.754-.717-.453 0-.816.245-1.168.524l-.424-1.148c.545-.452 1.191-.656 1.833-.656 1.179 0 1.941.74 1.941 1.885.001 1.155-.899 2.043-1.721 2.782z"/>
                        </svg>
                    </div>
                </div>
            </label>

            <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Price</span>
                <div class="relative text-gray-500 focus-within:text-primary-600 dark:focus-within:text-primary-400">
                    <input
                        class="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:focus:shadow-outline-gray form-input"
                        placeholder="500 (without currency symbol i.e. DH)"
                        v-model="price.price"
                        type="number"
                    />
                    <div class="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12.236 8.433c-1.084-.563-.955-1.54.665-1.634 1.732-.102 3.512.594 5.148 1.171l1.104-5.021c-1.527-.464-2.898-.737-4.153-.881v-2.068h-5v2.364c-3.326.969-4.792 3.47-4.792 5.816 0 5.245 5.964 6.138 7.513 6.858 1.38.618 1.215 1.526-.022 1.805-1.969.449-4.807-.743-6.357-1.345l-1.342 4.857c1.635.845 3.344 1.374 5 1.618v2.027h5v-2.236c2.932-.784 5.005-2.806 5-5.944 0-4.631-4.717-5.96-7.764-7.387zm.764 11.688v1.879h-1v-1.826c-1.581.012-3.234-.294-4.64-.88l.321-1.162c2.26.77 4.036.978 5.458.655 3.025-.685 3.608-4.13.41-5.562-1.809-.843-6.349-1.39-6.349-5.045 0-2.103 1.692-3.89 4.799-4.254v-1.926h1v1.863c1.123-.02 2.391.121 3.808.479l-.225 1.022c-1.176-.358-2.503-.632-3.799-.555-3.716.218-4.297 3.924-1.43 5.411 3.179 1.497 6.655 2.423 6.655 5.602.005 2.699-2.277 4.027-5.008 4.299z"/>
                        </svg>
                    </div>
                </div>
            </label>
        </div>

        <div class="flex justify-end">
            <button @click="save" class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/>
                </svg>
                <span>Create</span>
            </button>
        </div>
    </div>
</template>

<script>
import helpers from '@/common/helpers';

export default {
    data() {
        return {
            product: {
                name: null,
                description: null,
                image: 'https://picsum.photos/seed/picsum/200/300'
            },
            errors: {
                name: null,
                description: null,
                image: null,
                prices: null,
            },
            prices: [
                {
                   weight: null,
                   price: null,
                }
            ]
        }
    },
    methods: {
        addPrice() {
            let item = {
                weight: null,
                price: null,
            }
            this.prices.push(item);
        },
        removePrice() {
            this.prices.pop();
        },
        async save() {
            if (!this.product.name) {
                return this.errors.name = 'The name is required.';
            } else if (this.prices.length == 0) {
                return this.errors.prices = "At least one price should be added.";
            } else {
                this.prices.forEach(price => {
                    if (!price.weight) {
                        return this.errors.prices = "The weight is required.";
                    } else if (!price.price) {
                        return this.errors.prices = "The price is required.";
                    }
                });
            }

            let data = {
                name: this.product.name,
                description: this.product.description,
                image: this.product.image,
                prices: this.prices
            }

            await this.$store.dispatch("storeProduct", data)
                .then((isSaved) => {
                    if(isSaved) {
                        helpers.showAlert('success', 'Congratulations!', 'The product has been saved successfully.', false, 2000);
                        this.$router.push({ name: 'products.index' })
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
                    if (err.response?.data?.errors?.prices) {
                        this.errors.prices = err.response.data.errors.prices;
                    }
                    helpers.showAlert('error', 'Invalid data!', '', false, 1000);
                })
        }
    }
}
</script>