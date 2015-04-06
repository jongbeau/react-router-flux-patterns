var ItemActions = require('../actions/item-actions.js')

class ItemStore {
  constructor() {
    this.bindActions(ItemActions)
    this.items = []
  }
}

module.exports = alt.createStore(ItemStore)
