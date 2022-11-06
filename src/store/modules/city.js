import axios from '@/api/axios'

const state = {
  cities: [],
  pagination: {},
}

const mutations = {
  SET_CITIES(state, cities) {
      state.cities = cities;
  },
  SET_PAGINATION(state, pagination) {
      state.pagination = pagination;
  }
}

const actions = {
  async fetchCities(context, { page = 1, perPage = 5, search = '' }) {
    return axios.get(`cities/list?page=${page}&count=${perPage}&search=${search}`)
      .then(res => {
          context.commit('SET_CITIES', res.data.data)
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
  async storeCity({commit, dispatch, state}, data) {
    return axios.post(`cities/create`, data)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async updateCity({commit, dispatch, state}, {uuid, data}) {
    return axios.put(`cities/${uuid}/update`, data)
      .then((res) => {
        if(res.data.success) {
          return true;
        }
      })
      .catch(error => {
        throw error
      })
  },
  async deleteCity({commit, dispatch, state}, uuid) {
    return axios.delete(`cities/${uuid}/delete`)
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
  getCities(state) {
    return state.cities;
  },
  getCitiesPagination(state) {
    return state.pagination;
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
};
