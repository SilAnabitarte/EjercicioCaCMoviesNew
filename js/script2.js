document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === "" || password === "") {
        console.log('Alguno de los campos está vacío');
        alert ("Los datos son incorrectos")
        };
    } else {
        console.log('Campos completos');
        
        
        });
    

