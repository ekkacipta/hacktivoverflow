import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios'
const url = 'http://localhost:3000'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: '',
      firstName: '',
      lastName: '',
      name: '',
      email: '',
      password: '',
      isLogin: false,
      location: 'login'
    },
    QnA: {
      id: '',
      title: '',
      description: '',
      upvotes: [],
      downvotes: [],
      answer: []
    },
    form: {
      title: '',
      description: '',
    },
    answer: {
      id: '',
      title: '',
      description: '',
      upvotes: [],
      downvotes: [],
    },
    questions: []
  },
  mutations: {
    setIsLogin(state, payload){
      state.user.isLogin = true
      state.user.location = 'home'

    },
    setLocationRegister(state, payload){
      state.user.location = 'register'
    },
    setLocationLogin(state, payload){
      state.user.location = 'login'
    },
    setLogout(state, payload){
      state.user.isLogin = false
      state.user.location = 'login'
      state.user.firstName = ''
      state.user.lastName = ''
      state.user.name = ''
      state.user.email = ''
      state.user.password = ''
      localStorage.clear()
    },
    setLocationQnA(state, payload){
      state.user.location = 'QnA'
    },
    setLocationPostHome(state, payload) {
      state.user.location = 'home'
      state.form.title = ''
      state.form.description = ''
    },
    setLocationInside(state) {
      state.user.location = 'inside'
    }
  },
  actions: {
    login({ state }){
      let { email, password } = state.user
      Axios
        .post(`${url}/users/login`, { email, password })
        .then(({ data }) => {
          state.user.id = data.id
          this.commit('setIsLogin')
          localStorage.setItem('userId', data.id)
          localStorage.setItem('token', data.token)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    register({ state }) {
      let { firstName, lastName, email, password } = state.user
      this.name = `${firstName} ${lastName}`
      Axios
        .post(`${url}/users`, { name: this.name, email, password })
        .then(({data}) => {
          // console.log(data)
          // state.user.id = 
          this.commit('setLocationLogin')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    questionPost({ state }) {
      let { title, description } = state.form
      Axios
        .post(`${url}/questions`, { title, description })
        .then(({data}) => {
          console.log(data, '<<<<<<')
          console.log({ title, description })
          this.commit('setLocationPostHome')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    allQuestion({ state }) {
      Axios
        .get(`${url}/questions`)
        .then(({ data }) => {
          console.log(data)
          state.questions = data
        })
        .catch((err) => {
          console.log(err)
        })
    },

    questionSpesific({ state }, payload){
      console.log(payload, '<<<<<<<<')
      Axios
        .get(`${url}/questions/${payload}`)
        .then(({data}) => {
          console.log(data)
          state.QnA.id = payload
          state.QnA.title = data.title
          state.QnA.description = data.description
          state.QnA.upvotes = data.upvotes
          state.QnA.downvotes = data.downvotes
          state.QnA.answer = data.answer
          console.log(state.QnA, 'statenya ini')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    upvotesClick({ state }, payload){
      console.log(state.user.id, payload, localStorage.token)
      Axios
        .put(`${url}/questions/upvote/${payload}`, state.user.id, { headers: { token : localStorage.token }})
        .then(({data}) => {
          state.QnA.upvotes = data.upvotes
          state.QnA.downvotes = data.downvotes
          console.log(data, 'masuk')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    downvotesClick({ state }, payload) {
      Axios
        .put(`${url}/questions/downvote/${payload}`, state.user.id, { headers: { token : localStorage.token }})
        .then(({data}) => {
          state.QnA.upvotes = data.upvotes
          state.QnA.downvotes = data.downvotes
          console.log(data, 'masuk')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    answerPost({ state }, payload) {
      let { title, description } = state.form
      Axios
        .post(`${url}/answers`, { title, description , belongsTo: localStorage.userId, questionId: payload }, { headers: { token: localStorage.token }})
        .then(({data}) => {
          state.QnA.answer.push(data)
          state.form.title = ''
          state.form.description = ''
          
          Axios
            .put(`${url}/questions/postAnswer/${payload}`, { data })
            .then((res) => {
              this.commit('setLocationInside')
              console.log(res, 'ini balikan data yang di dalem')
            })
            .catch((err) => {
              console.log(err)
            })
        })
        .catch((err) => {
          console.log(err)
        })
    },

    deleteQuestion({ state }, payload){
      Axios
        .delete(`${url}/questions/delete/${payload}`)
        .then((data) => {
          state.QnA.id = payload
          state.QnA.title = data.title
          state.QnA.description = data.description
          state.QnA.upvotes = data.upvotes
          state.QnA.downvotes = data.downvotes
          state.QnA.answer = data.answer
          this.commit('setIsLogin')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteAnswer({ state }, payload){
      // console.log(payload)
      Axios
        .delete(`${url}/answers/${payload.questionId}/delete/${payload.answerId}`)
        .then(({ data }) => {
          console.log(JSON.stringify(data.data))
          state.QnA = {id: data.data._id, ...data.data}
          this.commit('setLocationInside')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    upvotesClickAnswers({ state }, payload){
      Axios
        .put(`${url}/answers/upvote/${payload}`, state.user.id, { headers: { token : localStorage.token }})
        .then(({data}) => {
          state.answer.upvotes = data.upvotes
          state.answer.downvotes = data.downvotes
          this.commit('setLocationInside')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
});
