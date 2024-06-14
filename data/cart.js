export const cart=[]

export function addToCart(productId) {

    let makingItem
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        makingItem = cartItem
      }
    });
  
    if (makingItem) {
      makingItem.quantity += 1;
    } else {
  
      const selectQuantity = Number(document.querySelector(`.js-quantity-selector-${productId}`).value)
      cart.push({
        productId: productId,
        quantity: selectQuantity,
      })
    } 
  }