var ItemActions = require('../actions/item-actions.js')
var alt = require('../alt-module.js')

class ItemStore {
  constructor() {
    this.bindActions(ItemActions)
    this.items = []

    this.exportPublicMethods({
      getItem: this.getItem
    });
  }
  onGotItems(response) {
    this.items = response.items
  }
  onGotItem(response) {
    this.items[response.id] = response
  }
  onAddedItem(response) {
    this.items[response.id] = response
  }

  getItem(id) {
    return this.getState().items[id] || {}
  }
}

module.exports = alt.createStore(ItemStore)
