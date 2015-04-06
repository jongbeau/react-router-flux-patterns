var API = require('../utils/api.js')
var alt = require('../alt-module.js')

class ItemActions {
  constructor() {
    this.generateActions('gotItems', 'gotItem', 'addedItem')
  }

  //always return a promise
  //don't catch here, let it bubble up to the component

  getItems() {
    return API.getItems()
    .then((response) => {
      this.actions.gotItems(response)
      return response
    })
  }
  getItem(id) {
    return API.getItem(id)
    .then((response) => {
      this.actions.gotItem(response)
      return response
    })
  }
  addItem(item, cb=null) {
    return API.addItem(item)
    .then( (response) => {
      this.actions.addedItem(response)
      return response
    })
  }
}

module.exports = alt.createActions(ItemActions)
