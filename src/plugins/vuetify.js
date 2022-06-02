import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#BDBDBD',
        secondary: '#656d78',
        black:'#000000',
        blue:'#01579B',
        green:'#004D40',
        yellow:'#FFAB00',
        red:'#A13333',
        orange:'#F4511E'

      },
    },
  },
});
