import { UserService } from "@/common/api.service";

export default {
    actions: {
        getListUsers(context) {
            UserService.query().then(({ data }) => {
                return context.commit('setListUsers', data);
            })
        },
        removeListUsers(context, item){
            UserService.delete(item.id).then(() => {
                return context.commit('deleteListUsers', item);
            })
        },
        createUser(context, item) {
            UserService.post(item).then(() => {
                return context.commit('createNewUser', item);
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