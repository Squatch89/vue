<template>
  <div class="test">
    <h1>{{msg}}</h1>
    <h2>Test Style</h2>
  </div>
</template>

<script>
  export default {
    name: 'TestWorld',
    data() {
      return {
        msg: 'This is all a test'
      }
    }
  }
</script>

<style scoped>
  h1
  {
    font-size: 56px;
  }
  
  h2
  {
    color: red;
  }
</style>
