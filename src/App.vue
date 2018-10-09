<template>
  <div>
    <Navbar :paths="paths"></Navbar>
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
import { paths } from "@services/navigation";

export default {
  name: "app",
  components: {
    Misc,
    Navbar
  },
  data() {
    return {
      paths
    }
  }
};
</script>

<style>
</style>
