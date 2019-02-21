// Signing up
const signupForm = document.querySelector('#submit');

signupForm.addEventListener('click', (e) => {
    e.preventDefault();

    let email = document.querySelector('#signup-email').value;
    let password = document.querySelector('#signup-password').value;
     
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        document.querySelector('#signup-form').reset();
      
    });
    
});


const loginForm = document.querySelector('#login');

loginForm.addEventListener('click', (e) =>{
    e.preventDefault()

    let email = document.querySelector('#login-email').value;
    let password = document.querySelector('#login-password').value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        document.querySelector('#login-form').reset();
        console.log('You are login now');
    });
});


