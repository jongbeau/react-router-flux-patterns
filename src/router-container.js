var _router = null

var set = function(router){
  _router = router
}

var get = function(){
  return _router
}

module.exports = {
  set: set,
  get: get
}
