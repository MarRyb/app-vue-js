<template>
  <div class="row">
    <div class="col-sm">
      <hr>
      <div class="card" style="width: 100%; margin: 0 auto;">
        <div class="card-body">
          <h5 class="card-title">{{postItem.title}}</h5>
          <p class="card-text">email: {{postItem.body}}</p>
          <hr>
          <b>Comments:</b>
          <div class="comments" v-for="item in postItem.comments" :key="item.id">
            <p class="card-text">phone: {{item.name}}</p>
            <p class="card-text">phone: {{item.body}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    postItem: {
      type: Object
    }
  },
}
</script>

<style scoped>

</style>
