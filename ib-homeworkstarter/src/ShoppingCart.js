class shoppingCart {
  constructor(name) {
    this.name = name;
    this.cart = [];
  };

  getItems() {
    return this.cart;
  }

  addItem(itemName, quantity, price) {
    let objItem = { name: itemName, quantity: quantity, pricePerUnit: price }
    this.cart.push(objItem)
  }

  clear() {
    return this.cart = [];
  }

  total() {
    return this.cart.reduce((totalPrice, currentObject) => {
      return totalPrice + (currentObject.pricePerUnit * currentObject.quantity)
    }, 0)
  }
}

module.exports = shoppingCart 