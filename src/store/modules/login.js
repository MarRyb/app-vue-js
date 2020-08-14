export default {
    actions: {
        getToken({ commit }) {
            return commit('setToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
        }
    },
    mutations: {
        setToken(state, token){
            state.token = token;
        }
    },
    state: {
        token: ''
    },
    getters: {
        token(state) {
            return state.token
        }
    },
}