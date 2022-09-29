const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const birthday = document.getElementById('birthday');
const gender = document.getElementById('gender');
const notes = document.getElementById('notes');
const form = document.getElementById('form');
const letters = /^[A-Za-z]+$/;
const errorElementFirst = document.getElementById('errorFirst');
const errorElementLast = document.getElementById('errorLast');
const errorElementAddress = document.getElementById('errorAddress');
const rootElement = document.documentElement;


/**
 * Validation
 */
form.addEventListener('submit', (e) => {
    let messagesFirst = [];
    let messagesLast = [];
    let messagesAddress = [];

    if (firstName.value === '' || firstName.value == null) {
        messagesFirst.push('First Name is required');
    }

    if (!letters.test(firstName.value.trim())) {
        messagesFirst.push('First Name must be only string without spaces');
    };

    if (messagesFirst.length >= 0) {
        e.preventDefault()
        errorElementFirst.innerText = messagesFirst.join(', ');
    }

    // last name
    if (lastName.value === '' || lastName.value == null) {
        messagesLast.push('Last Name is required');
    }

    if (!letters.test(lastName.value.trim())) {
        messagesLast.push('Last Name must be only string without spaces');
    };

    if (messagesLast.length >= 0) {
        e.preventDefault()
        errorElementLast.innerText = messagesLast.join(', ')
    }

    // address
    if (address.value === '' || address.value == null) {
        messagesAddress.push('Address is required');
    }

    if (messagesAddress.length >= 0) {
        e.preventDefault()
        errorElementAddress.innerText = messagesAddress.join(', ')
    }
});

/**
 *  Show submitted data in a table
 */

let dataTable = {
    stringFirstName: "",
    stringLastName: "",
    stringAddress: "",
    stringBirth: "",
    stringGender: "",
};

// increment by one every submit clicks
i = 1;

// show a table after submit

function submitTable() {
    document.getElementById("divTable").style.display = "block";
    // Gathering the data after submit
    dataTable.stringFirstName = firstName.value;
    dataTable.stringLastName = lastName.value;
    dataTable.stringAddress = address.value;
    dataTable.stringBirth = birthday.value;
    dataTable.stringGender = gender.value;

    // insert row

    let table = document.getElementById("tableData");
    let row = table.insertRow(i);
    let number = row.insertCell(0);
    let stringFirstName = row.insertCell(1);
    let stringLastName = row.insertCell(2);
    let stringAddress = row.insertCell(3);
    let stringBirth = row.insertCell(4);
    let stringGender = row.insertCell(5);

    number.innerHTML = i;
    stringFirstName.innerHTML = dataTable.stringFirstName;
    stringLastName.innerHTML = dataTable.stringLastName;
    stringAddress.innerHTML = dataTable.stringAddress;
    stringBirth.innerHTML = dataTable.stringBirth;
    stringGender.innerHTML = dataTable.stringGender;

    i++;
};

/**
 * Local Save
 */

firstName.value = getSavedValue("firstName");
lastName.value = getSavedValue("lastName");
address.value = getSavedValue("address");
birthday.value = getSavedValue("birthday");
gender.value = getSavedValue("gender");
notes.value = getSavedValue("notes");

//Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e) {
    let id = e.id;  // get the sender's id to save it . 
    let val = e.value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}
//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue(v) {
    if (!localStorage.getItem(v)) {
        return "";// Defualt value. 
    }
    return localStorage.getItem(v);
}
