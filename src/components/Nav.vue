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
  background-color: $colorTheme;
  border-bottom: .5rem solid $colorThemeDark;

  a {
    font-weight: bold;
    color: $colorThemeText;
    margin-right: 1rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: darken($color: $colorThemeDark, $amount: 20);
    }
  }
}
</style>
