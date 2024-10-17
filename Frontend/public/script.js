let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){

    if(password.type == "password"){

        password.type = "text";
        eyeicon.src = "eyeon.png";

    }else{
        password.type = "password";
        eyeicon.src = "eyeclose.png";
    }

}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

function login() {
    
    const username = document.getElementById("username").value; 
    const password = document.getElementById("password").value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU64c1ffe70aa534917423c728e7c6f434ed02ede90303835b64851e4b8b0ac565ff9f40fd0c8034ef1d9e1eb103fb9794' // Not needed here
        },
        body: JSON.stringify({ UserName: username, PassWord: password })
    })

    .then(response => response.json())
    .then(data => {
        
        if(data.status){
                
            console.log(data.message)
                
            Swal.fire({
                    
                icon: "success",
                title: "Logged in",
                text: "Successfully Logged in",
            
            });


        }
        else{
                
            console.log(data.message)
            Swal.fire({
                icon: "error",
                title: data.message,
                text: "Logged in Failed!!!!",
            });

        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
