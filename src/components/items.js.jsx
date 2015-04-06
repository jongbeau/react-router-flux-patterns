var React = require('react')
var ItemActions = require('../actions/item-actions.js')
var ItemStore = require('../stores/item-store.js')

module.exports = React.createClass({
  getInitialState() {
    return ItemStore.getState()
  },
  componentDidMount() {
    ItemActions.getItems()
    this.listen(ItemStore, this.onChange)
  },
  componentWillUnmount() {
    this.unlisten(ItemStore, this.onChange)
  },
  onChange() {
    this.state = ItemStore.getState()
  },
  render() {
    return (
      <h1>All Items</h1>
      {this.state.items.map()}
    )
  }
})
