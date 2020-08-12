<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <div class="gallery">
                <img :src="photo.thumbnailUrl" v-for="photo in item.photos" :key="photo.id">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AlbumItem',
  props: {
    item: {
      type: Object
    }
  },
}
</script>

<style scoped>
    .gallery {
        margin: -15px;
        
    }
    .gallery img {
        margin: 5px;
        border-radius: 150px;
        border: 10px solid #eff4f8;
    }
</style>