<template>
    <div class="mb-2 flex flex-wrap">
        <div class="w-full md:flex-1 lg:flex-1 md:w-1/3 lg:w-1/3 text-sm mb-2">
            <!-- <span class="text-gray-700 mr-3">
                Show
            </span> -->
            <select v-model="itemPerPage" class="mt-1 text-xs focus:ring-primary-500 focus:border-primary-500 py-2 border border-gray-300 rounded-md form-input">
                <option>5</option>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
            </select>
        </div>

        <div class="w-full md:flex-1 lg:flex-1 md:w-1/3 lg:w-1/3 mb-2 text-sm">
            <div class="relative w-full text-primary focus-within:text-primary-dark">
                <div class="absolute inset-y-0 flex items-center pl-2">
                    <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <input @input="debounceSearch" :value="search"
                    class="block w-full pl-8 pr-2 focus:ring-primary-500 focus:border-primary-500 px-4 py-2 border sm:text-sm border-gray-300 bg-gray-100 rounded-md"
                    type="text"
                    placeholder="Search ..."
                    aria-label="Search"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        perPage: {
            type: Number,
            required: true
        },
        search: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            itemPerPage: this.perPage,
        }
    },
    watch: {
        itemPerPage(newV, oldV) {
            return this.$emit('perPageChanged', parseInt(newV));
        },
    },
    methods: {
        debounceSearch(event) {
            this.debounce = setTimeout(() => {
                this.$emit('searchChanged', event.target.value)
            }, 600)
        }
    }
}
</script>