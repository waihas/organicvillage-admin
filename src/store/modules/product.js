import axios from '@/api/axios'

const state = {
  post: {
    postTitle: null,
    tags: [],
    postThumbnail: null,
    article: {
      articleTitle: null,
      articleContent: [],
    },
    questions: [],
    uploadedFile: null,
    media: null,
  },
};

const mutations = {
  updatePost(state, payload) {
    state.post = { ...state.post, [payload.type]: payload.value };
  },
  resetPost(state) {
    state.post= {
      postTitle: null,
      tags: [],
      postThumbnail: null,
      article: {
        articleTitle: null,
        articleContent: [],
      },
      questions: [],
      uploadedFile: null,
      media: null,
    }
  }
};

const actions = {
  async storeArticle({commit, dispatch, state}, data) {
      // validation
      let error = ""
      if (!state.post.postTitle) {
        error = 'cím.'
      } else if (!state.post.tags.length) {
        error = 'témák.'
      } else if (!state.post.questions.length) {
        error = 'kérdések.'
      }
      if (error) {
        dispatch('showMissingFieldAlert', error)
        throw 'Hiányzik információ.'
      }

  },
  quizFinished(state, uuid) {
    axios.post(`articles/${uuid}/finished`)
      .catch(error => {
        console.error(error);
      })
  },
  articleDownloaded(state, uuid) {
    axios.post(`articles/${uuid}/downloaded`)
      .catch(error => {
        console.error(error);
      })
  }
};

const getters = {
  post(state) {
    return state.post;
  },
  uploadedFile(state) {
    return state.uploadedFile;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
