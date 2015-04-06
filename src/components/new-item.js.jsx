var React = require('react')
var ItemActions = require('../actions/item-actions.js')
var ItemStore = require('../stores/item-store.js')

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  add() {
    let item = this.refs.input.getDOMNode().value
    //Action returns a promise which can be chained for redirect
    ItemActions.addItem(item)
    .then( (response) => {
      this.context.router.transitionTo('item', {id: response.id})
    })
  },
  render() {
    return (
      <div>
        <h1>New Item</h1>
        <input type='text' ref='input'></input>
        <button onClick={this.add}>Add</button>
      </div>

    )
  }
})
