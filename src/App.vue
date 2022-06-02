<template>
  <v-app>
    <v-footer app color="primary" class="d-flex justify-center pt-5 pb-5 rounded-t-xl">
      <v-btn
        text
        class="mr-2 ml-2 rounded-50"
        :color="color"
        v-for="{ id, rute, icon } in rutes"
        :key="id"
        @click="selectRute(rute)"
      >
        <v-icon color="secondary">{{ icon }}</v-icon>
        <!-- <v-text>{{name}}</v-text> -->
      </v-btn>
    </v-footer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  props: {
    name: String,
  },
  data: () => ({
    rutes: [
      {
        id: 1,
        name: "home",
        rute: "/",
        icon: "mdi-home",
      },
      {
        id: 2,
        name: "films",
        rute: "/films",
        icon: "mdi-movie-open",
      },
      {
        id: 3,
        name: "starships",
        rute: "/starships",
        icon: "mdi-space-station",
      },
      {
        id: 4,
        name: "people",
        rute: "/people",
        icon: "mdi-account-group",
      },
    ],
  }),
  methods: {
    selectRute(r) {
      this.$router.push(r);
    },
  },
};
</script>
<style scoped>
  
</style>
