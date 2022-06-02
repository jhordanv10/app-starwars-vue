<template>
  <v-container>
    <v-row justify="space-around">
      <v-card
        width="400"
        class="my-4 mx-3 rounded-lg"
        v-for="p in people"
        :key="p.id"
      >
        <v-card-title class="white--text mt-8 red--text">
          <p class="ml-3 ">{{ p.name }} - <small> {{p.birth_year}} </small></p> <br>
        </v-card-title>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Appearance</div>

        <!-- eye color -->
          <v-timeline align-top dense>
            <v-timeline-item :color="p.eye_color">
              <div>
                <div class="font-weight-normal">
                  <strong>Eye color </strong>
                </div>
                <div>{{ p.eye_color }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>

        <!-- gender -->
          <v-timeline align-top dense >
            <v-timeline-item color="grey" :class="[p.gender==='male' ? 'blue--text' : p.gender==='female' ? 'pink--text' : 'black--text']">
              <div>
                <div class="font-weight-normal">
                  <strong>Gender</strong>
                </div>
                <div>{{ p.gender }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>

        <!-- mass and height -->
          <v-timeline align-top dense>
            <v-timeline-item color="black">
              <div>
                <div class="font-weight-normal">
                  <strong>Mass:</strong>  <small> {{ p.mass }} </small> 
                </div>
                  <strong> Height:</strong>  <small> {{ p.height }} </small>
              </div>
            </v-timeline-item>
          </v-timeline>

        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["people"],
  data() {
    return {
    };
  },

};
</script>
<style></style>
