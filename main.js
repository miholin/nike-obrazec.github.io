document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('prijava');

    if (email === '' || password === '') {
        errorMessage.textContent = 'Prosim, izpolnite vsa polja.';
    } else {
        errorMessage.textContent = '';
        alert('Prijava uspešna!'); 
    }
});

document.getElementById('openRegister').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('loginContainer').style.display = 'none'; 
    document.getElementById('registrationContainer').style.display = 'block';
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registracija uspešna!');
});

document.getElementById('backToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registrationContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block'; 
    // Ponastavite vsa polja in sporočila ob vrnitvi
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('prijava').textContent = '';
});

document.getElementById('reg-password').addEventListener('input', function () {
    const password = this.value;

    // Preverjanje pogojev z uporabo regex
    const lengthCheck = /.{8,}/.test(password);
    const uppercaseCheck = /[A-Z]/.test(password);
    const numberCheck = /\d/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Posodabljanje stanja vsake zahteve
    updateCheckItem('lengthCheck', lengthCheck);
    updateCheckItem('uppercaseCheck', uppercaseCheck);
    updateCheckItem('numberCheck', numberCheck);
    updateCheckItem('specialCharCheck', specialCharCheck);
});

// Funkcija za posodobitev stanja vsake zahteve
function updateCheckItem(itemId, isValid) {
    const item = document.getElementById(itemId);
    if (isValid) {
        item.textContent = '✔️ ' + item.textContent.slice(2);
        item.classList.add('valid');
        item.classList.remove('invalid');
    } else {
        item.textContent = '❌ ' + item.textContent.slice(2);
        item.classList.add('invalid');
        item.classList.remove('valid');
    }
}
