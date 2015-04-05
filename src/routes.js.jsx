var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Index}/>
    <Route name="new" path="contact/new" handler={NewContact}/>
    <Route name="contact" path="contact/:id" handler={Contact}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = routes