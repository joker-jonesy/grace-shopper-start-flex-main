export const cartTotal = (cartArr) => {
  let total = 0
  if (Array.isArray(cartArr) && cartArr.length > 0) {
    for (let item of cartArr) {
      total += parseInt(item.product.price) * item.quantity
    }
  }
  return total
}
export const cartQuantity = (cartArr) => {
  let quantity = 0
  if (Array.isArray(cartArr) && cartArr.length > 0) {
    for (let item of cartArr) {
      quantity += item.quantity
    }
  }
  return quantity
}
