<template>
  <div class="card">
    <div class="card-header">
      <p class="h2">
        <router-link class="blank" to="/note">{{ name }}</router-link>
      </p>
    </div>
    <div class="card-body">
      <p class="h3">{{ main_info }}</p>
      <p>{{ more }}</p>
    </div>
    <div class="card-footer">
      <a v-bind:href="site_link" target="_blank"><button>Website</button></a>

      <router-link v-bind:to="'projects/' + url"
        ><button>About</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    main_info: String,
    more: String,
    site_link: String,
    url: String,
  },
  //   data() {
  //     show: true;
  //   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border: solid 1px #efefef;
  max-width: 300px;
  margin: 0 auto;
  color: #fff;
  margin-bottom: 50px;
  padding: 20px;
  padding-top: 0;
  .card-header {
    border-bottom: solid 1px #efefef;
  }
  .card-footer {
    border-top: solid 1px #efefef;
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
