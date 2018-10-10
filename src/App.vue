<template>
  <div>
    <Navbar :routes="routes"></Navbar>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Misc from "@components/Misc.vue";
import Navbar from "@components/Navbar.vue";
import { routes } from "@services/navigation";

export default {
  name: "app",
  components: {
    Misc,
    Navbar
  },
  data() {
    return {
      routes
    }
  }
};
</script>

<style>
</style>
