document.addEventListener('DOMContentLoaded', function() {
    const currencySelector = document.getElementById('currency');
    const currencySymbols = document.querySelectorAll('.currency-symbol');
    
    currencySelector.addEventListener('change', function() {
        const selectedCurrency = currencySelector.value;
        currencySymbols.forEach(symbol => {
            symbol.textContent = selectedCurrency;
        });
    });
});
