import { UserService } from "@/common/api.service";

export default {
    actions: {
        getListUsers({ commit }) {
            UserService.query().then(({ data }) => {
                return commit('setListUsers', data);
            })
        },
        removeListUsers({ commit }, item){
            UserService.delete(item.id).then(() => {
                return commit('deleteListUsers', item);
            })
        },
        createUser({ commit }, item) {
            UserService.post(item).then(() => {
                return commit('createNewUser', item);
              })
        }
    },
    mutations: {
        setListUsers(state, list){
            state.users = list;
        },
        deleteListUsers(state, item) {
            const index = state.users.indexOf(item);
            state.users.splice(index, 1);
        },
        createNewUser(state, item) {
            state.users.push(item);
        }
    },
    state: {
        users: []
    },
    getters: {
        userList(state) {
            return state.users
        }
    },
}