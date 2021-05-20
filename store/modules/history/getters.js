export default {
  getListHistory: (state) => {
    // state.list_history.forEach((item) => {
    //   item.amountTotal = parseFloat(
    //     [
    //       String(item.amountTotal).slice(
    //         0,
    //         String(item.amountTotal).length - 2
    //       ),
    //       '.',
    //       String(item.amountTotal).slice(String(item.amountTotal).length - 2),
    //     ].join('')
    //   )
    //   item.items.forEach(
    //     (_item) =>
    //       (_item.amount = parseFloat(
    //         [
    //           String(_item.amount).slice(0, String(_item.amount).length - 2),
    //           '.',
    //           String(_item.amount).slice(String(_item.amount).length - 2),
    //         ].join('')
    //       ))
    //   )
    // })

    return state.list_history
  },
}
