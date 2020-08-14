import Vue from "vue";
import Router from "vue-router";
import store from '../store'

const ifAuth = (to, from, next) => {
  if (store.getters.token) {
    next()
    return
  }
  next('/sign-in')
}

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'userList',
      path: "/",
      component: () => import("@/views/UserList"),
      beforeEnter: ifAuth
    },
    {
      name: "user",
      path: "/user/:userId",
      component: () => import("@/views/User"),
      children: [
        {
          name: "posts",
          path: "",
          component: () => import("@/views/Post")
        },
        {
          name: "albums",
          path: "albums",
          component: () => import("@/views/Albums")
        },
      ]
    },
    {
      name: "userCreate",
      path: "/user-create",
      component: () => import("@/views/UserCreate")
    },

    {
      name: "post",
      path: "/post",
      component: () => import("@/views/User")
    },
    {
      name: "signIn",
      path: "/sign-in",
      component: () => import("@/views/Authorization")
    }
  ]
});
