import data from '@/data/data.json'
export default {
  listHistory({ commit }) {
    const resp = data.items
    commit('set_list_history', resp)
  },
}
