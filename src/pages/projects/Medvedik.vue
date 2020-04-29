БеуьздфеуЮ
<template>
  <div class="inner">
    <router-link to="/">
      <div class="big_button">Back</div>
    </router-link>
    <Note
      name="Maria Medvedik 👩‍🎨"
      full_text="Maria Medvedik - Embrodary artist from Moscow. She creates amazing artworks, you must go down below to check them out."
      site_link="https://mariamedvedik.ru"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Note from '@/components/Note.vue';

export default {
  name: 'Medvedik',
  components: {
    Note,
  },
};
</script>
