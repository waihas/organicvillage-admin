<template>
  <div class="container grid px-6 mx-auto">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Cities
    </h2>

    <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
      List of cities
      <router-link :to="{ name: 'settings.cities.create' }" class="flex items-center float-right justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-primary-600 border border-transparent rounded-lg active:bg-primary-600 hover:bg-primary-700 focus:outline-none focus:shadow-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
        </svg>
        <span>Add a new city</span>
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
              <th class="px-4 py-3">Date</th>
              <th class="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr v-if="loading">
              <td colspan="3">
                <LoadingSpinner></LoadingSpinner>
              </td>
            </tr>
            <tr v-else-if="cities.length == 0">
              <td class="text-center text-sm" colspan="3">
                No cities were found!
              </td>
            </tr>
            <tr v-for="city in cities" :key="city.uuid" class="text-gray-700 dark:text-gray-400">
              <td class="px-4 py-3 text-sm">
                {{city.name}}
              </td>
              <td class="px-4 py-3 text-sm">
                {{city.created_at}}
              </td>
              <td class="px-4 py-3">
                <div class="flex items-center space-x-2 text-sm">
                  <router-link
                    :to="{ name: 'settings.cities.edit', params: { uuid: city.uuid } }"
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-primary-800 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Edit"
                  >
                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                    </svg>
                  </router-link>
                  <button
                    @click="deleteCity(city.uuid)"
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
    this.$store.dispatch('fetchCities', this.page, this.perPage);
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
    cities() {
      return this.$store.getters.getCities;
    },
    pagination() {
      return this.$store.getters.getCitiesPagination;
    },
  },
  methods: {
    fetchCities() {
      this.$store.dispatch('fetchCities', { page: this.page, perPage: this.perPage, search: this.search });
    },
    updatedPage(page) {
      this.page = page;
      this.fetchCities();
    },
    updatedPerPage(perPage) {
      this.perPage = perPage;
      this.fetchCities();
    },
    updatedSearch(search) {
      this.search = search;
      this.fetchCities();
    },
    deleteCity: function(uuid) {
      helpers.showConfirmAlert('warning', 'Are you sure?', '', 'Delete', 'Cancel', () => {
        this.$store.dispatch('deleteCity', uuid)
          .then(() => {
            helpers.showAlert('success', 'City deleted!');
            this.fetchCities();
          })
          .catch((err) => {
            helpers.showAlert('error', err?.response?.data?.message);
          });
      })
    },
  }
}
</script>