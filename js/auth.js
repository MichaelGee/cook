// Signing up
const signupForm = document.querySelector('#submit');

signupForm.addEventListener('click', (e) => {
    e.preventDefault();

    let email = document.querySelector('#signup-email').value;
    let password = document.querySelector('#signup-password').value;
    let confm = document.querySelector('#confm-password').value;
     
            const createUser =()=>{
                auth.createUserWithEmailAndPassword(email, password).then(cred => {
                    document.querySelector('#signup-form').reset();
                
                }); 
            } 

            if (password != confm){
                alert("Passwords dont match!");
              } else{
                createUser();
            }


            if (password.length <= 6 || confm.length <= 6){
                alert('Password is less than 6 characters');
            }else{
                createUser();
            }
            
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


