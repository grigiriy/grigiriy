<template>
  <transition appear name="fade">
    <div class="container">
      <h1>{{ name }}</h1>
      <p class="article">
        {{ full_text }}
      </p>
      <div class="links_below">
        <a v-bind:href="site_link" target="_blank" >
          <button>Go to Website</button>
        </a>
        <router-link to="/contact">
          <button>
            Love it! Want the same!
          </button>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Note',
  props: {
    name: String,
    full_text: String,
    site_link: String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ledger&display=swap');
.article {
  font-family: 'Ledger', serif;
  line-height: 2.2;
}
.links_below{
padding-top: 20px;
display: flex;
justify-content: space-evenly;
}
</style>

</style>
