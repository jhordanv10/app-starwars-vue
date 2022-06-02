<template>
  <div class="container mt-4">
    <h1 class="d-flex justify-center black--text">People</h1>
    <Loading v-if="people.length <= 0 " />
    <CardPeople :people="people"/> 
  </div>
</template>


<script>
import axios from "axios";
import Loading from "@/components/atoms/Loading.vue";
import CardPeople from "@/components/molecules/CardPeople.vue";

export default {
  name: "starships",
  components: {
    Loading,
    CardPeople,
  },

  data() {
    return {
      people: [],
    };
  },

  created () {
    this.getPeople();
  },

  methods: {
    getPeople() {
      const url = "https://swapi.dev/api/people/?format=json";
      axios.get(url).then((response) => {
        this.people = response.data.results;
      });
    },
  },

};
</script>

<style></style>
