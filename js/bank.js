const email = document.getElementById('uemail');
const pass = document.getElementById('upass');


document.getElementById('submit').addEventListener('click', function () {


    if (email.value === '123@gmail.com' && pass.value === 'jinku') {

        window.location.href = 'bank.html'
    }
})

