<template>
  <div class="container mt-4">
    <h1 class="d-flex justify-center black--text">StarShips</h1>
    <Loading v-if="starships.length <= 0 " /> 
    <CardStarShips :starships="starships"/>

  </div>
</template>

<script>
import axios from "axios";
import Loading from "@/components/atoms/Loading.vue";
import CardStarShips from "@/components/molecules/CardStarShips.vue";

export default {
  name: "starships",
  components: {
    Loading,
    CardStarShips,
  },

  data() {
    return {
      starships: [],
    };
  },

  created () {
    this.getStarships();
  },

  methods: {
    getStarships() {
      const url = "https://swapi.dev/api/starships/?format=json";
      axios.get(url).then((response) => {
        this.starships = response.data.results;
      });
    },
  },

};
</script>

<style></style>
