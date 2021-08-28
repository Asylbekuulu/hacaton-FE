
const label = document.querySelector('.col-one-half-1');
const label2 = document.querySelector('.col-one-half-2')
const emailInput = document.querySelector("#mail");
const passwordInput = document.querySelector("#password");
const signBtn = document.querySelector(".submit");
const emailLabel = document.querySelector('.email-label')


signBtn.addEventListener("click", async function validateForm(event){
    event.preventDefault();
    const firstNameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("last-Name");
    if(!firstNameInput.value){
        label.style.border = "2px solid red"
    };
    if(!lastNameInput.value){
        label2.style.border = "2px solid red"
    };
    if (!emailInput.value){
        emailLabel.style.border = "2px solid red"
    };
    if(passwordInput.value.length < 8 || !passwordInput.value) {
        alert("Your passoword's must have 8 or more symbol!");
        return false
    }
    const data = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    const URL = "http://192.168.0.179:8080/api/user";
    const response = await fetch(URL, {
        method: 'POST', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
        });
        const response3 = await response.json();
        if(response3){
            window.location.href = "./main.html"
        }
        
}
);
