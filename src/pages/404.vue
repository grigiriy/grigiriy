<template>
  <div class="contact">
    <router-link to="/">
      <div class="big_button">Back</div>
    </router-link>
    <transition appear name="fade">
      <div class="container">
        <h1>🤔 404 🧐</h1>
        <h2>There's nothing here...</h2>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Contact',
  metaInfo: {
    title: 'Front-end Developer. Grigiriy',
    meta: [
      {
        name: 'keywords',
        content:
          'web-developement, wed-design, веб-дизайн, веб-разработка, созлание сайтов',
      },
      {
        name: 'description',
        content:
          "I'm web-developer from Moscow. Love to create some wired stuff, and usually open for different offers",
      },
    ],
  },
};
</script>
