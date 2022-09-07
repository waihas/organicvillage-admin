import axios from '@/api/axios'

const state = {
    preferences: [],
}

const mutations = {
    setPreferences(state, preferences) {
        state.preferences = preferences
    }
}

const actions = {
    async fetchPreferences(context) {
        return new Promise((resolve, reject) => {
            axios.get('preferences/list')
            .then(res => {
                context.commit('setPreferences', res.data.data)
                resolve(res.data.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    updateUserPreference(context, preferences) {
        axios.post('user/update/preferences', {
            'preferences': preferences
        })
        .then(() => {
            return true;
        }).catch(err => {
            throw err;
        })
    },
}

const getters = {
    getPreferences(state) {
       return state.preferences;
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
};
