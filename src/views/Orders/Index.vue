<template>
  <div class="container grid px-6 mx-auto">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Orders
    </h2>

    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      List of orders
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
              <th class="px-4 py-3">Code</th>
              <th class="px-4 py-3">Client</th>
              <th class="px-4 py-3">Amount</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Items</th>
              <th class="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr v-if="loading">
              <td colspan="6">
                <LoadingSpinner></LoadingSpinner>
              </td>
            </tr>
            <tr v-else-if="orders.length == 0">
              <td class="text-center text-sm" colspan="6">
                No orders were found yet!
              </td>
            </tr>
            <tr v-for="order in orders" :key="order.uuid" class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3 font-medium text-sm">
                {{order.code}}
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold">{{order.user?.name}}</p>
                    <p class="text-xs text-gray-600 dark:text-gray-400">
                      {{order.user?.city}}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm">
                {{order.total}} MAD
              </td>
              <td class="px-4 py-3 text-xs">
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
              </td>
              <td class="px-4 py-3 text-sm">
                {{order.items_count}}
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-2 text-sm">
                  <router-link
                    :to="{ name: 'orders.show', params: { code: order.code } }"
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-primary-800 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Show"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"/>
                    </svg>
                  </router-link>
                  <router-link
                    :to="{ name: 'orders.edit', params: { code: order.code } }"
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-primary-800 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </router-link>
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
    this.$store.dispatch('fetchOrders', this.page, this.perPage);
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
    orders() {
      return this.$store.getters.getOrders;
    },
    pagination() {
      return this.$store.getters.getOrdersPagination;
    },
  },
  methods: {
    fetchOrders() {
      this.$store.dispatch('fetchOrders', { page: this.page, perPage: this.perPage, search: this.search });
    },
    updatedPage(page) {
      this.page = page;
      this.fetchOrders();
    },
    updatedPerPage(perPage) {
      this.perPage = perPage;
      this.fetchOrders();
    },
    updatedSearch(search) {
      this.search = search;
      this.fetchOrders();
    },
  }
}
</script>