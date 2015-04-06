var data = {
  items: [
    { id: 0, item: "zero" },
    { id: 1, item: "one" },
    { id: 2, item: "two" },
    { id: 3, item: "three" }
  ],
  nextId: 4
}

var api = {
  getItems: () => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        response = {
          items: data.items
        }
        resolve(response)
      }, 2000)
    })
  },

  getItem: (id) => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        response = data.items[id]
        resolve(response)
      }, 2000)
    })
  },

  addItem: (item) => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        let id = data.nextId
        data.items.push({id: id, item: 'item'})
        data.nextId += 1
        response = data.items[id]
        resolve(response)
      }, 2000)
    })
  }
}
