import axios from '@/api/axios'

const state = {
  orders: [],
  pagination: {},
}

const mutations = {
  SET_ORDERS(state, orders) {
      state.orders = orders;
  },
  SET_PAGINATION(state, pagination) {
      state.pagination = pagination;
  }
}

const actions = {
  async fetchOrders(context, { page = 1, perPage = 5, search = '' }) {
    return axios.get(`orders/list?page=${page}&count=${perPage}&search=${search}`)
      .then(res => {
          context.commit('SET_ORDERS', res.data.data)
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
  async updateOrder({commit, dispatch, state}, {slug, data}) {
    return axios.put(`orders/${slug}/update`, data)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async deleteOrder({commit, dispatch, state}, code) {
    return axios.delete(`orders/${code}/delete`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async acceptOrder({commit, dispatch, state}, code) {
    return axios.put(`orders/${code}/set-accepted`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async declineOrder({commit, dispatch, state}, code) {
    return axios.put(`orders/${code}/set-declined`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async renewOrder({commit, dispatch, state}, code) {
    return axios.put(`orders/${code}/set-new`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async deliveringOrder({commit, dispatch, state}, code) {
    return axios.put(`orders/${code}/set-in-delivery`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async deliveredOrder({commit, dispatch, state}, code) {
    return axios.put(`orders/${code}/set-delivered`)
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
  getOrders(state) {
    return state.orders;
  },
  getOrdersPagination(state) {
    return state.pagination;
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
};
