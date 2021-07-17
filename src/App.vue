<template>
  <helper-navbar />
  <router-view></router-view>
  <helper-footer />
</template>

<script>
import Home from './pages/Home.vue'
import HelperNavbar from './components/HelpersNavbar.vue'
import HelperFooter from './components/HelperFooter.vue'
export default {
  components: { Home, HelperNavbar, HelperFooter }
}
</script>