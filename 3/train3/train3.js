function updatePayableAmount() {
    let total = 0;
    
    document.querySelectorAll(".left-side-trd-sec").forEach((item) => {
        const quantityElement = item.querySelector(".quantity");
        const priceElement = item.querySelector(".price");

        if (quantityElement && priceElement) {
            const quantity = parseInt(quantityElement.textContent) || 0; 
            const priceText = priceElement.textContent.replace(/[^\d.-]/g, ''); 
            const price = parseFloat(priceText) || 0; 
            
            total += quantity * price;
        }
    });
    total = total - total * 0.05;

    const payableAmountElement = document.querySelector("#sum");
    if (payableAmountElement) {
        payableAmountElement.textContent = total;  
    }
}

function updateFakePrice() {
    let total = 0;
    
    document.querySelectorAll(".left-side-trd-sec").forEach((item) => {
        const quantityElement = item.querySelector(".quantity");
        const priceElement = item.querySelector(".fake-price");

        if (quantityElement && priceElement) {
            const quantity = parseInt(quantityElement.textContent) || 0; 
            const priceText = priceElement.textContent.replace(/[^\d.-]/g, ''); 
            const price = parseFloat(priceText) || 0; 
            
            total += quantity * price;
        }
    });

    const payableAmountElement = document.querySelector("#fake-sum");
    if (payableAmountElement) {
        payableAmountElement.textContent = total;  
    }
}

function updateSud() {
    let sud = 0;

    document.querySelectorAll(".left-side-trd-sec").forEach((item) => {
        const quantityElement = item.querySelector(".quantity");
        const saleElement = item.querySelector(".sale-value");
        const priceElement = item.querySelector(".price");

        if (quantityElement && priceElement && saleElement) {
            const quantity = parseInt(quantityElement.textContent) || 0; 
            const salePercentage = parseFloat(saleElement.textContent) || 0;  
            const priceText = priceElement.textContent.replace(/[^\d.-]/g, ''); 
            const price = parseFloat(priceText) || 0; 

            const actualPrice = price / (1 - salePercentage / 100);
            sud += quantity * (actualPrice - price); 
        }
    });

    const sudElement = document.querySelector("#sud");
    if (sudElement) {
        sudElement.textContent = Math.round(sud); 
    }
}


function plusItem(event, spanElement) {
event.preventDefault();
    let quantity = parseInt(spanElement.textContent) || 0; 
    quantity += 1;  
    spanElement.textContent = quantity; 

    updatePayableAmount();
    updateSud(); 
    updateFakePrice();
}

function deleteItem(event, spanElement) {
event.preventDefault();
    let quantity = parseInt(spanElement.textContent) || 0; 
    if (quantity > 1) {
        quantity -= 1; 
        spanElement.textContent = quantity; 
    } else {
        const itemToRemove = spanElement.closest(".left-side-trd-sec");
        if (itemToRemove) {
            itemToRemove.remove();
        }
    }

    updatePayableAmount(); 
    updateSud();
    updateFakePrice();
}