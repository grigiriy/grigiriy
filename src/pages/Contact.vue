<template>
  <div class="contact">
    <router-link to="/">
      <div class="big_button">Back</div>
    </router-link>
    <transition appear name="fade">
      <div class="container">
        <h1>Contact</h1>
        <p>
          Hey. My name is Grig<span style="color:yellow">o</span>riy, I'm
          web-developer from Moscow. Love to create some wired stuff, but
          usually open for different offers.
        </p>
        <p>I'm interested in remote front-end projects on Vue or React.</p>
        <p>
          Feel free to contact me. There are three different ways to do this:
        </p>
        <p class="h3 pt">
          <span role="img" aria-label>📱</span> Telegram
          <a href="https://t.me/gmalyshev" target="_blank" class="blank"
            >@gmalyshev</a
          >
        </p>
        <p class="h3">
          <span role="img" aria-label>📧</span> e-mail
          <a href="mailto:grigiriy.malyshev@gmail.com" class="blank"
            >grigiriy.malyshev@gmail.com</a
          >
        </p>
        <p class="h3">
          <span role="img" aria-label>🧑‍💻</span> github
          <a href="https://github.com/grigiriy" class="blank" target="_blank"
            >@grigiriy</a
          >
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Contact',
};
</script>
