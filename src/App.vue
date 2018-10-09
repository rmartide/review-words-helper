<template>
  <div>
      <Navbar></Navbar>
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <router-view></router-view>
  </div>
</template>

<script>
import Misc from '@components/Misc.vue';
import Navbar from '@components/Navbar.vue';

export default {
  name: "app",
  components: {
    Misc,
    Navbar
  }
};
</script>

<style>
</style>
