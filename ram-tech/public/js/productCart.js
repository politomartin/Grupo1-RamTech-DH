const deliveryMethod = document.getElementById('delivery-method');
const finalCost = document.getElementById('shipping-cost');
const finalPrice = document.getElementById('final-price');
const productsPrice = document.getElementById('products-price');

deliveryMethod.addEventListener('change', updateShippingCost);

function updateShippingCost() {
    finalCost.innerText = "Llega hoy por: ";
    const selectedValue = deliveryMethod.value;
    let shippingCost = '$0 ;)';

    if (selectedValue === 'home') {
        shippingCost = '$1500';
    } else if (selectedValue === 'post') {
        shippingCost = '$800';
    }

    finalCost.innerText += " " + shippingCost;

    const price = Number(productsPrice.innerText);
    const cost = Number(shippingCost.slice(1));
    const totalPrice = " " + Number(price + cost);
    finalPrice.innerText = '$' + Number(totalPrice);

    if (isNaN(totalPrice)) {
        finalPrice.innerText = '$' + Number(price);
    }
}



