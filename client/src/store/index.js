import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Binance from "@/store/modules/binance";
import BSScan from "@/store/modules/bsScan";
export default new Vuex.Store({
  modules: {
    Binance,
    BSScan
  }
})
