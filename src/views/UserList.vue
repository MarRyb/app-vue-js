<template>
  <div>
    <div class="container">
        <h3> User List</h3>
        <hr>
        <router-link :to="{ name: 'userCreate' }" class="btn btn-success">Create User</router-link>
        <div class="row">
          <div class="col-sm" v-for="item in userList" :key="item.id">
            
            <hr>
            <div class="card" style="width: 100%; margin: 0 auto;">
              <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
                <p class="card-text">email: {{item.email}}</p>
                <p class="card-text">username: {{item.username}}</p>
                <p class="card-text">website: {{item.website}}</p>
                <p class="card-text">phone: {{item.phone}}</p>
                <router-link :to="{ name: 'posts', params: {userId: item.id} }" class="btn btn-primary btn-mrg">Sidn User</router-link>
                <button type="button" class="btn btn-danger" v-on:click="removeUser(item)">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>


</template>

<script>
  import { UserService } from "@/common/api.service";

  export default {
    name: "UserList",
    data: function () {
      return {
        userList: []
      };
    },
    created() {
      UserService.query().then(({ data }) => {
        return this.userList = data;
      })
    },
    methods: {
      removeUser: function (item) {
         UserService.delete(item.id).then(() => {
          return alert('Удаляется с игры ' + item.name);
        })
      }
    }
  };
</script>


<style>
  .btn-mrg {
    margin: 5px;
  }
</style>