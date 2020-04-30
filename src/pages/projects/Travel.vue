БеуьздфеуЮ
<template>
  <div class="inner">
    <router-link to="/">
      <div class="big_button">Back</div>
    </router-link>
    <Note
      name="Keep travel ✈️"
      full_text="Not just a simple Travel Agency Website. It alwas enspires me for a new travels"
      site_link="https://sdelatmrt.ru"
      private="true"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Note from '@/components/Note.vue';

export default {
  name: 'travel',
  metaInfo: {
    title: 'Grigiriy - Web-dev - About the project keep-travel.ru',
    meta: [
      {
        name: 'keywords',
        content:
          'web-developement, wed-design, веб-дизайн, веб-разработка, созлание сайтов',
      },
      {
        name: 'description',
        content: "Medical website. Kind of 'Uber for MRI'...",
      },
    ],
  },
  components: {
    Note,
  },
};
</script>
