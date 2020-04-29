<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
body {
  margin: 0;
  min-height: 100vh;
  background: #333;
}
#app {
  font-family: 'Roboto Condensed', sans-serif;
  // }
  // #app * {
  color: #fff;
}
h1,
.h1 {
  font-size: 1.8em;
}
h2,
.h2 {
  font-size: 1.5em;
}
h3,
.h3 {
  font-size: 1.2em;
}
a {
  text-decoration: none;
  color: inherit;
  &.blank {
    transition: all 1s;
    &:hover {
      transition: all 0.2s;
      color: plum;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.big_button {
  width: 80px;
  text-align: center;
  background-color: rebeccapurple;
  position: fixed;
  padding: 30px;
  border-radius: 40px;
  margin: 0 30px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    border-radius: 30px;
    box-shadow: 1px 1px 30px 1px rgb(40, 40, 40);
  }
  @media (max-width: 1024px) {
    bottom: 20px;
    right: 0;
  }
}
.container {
  max-width: 768px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 1200px) {
    max-width: 455px;
  }
}
.pt {
  padding-top: 1rem;
}
button {
  color: #fff;
  background-color: rebeccapurple;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    border-radius: 5px;
    box-shadow: 1px 1px 30px 1px rgb(40, 40, 40);
  }
}
</style>
