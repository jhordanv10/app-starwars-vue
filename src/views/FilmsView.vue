<template>
  <div class="container mt-4">
    <h1 class="d-flex justify-center black--text">Films</h1>
    <Loading v-if="films.length <= 0 " />
    <CardFilms :films="films" v-else/>
  </div>
</template>

<script>
import axios from "axios";
import CardFilms from "@/components/molecules/CardFilms.vue";
import Loading from "@/components/atoms/Loading.vue";

export default {
  name: "films",
  components: {
    CardFilms,
    Loading,
  },

  data() {
    return {
      films: [],
    };
  },

  created () {
    this.getFilms();
  },

  methods: {
    getFilms() {
      const url = "https://swapi.dev/api/films/?format=json";
      axios.get(url).then((response) => {
        this.films = response.data.results;
      });
    },
  },

};
</script>

<style></style>

