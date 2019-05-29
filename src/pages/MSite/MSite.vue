<!--  -->
<template>
  <button @click="$router.push('/shop')" class="btn">去详情</button>
</template>

<script>
// import {maState} from 'vuex'
export default {
  data () {
    return {
    };
  },
  methods: {
    goDetail() {

    }
  },
  mounted() {
    // this.$store.dispatch('getCategorys');   
  },

  computed: {
    // ...mapState(['address', 'categorys'])
  }

}

</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
  .btn {
    background #ccc;
    color: #222;
    font-size: 15px;
    padding: 4px;
    text-align: center;
    margin: 0 auto;

  }
</style>