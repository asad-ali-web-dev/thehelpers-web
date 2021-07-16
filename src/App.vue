<template>
  <helper-navbar />
  <router-view></router-view>
</template>

<script>
import Home from './pages/Home.vue'
import HelperNavbar from './components/HelpersNavbar.vue'
export default {
  components: { Home, HelperNavbar }
}
</script>