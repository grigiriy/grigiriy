<template>
  <div class="inner">
    <router-link to="/">
      <div class="big_button">Back</div>
    </router-link>
    <Note
      name="Pick-a-Dog 🐶"
      full_text="This project started as a joke. When the quarantine starts in russia, there were only a couple of ways to go outside. Dog walks - one of them. The joke was quite simple - I create a website, where people can rent out dogs for a walk. I want to push it for medias 'to get likes and respect'. But then I realized that, we've got a problem in our society - lots of kennels and homeless dogs and I decided to pivot the project. And Here it is."
      site_link="https://pick-a-dog.ru"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Note from '@/components/Note.vue';

export default {
  name: 'Dogs',
  components: {
    Note,
  },
};
</script>
