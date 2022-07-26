import axios from '@/api/axios'

const state = {
  gammes: [],
  pagination: {},
}

const mutations = {
  SET_GAMMES(state, gammes) {
      state.gammes = gammes;
  },
  SET_PAGINATION(state, pagination) {
      state.pagination = pagination;
  }
}

const actions = {
  async fetchGammes(context, { page = 1, perPage = 5, search = '' }) {
    return axios.get(`gammes/list?page=${page}&count=${perPage}&search=${search}`)
      .then(res => {
          context.commit('SET_GAMMES', res.data.data)
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
  async storeGamme({commit, dispatch, state}, data) {
    return axios.post(`gammes/create`, data)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async updateGamme({commit, dispatch, state}, {slug, data}) {
    return axios.put(`gammes/${slug}/update`, data)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async deleteGamme({commit, dispatch, state}, slug) {
    return axios.delete(`gammes/${slug}/delete`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async restoreGamme({commit, dispatch, state}, slug) {
    return axios.post(`gammes/${slug}/restore`)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async approveGamme({commit, dispatch, state}, slug) {
    return axios.post(`gammes/${slug}/approve`)
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
  getGammes(state) {
    return state.gammes;
  },
  getGammesPagination(state) {
    return state.pagination;
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
};
