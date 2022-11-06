<template>
    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Profile
        </h2>

        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            Information
        </h4>
        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Name</span>
                <input
                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    v-model="name"
                />
                <span v-if="errors.name" class="text-xs text-red-600 dark:text-red-400">
                    {{errors.name}}
                </span>
            </label>

            <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Username</span>
                <input
                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    v-model="username"
                />
                <span v-if="errors.username" class="text-xs text-red-600 dark:text-red-400">
                    {{errors.username}}
                </span>
            </label>

            <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">Email</span>
                <input
                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    v-model="email"
                    type="email"
                />
                <span v-if="errors.email" class="text-xs text-red-600 dark:text-red-400">
                    {{errors.email}}
                </span>
            </label>
        </div>
        <div class="flex justify-end">
            <button @click="updateInformation" class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/>
                </svg>
                <span>Update</span>
            </button>
        </div>

        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
            Password
        </h4>
        <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400">Current password</span>
                <input
                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    v-model="current_password"
                    placeholder="********"
                    type="password"
                />
                <span v-if="errors.current_password" class="text-xs text-red-600 dark:text-red-400">
                    {{errors.current_password}}
                </span>
            </label>

            <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">New password</span>
                <input
                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    v-model="new_password"
                    placeholder="********"
                    type="password"
                />
                <span v-if="errors.new_password" class="text-xs text-red-600 dark:text-red-400">
                    {{errors.new_password}}
                </span>
            </label>

            <label class="block mt-4 text-sm">
                <span class="text-gray-700 dark:text-gray-400">New password confirmation</span>
                <input
                    class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                    v-model="password_confirmation"
                    placeholder="********"
                    type="password"
                />
                <span v-if="errors.password_confirmation" class="text-xs text-red-600 dark:text-red-400">
                    {{errors.password_confirmation}}
                </span>
            </label>
        </div>

        <div class="flex justify-end">
            <button @click="updatePassword" class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 3h2.997v5h-2.997v-5zm9 1v20h-22v-24h17.997l4.003 4zm-17 5h12v-7h-12v7zm14 4h-16v9h16v-9z"/>
                </svg>
                <span>Update</span>
            </button>
        </div>
    </div>
</template>

<script>
import axios from '@/api/axios';
import helpers from '@/common/helpers';

export default {
    mounted() {
        this.loadProfileInformation();
    },
    data() {
        return {
            name: null,
            email: null,
            username: null,
            current_password: null,
            new_password: null,
            password_confirmation: null,
            errors: {
                name: null,
                email: null,
                username: null,
                current_password: null,
                new_password: null,
                password_confirmation: null,
            },
        }
    },
    methods: {
        loadProfileInformation() {
            axios.get(`user/me`)
                .then(res => {
                    this.order = res.data.data;
                    this.name = res.data.data.name
                    this.email = res.data.data.email
                    this.username = res.data.data.username
                })
                .catch(err => {
                    console.error(err);
                });
        },
        async updateInformation() {
            if (!this.name) {
                return this.errors.name = 'The name field is required.';
            } else if (!this.email) {
                return this.errors.email = 'The email field is required.';
            } else if (!this.username) {
                return this.errors.username = "The username field is required.";
            }

            let data = {
                name: this.name,
                email: this.email,
                username: this.username,
            }

            await this.$store.dispatch("updateAdminInformation", data)
                .then((isSaved) => {
                    if(isSaved) {
                        helpers.showAlert('success', 'Success!', 'Profile information have been updated successfully.', false, 2000);
                    }
                })
                .catch(err => {
                    this.errors.name = null;
                    this.errors.email = null;
                    this.errors.username = null;
                    if (err.response?.data?.errors?.name) {
                        this.errors.name = err.response.data.errors.name[0];
                    }
                    if (err.response?.data?.errors?.email) {
                        this.errors.email = err.response.data.errors.email[0];
                    }
                    if (err.response?.data?.errors?.username) {
                        this.errors.username = err.response.data.errors.username[0];
                    }
                    helpers.showAlert('error', 'Invalid information!', '', false, 1000);
                })
        },
        async updatePassword() {
            if (!this.current_password) {
                return this.errors.current_password = 'The current password is required.';
            } else if (!this.new_password) {
                return this.errors.new_password = 'The new password is required.';
            } else if (!this.password_confirmation) {
                return this.errors.password_confirmation = "The password confirmation is required.";
            } else if (this.new_password !== this.password_confirmation) {
                return this.errors.password_confirmation = "The password confirmation doesn't match the new password.";
            }


            let data = {
                current_password: this.current_password,
                password: this.new_password,
                password_confirmation: this.password_confirmation,
            }

            await this.$store.dispatch("updateAdminPassword", data)
                .then((isSaved) => {
                    if(isSaved) {
                        helpers.showAlert('success', 'Success!', 'The password has been updated successfully.', false, 2000);
                    }
                })
                .catch(err => {
                    this.errors.current_password = null;
                    this.errors.new_password = null;
                    this.errors.password_confirmation = null;

                    if (err.response?.data?.errors?.current_password) {
                        this.errors.current_password = err.response.data.errors.current_password[0];
                    }
                    if (err.response?.data?.errors?.password) {
                        this.errors.new_password = err.response.data.errors.password[0];
                    }
                    if (err.response?.data?.errors?.password_confirmation) {
                        this.errors.password_confirmation = err.response.data.errors.password_confirmation[0];
                    }

                    helpers.showAlert('error', 'Invalid information!', '', false, 1000);
                })
        }
    }
}
</script>