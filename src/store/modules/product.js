import axios from '@/api/axios'

const state = {
  products: [],
  pagination: {},
}

const mutations = {
  SET_PRODUCTS(state, products) {
      state.products = products;
  },
  SET_PAGINATION(state, pagination) {
      state.pagination = pagination;
  }
}

const actions = {
  async fetchProducts(context, { page = 1, perPage = 5, search = '' }) {
    return axios.get(`products/list?page=${page}&count=${perPage}&search=${search}`)
      .then(res => {
          context.commit('SET_PRODUCTS', res.data.data)
          context.commit('SET_PAGINATION', {
            current_page: res.data.meta.current_page,
            last_page: res.data.meta.last_page,
            per_page: res.data.meta.per_page,
            from: res.data.meta.from,
            to: res.data.meta.to,
            total: res.data.meta.total,
          });
          return true;
      }).catch(err => {
          throw err;
      })
  },
  async storeProduct({commit, dispatch, state}, data) {
    return axios.post(`products/create`, data)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async updateProduct({commit, dispatch, state}, {slug, data}) {
    return axios.put(`products/${slug}/update`, data)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async deleteProduct({commit, dispatch, state}, slug) {
    return axios.delete(`products/${slug}/delete`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async restoreProduct({commit, dispatch, state}, slug) {
    return axios.post(`products/${slug}/restore`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async approveProduct({commit, dispatch, state}, slug) {
    return axios.post(`products/${slug}/approve`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProductsPagination(state) {
    return state.pagination;
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
};
