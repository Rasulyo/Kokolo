export const addProdcutToCartHelper = (product) => {
    
    if(!JSON.parse(localStorage.getItem('cart'))){
        localStorage.setItem('cart', JSON.stringify([]));
    }

    const cart = JSON.parse(localStorage.getItem('cart'));

    const updatedCart = [...cart, {...product, quantity: 1}];

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    return updatedCart;

}