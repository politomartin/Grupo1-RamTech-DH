window.onload = function () {
    const deliveryMethod = document.getElementById('delivery-method');
    const finalCost = document.getElementById('shipping-cost');
    const cuotas = document.getElementById('checkbox');
    const finalPrice = document.getElementById('final-price');
    const totalDues = document.getElementById('total-dues');
    cuotas.addEventListener('change', () => {
      
      const selectedValue = cuotas.value;
      if (selectedValue != 0){

        const price = finalPrice.innerText.slice(1);
        
        totalDues.innerText ="$" +  (price / selectedValue).toFixed(2) + " cada cuota";
      }
    })

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