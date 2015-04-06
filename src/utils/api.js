var data = {
  items: [
    { id: 0, item: "zero" },
    { id: 1, item: "one" },
    { id: 2, item: "two" },
    { id: 3, item: "three" }
  ],
  nextId: 4
}

var delay = 1000

module.exports = {
  getItems: () => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        let response = {
          items: data.items
        }
        resolve(response)
      }, delay)
    })
  },

  getItem: (id) => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        let response = data.items[id]
        if(response !== undefined) {
          resolve(response)
        }
        else {
          //reject will bubble up to the component
          reject('invalid id')
        }
      }, delay)
    })
  },

  addItem: (item) => {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        let id = data.nextId
        data.items.push({id: id, item: item})
        data.nextId += 1
        let response = data.items[id]
        resolve(response)
      }, delay)
    })
  }
}
