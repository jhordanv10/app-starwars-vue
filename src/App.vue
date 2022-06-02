<template>
  <v-app>
    <v-footer app color="primary" class="d-flex justify-center pt-5 pb-5">
      <v-btn
        text
        class="mr-2 ml-2 rounded-50"
        :color="color"
        v-for="{ id, rute, icon, color } in rutes"
        :key="id"
        @click="selectRute(rute)"
      >
        <v-icon :class="color">{{ icon }}</v-icon>
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
        color: "red--text",
      },
      {
        id: 2,
        name: "films",
        rute: "/films",
        icon: "mdi-video",
        color: "red--text",
      },
      {
        id: 3,
        name: "starships",
        rute: "/starships",
        icon: "mdi-star",
        color: "red--text",
      },
      {
        id: 4,
        name: "vehicles",
        rute: "/vehicles",
        icon: "mdi-car",
        color: "red--text",
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
