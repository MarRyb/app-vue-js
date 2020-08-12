<template>
  <div class="profile-page">
    <p v-for="item in albumsList" :key="item.id">
      <AlbumItem :item="item"></AlbumItem>
    </p>
  </div>
</template>

<script>
import { AlbumService } from '@/common/api.service';
import AlbumItem from '@/components/AlbumItem';

export default {
  name: "Albums",
  components: {
    AlbumItem
  },
  data: function() {
    return {
      albumsList: []
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    }
  },
  created() {
    var params = { userId: this.userId, _embed: 'photos' }
    AlbumService.query(params).then(({data}) => this.albumsList = data);
  }
};
</script>
