var API = require('../utils/api.js')
var alt = require('../alt-module.js')

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
    API.getItem(id)
    .then((response) => {
      this.actions.gotItem(response)
    })
  }
  addItem(id) {

  }
}

module.exports = alt.createActions(ItemActions)
