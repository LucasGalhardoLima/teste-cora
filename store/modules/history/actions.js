export default {
  async listHistory({ commit }) {
    try {
      const { data } = await this.$axios.get('items')
      commit('set_list_history', data)
      commit('set_ref_list', data)
    } catch (e) {
      return {
        message: 'erro ao buscar items',
      }
    }
  },

  listHistoryByStatus({ commit, state }, option) {
    let newArr = []
    if (option !== 'all')
      state.ref_list.forEach((item) =>
        item.items.forEach((element) => {
          if (option === 'future' && element.scheduled) newArr.push(item)
          if (option !== 'future' && element.entry === option) newArr.push(item)
        })
      )
    else newArr = state.ref_list

    commit('set_list_history', newArr)

    return newArr
  },

  async searchListHistory({ commit, state, dispatch }, { search, option }) {
    let newArr = []
    if (search)
      state.ref_list.forEach((item) =>
        item.items.forEach((element) => {
          if (option !== 'all') {
            if (
              ((option === 'future' && element.scheduled) ||
                (option !== 'future' && element.entry === option)) &&
              String(item.amountTotal).match(search)
            )
              newArr.push(item)
            if (
              ((option === 'future' && element.scheduled) ||
                (option !== 'future' && element.entry === option)) &&
              element.actor.toUpperCase().match(search.toUpperCase())
            )
              newArr.push(item)
            if (
              ((option === 'future' && element.scheduled) ||
                (option !== 'future' && element.entry === option)) &&
              String(element.amount).match(search)
            )
              newArr.push(item)
          } else {
            if (String(item.amountTotal).match(search)) newArr.push(item)
            if (element.actor.toUpperCase().match(search.toUpperCase()))
              newArr.push(item)
            if (String(element.amount).match(search)) newArr.push(item)
          }
        })
      )
    else {
      newArr = await dispatch('listHistoryByStatus', option)
    }

    commit('set_list_history', newArr)
  },
}
