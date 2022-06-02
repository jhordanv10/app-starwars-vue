<template>
  <div class="loading">
    <figure class="loading-figure">
      <img
        class="loading-figure-img"
        src="@/assets/StarWars.png"
        alt="loading"
      />
    </figure>
    <div class="loading-spinner"></div>
  </div>
</template>

<style scoped>
.loading {
    margin-top: 30px;
}
.loading-figure {
  text-align: center;
  margin-bottom: 0px;
}
.loading-figure-img {
  width: 50px;
  height: 50px;
}
.loading-spinner {
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 10px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-left-color: #A13333;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
