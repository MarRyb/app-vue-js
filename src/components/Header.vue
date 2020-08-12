<template>
  <div class="header">
      <h2>Header</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
    .header{
        color: #2196f3;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 60px;
        background: #fff;
        margin-bottom: 40px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.05)!important;
    }
</style>
