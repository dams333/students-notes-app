import { createStore } from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8001/'

const store = createStore({
  state: {
    headerName: 'Accueil'
  },
  getters: {
    
  },
  mutations: {
      
  }
});

export default store;