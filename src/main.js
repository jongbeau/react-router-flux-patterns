var React = require('react')
var Router = require('react-router')
var Routes = require('./routes.js.jsx')
var RouterContainer = require('./router-container.js')


RouterContainer.set(Router.create({
  routes: Routes,
  location: Router.HistoryLocation
}))

$(function () {
  RouterContainer.get().run(function (Handler, state) {
    React.render(<Handler {...state} />, document.body)
  })
})
