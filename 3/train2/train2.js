function isValidCSS() {
    document.querySelectorAll('h3').forEach(h3 => {
        h3.style.color = 'green';
    });//sabz she age valid bud

    document.querySelectorAll('input').forEach(inp=> {
        inp.style.borderColor = 'green';
    });//rang border qerme bere

    document.querySelectorAll('textarea').forEach(text=>{
        text.style.borderColor = 'green';
    });

    document.querySelectorAll('select').forEach(text=>{
        text.style.borderColor = 'green';
    });
}

function reset() {
    document.querySelectorAll('h3').forEach(h3 => {
        h3.style.color = '#692008';
    });//rangesh bere

    document.querySelectorAll('input', 'textarea').forEach(inp=> {
        inp.style.borderColor = '#692008';
    });//rang border qermes bere
}


function validForm(event) {
event.preventDefault();
    console.log("worked");
    reset();
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passengersInput = document.getElementById('passengersNumber');
    const priceInput = document.getElementById('price');
    const addressTextarea = document.getElementById('address');
    const dateDepartureInput = document.getElementById('dateDeparture');
    const timeDepartureInput = document.getElementById('timeDeparture');
    const dateReturnInput = document.getElementById('dateReturn');
    const timeReturnInput = document.getElementById('timeReturn');

    let isValid = true;//bara nemayesh un yaru chize infoe


    //css qermez she doreshun
    function notValidCSS(input, h3) {
        input.style.borderColor = 'red'; 
        h3.style.color = 'red'; 
        isValid = false;
    }

    //check kon khalian ya na kar nakard isempty mishe dad bara string .length==0 ham mishe
    if (!firstNameInput.value|| /\d/.test(firstNameInput.value)) {
        let firstNameH3 = 
        firstNameInput.closest(".heading-div").querySelector('h3');
        notValidCSS(firstNameInput, firstNameH3);
    }
    
    if (!lastNameInput.value || /\d/.test(lastNameInput.value)) {
        let lastNameH3 =lastNameInput.closest(".heading-div").querySelector('h3');
        notValidCSS(lastNameInput, lastNameH3);
    }

    if (!emailInput.value.includes('@')||!emailInput.value.endsWith(".com")) {
        let emailH3 = emailInput.closest(".heading-div").querySelector('h3');
        notValidCSS(emailInput, emailH3);
    }

    if (!phoneInput.value || !/^09\d{9}$/.test(phoneInput.value)) {
        let phoneH3 = phoneInput.closest(".heading-div").querySelector('h3');
        notValidCSS(phoneInput, phoneH3);
    }

    if (!dateDepartureInput.value) {
        let dateDepartureH3 = dateDepartureInput.closest(".heading-div").querySelector('h3');
        notValidCSS(dateDepartureInput, dateDepartureH3);
    }

    if (!timeDepartureInput.value) {
        let timeDepartureH3 = timeDepartureInput.closest(".heading-div").querySelector('h3');
        notValidCSS(timeDepartureInput, timeDepartureH3);
    }

    if (!dateReturnInput.value) {
        let dateReturnH3 = dateReturnInput.closest(".heading-div").querySelector('h3');
        notValidCSS(dateReturnInput, dateReturnH3);
    }

    if (!timeReturnInput.value) {
        let timeReturnH3 = dateReturnInput.closest(".heading-div").querySelector('h3');
        notValidCSS(timeReturnInput, timeReturnH3);
    }

    if (!addressTextarea.value) {
        let addressTextareaH3 = addressTextarea.closest(".heading-div").querySelector('h3');
        notValidCSS(addressTextarea, addressTextareaH3);
    }

    if (!passengersInput.value ||passengersInput.value > 10|| passengersInput.value<=0) {
        let passengersH3 =passengersInput.closest(".heading-div").querySelector('h3');
        notValidCSS(passengersInput, passengersH3);
    }

    //TAMUM

   
    if (isValid) {
        isValidCSS();
        document.getElementById('output').innerHTML = `
            <table border="1" cellpadding="10" cellspacing="0" style="margin:40px auto">
                <thead class="orange">
                    <tr>
                        <th class="thead" colspan="2">Submitted Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="yellow">Full Name</td>
                        <td>${firstNameInput.value} ${lastNameInput.value}</td>
                    </tr>
                    <tr>
                        <td class="yellow">Email</td>
                        <td>${emailInput.value}</td>
                    </tr>
                    <tr>
                        <td class="yellow">Phone Number</td>
                        <td>${phoneInput.value}</td>
                    </tr>
                    <tr>
                        <td class="yellow">Number of Passengers</td>
                        <td>${passengersInput.value}</td>
                    </tr>
                    <tr>
                        <td class="yellow"> Pickup/Destination Address</td>
                        <td>${addressTextarea.value}</td>
                    </tr>
                    <tr>
                        <td class="yellow">Departure Date/Time</td>
                        <td>${dateDepartureInput.value} ${timeDepartureInput.value}</td>
                    </tr>
                    <tr>
                        <td class="yellow">Return Date/Time</td>
                        <td>${dateReturnInput.value} ${timeReturnInput.value}</td>
                    </tr>
                </tbody>
                <tfoot class="orange">
                    <tr>
                        <td >Total Price</td>
                        <td>${(passengersInput.value) * 3000} Toman</td>
                    </tr>
                </tfoot>
            </table>
        `;
    }
}
//update
function updatePrice() {
    const passengersInput = document.getElementById('passengersNumber');
    const priceInput = document.getElementById('price');
    const priceValue = passengersInput.value * 3000;
    priceInput.value = priceValue;
}

//ziad
function increasePassengers() {
    const passengersInput = document.getElementById('passengersNumber');
    if (passengersInput.value < 10) {
        passengersInput.value++;
        updatePrice();
    }
}

//kam kardan
function decreasePassengers() {
    const passengersInput = document.getElementById('passengersNumber');
    if (passengersInput.value > 1) {
        passengersInput.value--;
        updatePrice();
    }
}
