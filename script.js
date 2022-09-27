const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const birthday = document.getElementById('birthday');
const form = document.getElementById('form');
const letters = /^[A-Za-z]+$/;
const errorElementFirst = document.getElementById('errorFirst');
const errorElementLast = document.getElementById('errorLast');
const errorElementAddress = document.getElementById('errorAddress');


form.addEventListener('submit', (e) => {
    let messagesFirst = [];
    let messagesLast = [];
    let messagesAddress = [];

    if (firstName.value === '' || firstName.value == null) {
        messagesFirst.push('First Name is required');
    }

    if (firstName.value !== letters) {
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

    if (lastName.value !== letters) {
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