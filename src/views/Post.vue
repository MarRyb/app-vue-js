<template>
  <div class="profile-page">
    <div v-for="item in postList" :key="item.id">
      <PostItem :postItem="item"> </PostItem>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem";
import { PostService } from "@/common/api.service";

export default {
  name: "Post",
  data: function () {
    return {
      postList: []
    };
  },
  created() {
    var params = {userId: this.userId, _embed: 'comments'}
    PostService.query(params).then(({ data }) => {
      return this.postList = data;
    })
  },
  components: {
    PostItem
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  }
};
</script>
