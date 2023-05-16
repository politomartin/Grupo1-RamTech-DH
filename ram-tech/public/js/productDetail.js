window.onload = function () {
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

    
    
}