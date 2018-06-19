<template>
  <div class="home">
      <v-head></v-head>
  </div>
</template>

<script>
// @ is an alias to /src
import vHead from "../components/public/vHead"

export default {
  name: 'home',
  components: {
      vHead
  }
}
</script>
<style lang="less" scoped>
   .home{
       color: red;
   }
</style>
