//#region elements
const doc = document;
const form = doc.querySelector("form");
const submit = doc.querySelector("submit[type='submit']");
const firstNameInput = doc.querySelector("#firstName");
const lastNameInput = doc.querySelector("#lastName");
const genderSection = doc.querySelector("input[type='radio'][name='gender']");
const ulList = doc.querySelector("#customers-list");
//#endregion

let indexKeys = [];

genderSection.onchange = (e)=>{

    console.info("changed");
};

window.onload = (e) => {

    let keys = Object.keys(localStorage),
        len = keys.length;

    while(len--){
        indexKeys.push(keys[len]);
    }

    showStorage();
};

form.onsubmit = (e) => {

    e.preventDefault();

    if (validateInputs()) {

        console.info("all inputs are valid");

        let key = `customer_${Math.ceil(Math.random() * 100)}`
        
        indexKeys.push(key);

        localStorage.setItem(key,
            JSON.stringify({ firstName: firstNameInput.value, lastName: lastNameInput.value }));

        console.info("create a new customer");

            showStorage();
      
        firstNameInput.value = "";
        lastNameInput.value = "";
        doc.querySelector("input[type='radio'][name='gender']:checked").checked = false;

    }
};

function showStorage() {


    let len = localStorage.length;
    while(ulList.firstChild){
        ulList.removeChild(ulList.firstChild);
    }


    while (len--) {
        
        let item = doc.createElement("li"),
            span = doc.createElement("span"),
            button = doc.createElement("button");

        button.textContent = "Delete";
        button.onclick = deleteStorage;
        span.setAttribute("data-customer-key", indexKeys[len]);
        span.textContent = `Firstname: ${JSON.parse(localStorage.getItem(indexKeys[len])).firstName} LastName: ${JSON.parse(localStorage.getItem(indexKeys[len])).lastName}`;
        span.appendChild(button);
        item.appendChild(span);
        ulList.appendChild(item);

    }


}

function deleteStorage(e) {

    let customerKey = e.srcElement.parentElement.getAttribute("data-customer-key");

    console.log(customerKey);
    let index = indexKeys.indexOf(customerKey);

    indexKeys.splice(index,1);

    localStorage.removeItem(customerKey);

    console.info("successfully deleted customerkey");

    showStorage();
}

function validateInputs() {

    let inputs = doc.querySelectorAll("form input[type='text']"),
        gender = doc.querySelector("input[type='radio'][name='gender']:checked"),
        len = inputs.length;

    if (gender === null) {

        genderSection.focus();
        return false;
    }

    while (len--) {
        if (inputs[len].value === "") {
            inputs[len].focus();
            return false;
        }
    }

    return true;
}


