import { UserService } from "@/common/api.service";

export default {
    actions: {
        getListUsers(context) {
            UserService.query().then(({ data }) => {
                return context.commit('setListUsers', data);
              })
        }
    },
    mutations: {
        setListUsers(state, list){
            state.users = list;
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