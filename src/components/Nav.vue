<template>
  <div id="nav">
    <template v-for="route in routes">
      <router-link v-if="route.name" :to="route.path" :key="route.path">{{
        route.name
      }}</router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      routes: []
    };
  },
  created() {
    this.routes = this.$router.options.routes.map(i => {
      return {
        path: i.path,
        name: i.name
      };
    });
  }
};
</script>

<style lang="scss">
#nav {
  padding: 1rem;

  a {
    font-weight: bold;
    color: $colorMain;
    margin-right: 1rem;

    &.router-link-exact-active {
      color: $colorSecondary;
    }
  }
}
</style>
