<template>
  <div class="container px-6 mx-auto grid pb-12">
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Overview
    </h2>
    <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      
      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Total orders
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{data?.total_orders}}
          </p>
        </div>
      </div>

      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Total revenue
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{data?.total_revenue}} MAD
          </p>
        </div>
      </div>

      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Monthly orders
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{data?.monthly_orders}}
          </p>
        </div>
      </div>
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
            {{data?.monthly_revenue}} MAD
          </p>
        </div>
      </div>

      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Weekly orders
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{data?.weekly_orders}}
          </p>
        </div>
      </div>

      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Weekly revenue
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{data?.weekly_revenue}} MAD
          </p>
        </div>
      </div>

      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div class="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Monthly visitors
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{data?.monthly_visitors}}
          </p>
        </div>
      </div>

      <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div class="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Weekly visitors
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{data?.weekly_visitors}}
          </p>
        </div>
      </div>

    </div>

    <div class="grid gap-6 mb-8 md:grid-cols-2">
      <!-- Orders -->
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Orders
        </h4>
        <!-- <canvas id="bars"></canvas> -->
        <Bar
          :chart-options="optionsChartBars"
          :chart-data="dataChartBars"
          chart-id="BarChart"
        />
        <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center">
            <span class="inline-block w-3 h-3 mr-1 bg-yellow-500 rounded-full"></span>
            <span>Products</span>
          </div>
          <div class="flex items-center">
            <span class="inline-block w-3 h-3 mr-1 bg-primary-600 rounded-full"></span>
            <span>Orders</span>
          </div>
        </div>
      </div>
      <!-- Revenue -->
      <!-- <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Revenue
        </h4>
        <Pie
          :chart-options="optionsChartBars"
          :chart-data="dataChartBars"
          chart-id="PieChart"
        />
        <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center">
            <span class="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"></span>
            <span>Shirts</span>
          </div>
          <div class="flex items-center">
            <span class="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
            <span>Shoes</span>
          </div>
          <div class="flex items-center">
            <span class="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
            <span>Bags</span>
          </div>
        </div>
      </div> -->
      <!-- Traffic -->
      <div class="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <h4 class="mb-4 font-semibold text-gray-800 dark:text-gray-300">
          Traffic
        </h4>
        <Line
          :chart-options='optionsChartLines'
          :chart-data='dataChartLines'
          chart-id='myCustomId'
        />
        <div class="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center">
            <span class="inline-block w-3 h-3 mr-1 bg-yellow-500 rounded-full"></span>
            <span>Organic</span>
          </div>
          <div class="flex items-center">
            <span class="inline-block w-3 h-3 mr-1 bg-primary-600 rounded-full"></span>
            <span>Paid</span>
          </div>
        </div>
      </div>
    </div>

    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      Today's orders
    </h2>
    <div class="w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              <th class="px-4 py-3">Code</th>
              <th class="px-4 py-3">Client</th>
              <th class="px-4 py-3">Amount</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Items</th>
              <th class="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
            <tr v-if="loadingTodayOrders">
              <td colspan="6">
                <LoadingSpinner></LoadingSpinner>
              </td>
            </tr>
            <tr v-else-if="todayOrders.length == 0">
              <td class="text-center text-sm" colspan="6">
                No orders for today yet!
              </td>
            </tr>
            <tr v-for="order in todayOrders" :key="order.uuid" class="text-gray-700 dark:text-gray-400">
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
                <div class="flex items-center space-x-4 text-sm">
                  <router-link
                    :to="{ name: 'orders.show', params: { code: order.code } }"
                    class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-primary-600 hover:text-primary-800 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                    aria-label="Show"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"/>
                    </svg>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Bar, Pie, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, LineElement, ArcElement, CategoryScale, PointElement, LinearScale } from 'chart.js'
import LoadingSpinner from '@/components/LoadingSpinner';
import axios from '@/api/axios';
import helpers from '@/common/helpers';

ChartJS.register(Title, Tooltip, Legend, BarElement, LineElement, ArcElement, CategoryScale, PointElement, LinearScale)

// https://vue-chartjs.org/

export default {
  components: {
    Bar,
    // Pie,
    Line,
    LoadingSpinner
  },
  mounted() {
    this.loadData();
    this.loadTodayOrders();
  },
  data() {
    return {
      data: {},
      todayOrders: [],
      loadingTodayOrders: false,
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { data: [40, 20, 12] } ]
      },
      chartOptions: {
        responsive: true
      },
      dataChartBars: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Products',
            backgroundColor: '#eab308',
            // borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [-3, 14, 52, 74, 33, 90, 70],
          },
          {
            label: 'Orders',
            backgroundColor: '#727b00',
            // borderColor: window.chartColors.blue,
            borderWidth: 1,
            data: [66, 33, 43, 12, 54, 62, 84],
          },
        ],
      },
      optionsChartBars: {
        responsive: true,
        legend: {
          display: false,
        },
      },
      dataChartLines: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Organic',
            backgroundColor: '#eab308',
            borderColor: '#eab308',
            data: [43, 48, 40, 54, 67, 73, 70],
            fill: false,
          },
          {
            label: 'Paid',
            fill: false,
            backgroundColor: '#727b00',
            borderColor: '#727b00',
            data: [24, 50, 64, 74, 52, 51, 65],
          },
        ],
      },
      optionsChartLines: {
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          x: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month',
            },
          },
          y: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
            },
          },
        },
      },
      // dataChartPie: {
      //   datasets: [
      //     {
      //       data: [33, 33, 33],
      //       /**
      //        * These colors come from Tailwind CSS palette
      //        * https://tailwindcss.com/docs/customizing-colors/#default-color-palette
      //        */
      //       backgroundColor: ['#0694a2', '#1c64f2', '#7e3af2'],
      //       label: 'Dataset 1',
      //     },
      //   ],
      //   labels: ['Shoes', 'Shirts', 'Bags'],
      // },
      // optionsChartPie: {
      //   responsive: true,
      //   cutoutPercentage: 80,
      //   /**
      //    * Default legends are ugly and impossible to style.
      //    * See examples in charts.html to add your own legends
      //    *  */
      //   legend: {
      //     display: false,
      //   },
      // },
    }
  },
  methods: {
    loadData() {
      axios.get('overview')
        .then((res) => {
          if (res.data.success) {
            this.data = res.data;
          }
        })
        .catch((err) => {
          helpers.showAlert('error', 'Error!', err?.response?.statusText);
          console.error(err);
        })
    },
    loadTodayOrders() {
      this.loadingTodayOrders = true;
      axios.get('overview/today-s-orders')
        .then((res) => {
            this.todayOrders = res.data.data;
        })
        .catch((err) => {
          helpers.showAlert('error', 'Error!', err?.response?.statusText);
          console.error(err);
        })
        .finally(() => { this.loadingTodayOrders = false; })
    }
  }
}
</script>