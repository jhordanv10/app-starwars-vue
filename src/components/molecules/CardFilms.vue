<template>
  <v-col>
    <v-card
      color="#0000"
      dark
      v-for="film in films"
      :key="film.episode_id"
      class="card mb-5 mt-5 rounded-lg black--text"
      @click="info(film)"
      >
      <v-card-title class="text-h5"> {{ film.title }}</v-card-title>

      <v-card-subtitle class="black--text">{{ film.release_date }}</v-card-subtitle>

      <v-card-text class="black--text">{{ film.producer }}</v-card-text>

    </v-card>

  </v-col>
</template>

<script>
import swal from 'sweetalert';

export default {
  props: ["films"],
  data: () => ({
    reveal: false,
  }),
  methods: {
    info(film) {
      const CharactersLength = film.characters.length
      const PlanetsLength = film.planets.length
      const StarShipsLength = film.starships.length
      const VehiclesLength = film.vehicles.length
      const SpeciesLength = film.species.length

      swal("Movie data", 
        `Characthers: ${CharactersLength}
          Planets: ${PlanetsLength}
          StarShips: ${StarShipsLength}
          Vehicles: ${VehiclesLength}
          Species: ${SpeciesLength}`
        );

    }
  },

};
</script>

<style >

.swal-modal {
    margin: 0px;
}
.swal-overlay  {
  backdrop-filter: blur(3px); 
} 
.swal-button {
    background-color: #630606;
    border: 1px solid #630606;
    transition: all ease-in-out 500ms;
}

.swal-title {
    color: #000;
    font-weight: bold;
    margin-top: 20px;
    
}
.swal-text {
    color: #000;
    font-size: 15px;
    text-align: center;
    padding: 5px;
    line-height: 22px;
}

</style>
