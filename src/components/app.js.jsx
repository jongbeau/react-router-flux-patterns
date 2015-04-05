var React = require('react')
var {Link, RouteHandler} = require('react-router')

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Flux Patterns!</h1>
        <ul>
          <li><Link to='items'>Item List</Link></li>
          <li><Link to='item' params={{id: 1}}>Item</Link></li>
          <li><Link to='new'>New Item</Link></li>
        </ul>
        <div>
          <RouteHandler/>
        </div>
      </div>
    )
  }
})
