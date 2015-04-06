var React = require('react')
var ItemActions = require('../actions/item-actions.js')
var ItemStore = require('../stores/item-store.js')

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getInitialState() {
    return ItemStore.getItem(this.getId())
  },
  componentDidMount() {
    //if API call fails, catch the error
    ItemActions.getItem(this.getId())
    .catch( (err) => {
      this.setState({error: err})
    })
    ItemStore.listen(this.onChange)
  },
  componentWillUnmount() {
    ItemStore.unlisten(this.onChange)
  },
  getId() {
    return this.context.router.getCurrentParams().id
  },
  onChange() {
    this.setState(ItemStore.getItem(this.getId()))
  },

  render() {
    if(this.state.id !== undefined) {
      return (
        <div>
          {this.state.error}
          <h1>Item: {this.state.id}</h1>
          <div>{this.state.item}</div> 
        </div>
      )
    }
    else {
      return (
        <div>
          {this.state.error}
          <div>Loading...</div>
        </div>
      )
    }
  }
})
