<template>
  <div class="home">
    <router-link to="/contact">
      <div class="big_button">📝 Contact</div>
    </router-link>
    <transition appear name="fade">
      <div class="container">
        <h1>Yo! I'm Grigiriy</h1>
        <h2>Digital-artist, Web-developer etc</h2>
        <h3>Here's some of my projects</h3>
        <main class="notes">
          <Card
            name="Maria Medvedik 👩‍🎨"
            main_info="Artists portfolio website"
            more="Web application made with React and Gatsby. With a tiny 'design-clothes-constructor'."
            site_link="https://mariamedvedik.ru"
            url="medvedik"
          />
          <Card
            name="Pick-a-Dog 🐶"
            main_info="Fun-site to help people find new friends"
            more="Web application made with React and Gatsby. "
            site_link="https://pick-a-dog.ru"
            url="dogs"
          />
          <Card
            name="Undergo MRI 👨‍⚕️"
            main_info="Medical website"
            more="Kind of 'Uber for MRI'. Wordpress website, created for search engine traffic. ~20k pages."
            site_link="https://sdelatmrt.ru"
            url="mrt"
          />
          <Card
            name="Keep travel ✈️"
            main_info="Travel agency website"
            more="Not just a simple Travel Agency Website. It alwas enspires me for a new travels"
            site_link="https://keep-travel.ru"
            url="travel"
          />
          <!-- <Card name="Huy Brand" stack="['ReactJs','GatsbyJs']" main_info />
          <Card name="Masha-blin" stack="['ReactJs','GatsbyJs']" main_info />-->
        </main>
        <p class="mb-5">
          Still looking for time to write about other projects...
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue';

export default {
  name: 'Index',
  metaInfo: {
    title:
      "Yo! I'm Grigiriy. 🧑‍💻 Digital-artist, Web-developer etc. Here's some of my projects.",
    meta: [
      {
        name: 'keywords',
        content:
          'web-developement, wed-design, веб-дизайн, веб-разработка, созлание сайтов',
      },
      {
        name: 'description',
        content:
          "Yo! I'm Grigiriy. Digital-artist and web-developer from Moscow",
      },
    ],
  },
  components: {
    Card,
  },
};
</script>
<style scoped lang="scss">
h1,
h2,
h3,
p {
  text-align: center;
}
.mb-5 {
  margin-bottom: 5rem;
}
</style>
