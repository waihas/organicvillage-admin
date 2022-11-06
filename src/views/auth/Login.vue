<template>
    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div class="flex-1 h-full max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div class="flex flex-col overflow-y-auto">
                <div class="flex items-center justify-center p-6 sm:p-12">
                    <form class="w-full" @submit.prevent="login">
                        <h1 class="mb-8 text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Backdoor
                        </h1>
                        
                        <label class="block text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Username</span>
                            <input
                                v-model="form.username"
                                class="block w-full mt-2 pl-4 pr-2 py-2 bg-gray-100 text-sm rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                :class="{ 'border border-red-600 bg-red-100': error['username'] }"
                                placeholder="JaneDoe"
                            />
                        </label>
                        <span v-if="error['username']" class="text-xs text-red-600 dark:text-red-400">
                            {{error['username']}}
                        </span>

                        <label class="block mt-4 text-sm">
                            <span class="text-gray-700 dark:text-gray-400">Password</span>
                            <input
                                v-model="form.password"
                                class="block w-full mt-2 pl-4 pr-2 py-2 bg-gray-100 text-sm rounded-md dark:border-gray-600 dark:bg-gray-700 focus:border-primary-400 focus:outline-none focus:shadow-outline-primary dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                :class="{ 'border border-red-600 bg-red-100': error['password'] }"
                                placeholder="**********"
                                type="password"
                            />
                        </label>

                        <button v-if="loading"
                            disabled
                            class="block w-full px-4 py-2 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
                            Loading...
                        </button>
                        <button v-else
                            type="submit"
                            class="block w-full px-4 py-2 mt-6 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
                            Log in
                        </button>

                        <p class="mt-4">
                            <router-link :to="{ name: 'forgot-password' }" class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                                Forgot password?
                            </router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            error: {
                username: '',
                password: false,
            },
            loading: false,
        }
    },
    methods: {
        async login() {
            if (!this.form.username || !this.form.password) {
                if (!this.form.username) {
                    this.error['username'] = 'Please insert an username.';
                } else {
                    this.error['username'] = '';
                }
                if (!this.form.password) {
                    this.error['password'] = true;
                } else {
                    this.error['password'] = '';
                }
                return;
            }
            
            this.loading = true;

            const User = new FormData();
            User.append("username", this.form.username);
            User.append("password", this.form.password);

            try {
                await this.$store.dispatch('login', User);
                this.$router.push(this.$route.query.redirect || { name: 'overview' });
                this.loading = false;
            } catch (error) {
                this.error['username'] = 'Username or password is incorrect.';
                this.loading = false;
            }
        }
    }
}
</script>