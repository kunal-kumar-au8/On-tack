import Vue from "vue";
import Vuex from "vuex";
import VueResource from 'vue-resource';
const axios = require('axios');

Vue.use(Vuex, VueResource);
const url = 'https://backend-bikex.herokuapp.com/api'


export default new Vuex.Store({
    state:{
        brokers:[]
    },
    mutations:{
        FETCH_BROKER(state,brokers){
            state.brokers = brokers;
        }
    },
    actions:{
        loadBroker({commit}) {
            commit('LOAD_STATUS', true);
            axios.get(url +'/broker').then(result => {
              commit('FETCH_BROKER', result.data);
              commit('LOAD_STATUS', false);
            }).catch(error => {
              throw new Error(`API ${error}`);
            });
          }

    },
    getters:{
        baseUrl(){
        return 'https://backend-bikex.herokuapp.com/api/broker'
        }
    }
})