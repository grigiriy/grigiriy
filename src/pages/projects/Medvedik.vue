БеуьздфеуЮ
<template>
  <div class="inner">
    <router-link to="/">
      <div class="big_button">Back</div>
    </router-link>
    <Note
      name="Maria Medvedik 👩‍🎨"
      full_text="Maria Medvedik - Embroidery artist from Moscow. She creates amazing artworks, you must go down below to check them out."
      site_link="https://mariamedvedik.ru"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Note from "@/components/Note.vue";

export default {
  name: "Medvedik",
  metaInfo: {
    title: "Grigiriy - Web-dev - About the project MariaMedvedik.ru",
    meta: [
      {
        name: "keywords",
        content:
          "web-developement, wed-design, веб-дизайн, веб-разработка, созлание сайтов"
      },
      {
        name: "description",
        content:
          'Web application made with React and Gatsby. With a tiny "design-clothes-constructor". Maria Medvedik - embroidery artist from Moscow...'
      }
    ]
  },
  components: {
    Note
  }
};
</script>
