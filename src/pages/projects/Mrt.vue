<template>
  <div class="inner">
    <router-link to="/">
      <div class="big_button">Back</div>
    </router-link>
    <Note
      name="Sdelat MRT 👨‍⚕️"
      full_text="Medical website. Kind of 'Uber for MRI'. Wordpress website, created for search engine traffic. ~20k pages"
      site_link="https://sdelatmrt.ru"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Note from '@/components/Note.vue';

export default {
  name: 'MRT',
  metaInfo: {
    title: 'Grigiriy - Web-dev - About the project sdelatmrt.ru',
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
