<template>
  <div class="container mt-4">
    <h1 class="d-flex justify-center mb-16 black--text">Home</h1>
    <section>
      <template>
        <div class="d-flex flex-column justify-space-between align-center">
          <v-slider
            v-model="width"
            class="align-self-stretch"
            color="secondary"
            min="200"
            max="500"
            step="1"
          ></v-slider>

          <v-img
            :aspect-ratio="16 / 9"
            :width="width"
            src="../assets/death-star.png"
          ></v-img>
        </div>
      </template>
      <h2>¡Welcome to the StarWars App!</h2>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      width: 250,
    }),
  }
</script>

<style scoped>
.home-img {
  display: flex;
  justify-content: center;
}
img {
  max-width: 300px;
  max-height: 300px;
}
h2 {
  text-align: center;
  margin-top: 50px;
}
</style>