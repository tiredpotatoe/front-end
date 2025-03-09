function printpage() {
    window.print();
}

function updatePrice(wholePrice) {
    console.log('entered');
    let finalPrice = document.getElementById('final-price');
    let finalPriceValue = finalPrice.textContent;
    console.log(finalPrice)
    finalPriceValue -=wholePrice;
    finalPrice.innerText= `${finalPriceValue}`;
}

function updateRow(number) {
    let i =number;
    // console.log(document.getElementById('item'+4))
    while (document.getElementById('item'+i)!=null){
        document.getElementById('item'+i).innerText = i -1;
        i++;
    }
} 


function deleteItem(button) {
    let number= button.id;
    let price = document.getElementById('price'+number);
    let amount = document.getElementById('amount'+number);
    let wholePrice = price.textContent * amount.textContent;
    updatePrice(wholePrice);
    updateRow(number);
    // console.log(wholePrice);
    let row = document.getElementById('row' + number)
    //console.log(row);
    row.remove();
    
}   

//asan naneveshte bud ke kar khasti anjam bedim manam talash kardam natunesam dorost konam pas hichi
//update i figured it out