import Vuex from 'vuex'
import modules from './modules'

const Store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules,
  })
}

export default Store
