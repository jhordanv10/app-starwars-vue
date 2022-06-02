<template>
  <v-col class="card-starships">
    <v-card
      class=" card my-2 mx-3 rounded-lg black--text card"
      max-width="344"
      v-for="starship in starships"
      :key="starship.model"
    >
      <v-card-title> {{ starship.name }} </v-card-title>
      <v-card-subtitle> {{ starship.manufacturer }}</v-card-subtitle>
      <v-card-text>
        <strong>Passengers:</strong>  {{ starship.passengers }} <br />
        <strong>Length:</strong>  {{ starship.length }} <br />
        <strong>Class:</strong>  {{ starship.starship_class }} <br />
        <strong>Max atmospheric speed: </strong>  {{ starship.max_atmosphering_speed }} <br />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["starships"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  transition: all 0.4s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
} 
.card-starships {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  padding: 30px;
}
</style>
