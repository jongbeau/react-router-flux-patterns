var React = require('react')
var ItemActions = require('../actions/item-actions.js')
var ItemStore = require('../stores/item-store.js')
var {Link} = require('react-router')

module.exports = React.createClass({
  getInitialState() {
    return ItemStore.getState()
  },
  componentDidMount() {
    ItemActions.getItems()
    ItemStore.listen(this.onChange)
  },
  componentWillUnmount() {
    ItemStore.unlisten(this.onChange)
  },
  onChange() {
    this.setState(ItemStore.getState())
  },
  render() {
    var items = this.state.items.map( (item) => {
      return <li><Link to='item' params={{id: item.id}}>{item.item}</Link></li>
    })
    return (
      <div>
        <h1>All Items</h1>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
})
