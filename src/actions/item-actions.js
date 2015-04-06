var API = require('../utils/api.js')

class ItemActions {
  constructor() {
    this.generateActions('gotItems', 'gotItem', 'addedItem')
  }
  getItems() {
    API.getItems()
    .then((response) => {
      this.actions.gotItems(response)
    })
  }
  getItem(id) {

  }
  addItem(id) {

  }
}

module.exports = alt.createActions(ItemActions)
