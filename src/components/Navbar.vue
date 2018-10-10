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
                    :class="{active: route.path === $route.path}"
                    v-for="route of routes"
                    :to="route.path"
                    :key="route.name"
                >{{route.name}}</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    routes: {
      type: Array
    }
  }
};
</script>

<style>
</style>
