<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link
                    class="nav-item nav-link"
                    :class="{active: path.route === $route.path}"
                    v-for="path of paths"
                    :to="path.route"
                    :key="path.name"
                >{{path.name}}</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    paths: {
      type: Array
    }
  },
  mounted() {
    console.log(this.paths);
  }
};
</script>

<style>
</style>
