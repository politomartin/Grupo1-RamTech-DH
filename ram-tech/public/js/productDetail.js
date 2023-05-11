window.onload = function () {
    const deliveryMethod = document.getElementById('delivery-method');
    const finalCost = document.getElementById('shipping-cost');
    
    deliveryMethod.addEventListener('change', updateShippingCost);
    
    function updateShippingCost() {
      const selectedValue = deliveryMethod.value;
      let shippingCost = 'Sin costo ;)';
    
      if (selectedValue === 'home') {
        shippingCost = '$1500';
      } else if (selectedValue === 'post') {
        shippingCost = '$800';
      }
    
      finalCost.textContent = 'Llega hoy! ' + shippingCost;
    }

    const button = document.getElementById('button');
   
    
}