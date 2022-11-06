<template>
  <div class="container grid px-6 mx-auto">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Gammes
    </h2>

    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      List of gammes
      <router-link :to="{ name: 'gammes.create' }" class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
        <span>Add gamme</span>
      </router-link>
    </h4>

    <div class="w-full overflow-hidden rounded-lg shadow-xs">
      <Filter
        :perPage="perPage"
        :search="search"
        @perPageChanged="updatedPerPage"
        @searchChanged="updatedSearch"
      ></Filter>
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Orders</th>
              <th class="px-4 py-3">Products</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr v-if="loading">
              <td colspan="6">
                <LoadingSpinner></LoadingSpinner>
              </td>
            </tr>
            <tr v-else-if="gammes.length == 0">
              <td class="text-center text-sm" colspan="6">
                No gammes were found!
              </td>
            </tr>
            <tr v-for="gamme in gammes" :key="gamme.uuid" class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      v-if="gamme.image"
                      class="object-cover w-full h-full rounded-full"
                      :src="gamme.image"
                      loading="lazy"
                    />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                  </div>
                  <div>
                    <p class="font-semibold">{{gamme.name}}</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      {{gamme.description}}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm">
                {{gamme.orders_count}}
              </td>
              <td class="px-4 py-3 text-sm">
                {{gamme.products_count}}
              </td>
              <td class="px-4 py-3 text-xs">
                <span v-if="gamme.status == 'approved'" class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                  Approved
                </span>
                <span v-else-if="gamme.status == 'pending'" class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                  Pending
                </span>
                <span v-else-if="gamme.status == 'deleted'" class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                  Deleted
                </span>
                <span v-else class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                  Rejected
                </span>
              </td>
              <td class="px-4 py-3 text-sm">
                {{gamme.created_at}}
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-2 text-sm">
                  <router-link
                    :to="{ name: 'gammes.show', params: { slug: gamme.slug } }"
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-primary-800 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Show"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"/>
                    </svg>
                  </router-link>
                  <router-link
                    :to="{ name: 'gammes.edit', params: { slug: gamme.slug } }"
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-primary-800 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </router-link>
                  <button
                    v-if="gamme.status == 'deleted'"
                    @click="restoreGamme(gamme.slug)"
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-primary-800 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"/>
                    </svg>
                  </button>
                  <button
                    v-else
                    @click="deleteGamme(gamme.slug)"
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-primary-800 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Delete"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination
        :current_page="pagination?.current_page"
        :last_page="pagination?.last_page"
        :from="pagination?.from"
        :to="pagination?.to"
        :total="pagination?.total"
        @changed="updatedPage"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination';
import Filter from '@/components/Filter';
import LoadingSpinner from '@/components/LoadingSpinner';
import helpers from '@/common/helpers';

export default {
  components: {
    Pagination,
    Filter,
    LoadingSpinner,
  },
  mounted() {
    this.loading = true;
    this.$store.dispatch('fetchGammes', this.page, this.perPage);
    this.loading = false;
  },
  data() {
    return {
      loading: false,
      page: 1,
      perPage: 5,
      search: '',
    }
  },
  computed: {
    gammes() {
      return this.$store.getters.getGammes;
    },
    pagination() {
      return this.$store.getters.getGammesPagination;
    },
  },
  methods: {
    fetchGammes() {
      this.$store.dispatch('fetchGammes', { page: this.page, perPage: this.perPage, search: this.search });
    },
    updatedPage(page) {
      this.page = page;
      this.fetchGammes();
    },
    updatedPerPage(perPage) {
      this.perPage = perPage;
      this.fetchGammes();
    },
    updatedSearch(search) {
      this.search = search;
      this.fetchGammes();
    },
    deleteGamme: function(slug) {
      helpers.showConfirmAlert('warning', 'Are you sure?', '', 'Delete', 'Cancel', () => {
        this.$store.dispatch('deleteGamme', slug)
          .then(() => {
            helpers.showAlert('success', 'Gamme deleted!');
            this.fetchGammes();
          });
      })
    },
    restoreGamme: function(slug) {
      helpers.showConfirmAlert('warning', 'Are you sure?', '', 'Delete', 'Cancel', () => {
        this.$store.dispatch('restoreGamme', slug)
          .then(() => {
            helpers.showAlert('success', 'Gamme restored!');
            this.fetchProducts();
          });
      })
    }
  }
}
</script>