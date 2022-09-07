import axios from '@/api/axios'
import Cookies from 'js-cookie'

const state = {
    authenticated: false,
    user: null,
    token: Cookies.get('token'),
}

const mutations = {
    loginUser(state, data) {
       state.authenticated = true;
       state.token = data.token;
       state.user = data.user;
       Cookies.set('token', data.token, {expires: 7}) // save it for 7 days
    },
    logoutUser(state) {
        state.authenticated = false;
        state.token = null;
        state.user = null;
        Cookies.remove('token');
    },
    setUser(state, data) {
        state.user = data;
    }
}

const actions = {
    login(context, user) {
        return axios.post('login', user)
            .then(res => {
                context.commit('loginUser', res.data)
                return true;
            }).catch(err => {
                throw err;
            })
    },
    async register(context, data) {
        try {
            let response = await axios.post('register', data)
            if (response.data.success) {
                return true;
            }
        }
        catch (err) {
            console.error(err)
            throw err;
        }
    },
    async logout(context) {
        await axios.post('user/logout');
        context.commit('logoutUser');
    },
    async fetchUser({ commit }) {
        try {
            const res = await axios.get('user/me')
            commit('setUser', res.data.data)
        } catch (e) {
            console.error(e)
        }
    },
    checkUser({ dispatch, getters }) {
        if(getters.user == null && getters.isAuthenticated) {
            dispatch('fetchUser')
        }
    },
    async updateUser(context, data) {
        try {
            let response = await axios.post('user/update', data)
            context.commit('setUser', response.data.data)
            return response.data.data;
        }
        catch (err) {
            console.error(err)
            throw err;
        }
    },
    async sendCode(context, email) {
        try {
            let response = await axios.post('reset-password/request', email)
            return response.data.data;
        }
        catch (err) {
            console.error(err)
            throw err;
        }
    },
    async checkCode(context, token) {
        try {
            let response = await axios.post('reset-password/check-token', token)
            return response.data.data;
        }
        catch (err) {
            console.error(err)
            throw err;
        }
    },
    async resetPassword(context, data) {
        try {
            let response = await axios.post('reset-password/save-new-password', data)
            return response.data.data;
        }
        catch (err) {
            console.error(err)
            throw err;
        }
    }
}

const getters = {
    isAuthenticated(state) {
       return !!state.token;
    },
    user(state) {
       return state.user;
    },
    userToken(state) {
       return state.token;
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
};
