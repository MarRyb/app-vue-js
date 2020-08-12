<template>
  <div class="container">
    <router-link :to="{ name: 'userList' }" class="btn btn-info float-right"> {{'Back'}} </router-link>
    <h3> {{user.name}}</h3>
    <span>{{user.email}}</span>
    <hr>
   <ul class="nav nav-tabs">
    <li class="nav-item">
      <router-link :to="{ name: 'posts' }" class="nav-link" exact-active-class="active"> {{'Posts'}} </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'albums' }" class="nav-link" exact-active-class="active"> {{'Albums'}} </router-link>
    </li>
  </ul>
  <div> <router-view></router-view> </div>
  </div>
</template>

<script>
import { UserService } from '@/common/api.service';
export default {
  name: "User",
  data() {
    return {
      user: {}
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  created() {
    UserService.get(this.userId).then(({data}) => this.user = data)
  }
};
</script>
