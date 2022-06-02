<template>
  <v-col>
    <v-card
      color="#0000"
      dark
      v-for="film in films"
      :key="film.episode_id"
      class="mb-5 mt-5 rounded-lg black--text card"
    >
      <v-card-title class="text-h5"> {{ film.title }}</v-card-title>

      <v-card-subtitle class="black--text">
        {{ film.release_date }}</v-card-subtitle
      >
      <v-card-text class="black--text">{{ film.producer }}</v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["films"],
};
</script>

<style>
.card {
  transition: all 0.4s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
}
</style>
