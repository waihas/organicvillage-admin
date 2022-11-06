<template>
    <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
        <span class="flex items-center col-span-3">
          Showing {{from}}-{{to}} of {{total}}
        </span>

        <span class="col-span-2"></span>
        
        <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul class="inline-flex items-center">
              <li>
                <button
                  @click.prevent="change(current_page - 1)"
                  :disabled="current_page <= 1"
                  :class="current_page <= 1 ? 'cursor-not-allowed' : ''"
                  class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-primary" aria-label="Previous"
                >
                  <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                    <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg>
                </button>
              </li>
              <li v-for="page in pages" :key="page">
                <button @click.stop="change(page)" :class="[page == current_page ? 'text-white transition-colors duration-150 bg-primary-600 border border-r-0 border-primary-600' : '', 'px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-primary']">
                  {{page}}
                </button>
              </li>
              <li>
                <button
                  @click.prevent="change(current_page + 1)"
                  :disabled="current_page >= last_page"
                  :class="current_page >= last_page ? 'cursor-not-allowed' : ''"
                  class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-primary" aria-label="Next"
                >
                  <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                    <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            current_page: {
                type: Number,
                required: true
            },
            last_page: {
                type: Number,
                required: true
            },
            from: {
                type: Number,
                required: true
            },
            to: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            },
            offset: {
                type: Number,
                default: 4
            }
        },
        computed: {
            pages() {
                if (!this.to) {
                    return null;
                }
                let from = this.current_page - this.offset;
                if (from < 1) {
                    from = 1;
                }
                let to = from + (this.offset * 2);
                if (to >= this.last_page) {
                    to = this.last_page;
                }
                let pages = [];
                for (let page = from; page <= to; page++) {
                    pages.push(page);
                }
                return pages;
            },
        },
        mounted() {
          if (this.last_page < this.current_page) {
            this.$emit('changed', this.last_page);
          }
        },
        methods: {
            change: function(page) {
                this.$emit('changed', page);
            }
        }
    }
</script>