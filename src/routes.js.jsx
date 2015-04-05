var React = require('react')
var Router = require("react-router")
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute

var App = require('./components/app.js.jsx')
var Items = require('./components/items.js.jsx')
var Item = require('./components/item.js.jsx')
var NewItem = require('./components/new-item.js.jsx')

var routes = (
  <Route handler={App}>
    <DefaultRoute name='items' handler={Items}/>
    <Route name='new' path='item/new' handler={NewItem}/>
    <Route name='item' path='item/:id' handler={Item}/>
  </Route>
);

module.exports = routes