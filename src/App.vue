// 模板
<template>
  <div id="app">
    <router-view></router-view>
    <!-- <FooterGuide /> -->
  </div>
</template>

// 逻辑
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {mpaAcitons} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  mounted() {
    // this.$store.dispatch('getAddress');
    // this.getAddress();
  },
  methods: {
    // ...mapActions(['getAddress'])
  },
  components: {
    FooterGuide
  }
}
</script>

// 样式
<style scoped>
h1 {
  color: green;
}
</style>
