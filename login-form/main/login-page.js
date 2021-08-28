
const emailInput = document.querySelector("#mail");
const passwordInput = document.querySelector("#password");
const signBtn = document.querySelector(".submit-2");
const emailLabel = document.querySelector('.email-label')


signBtn.addEventListener("click", async function validateForm(event){
    event.preventDefault();
    if (!emailInput.value){
        emailLabel.style.border = "2px solid red"
    };
    if(passwordInput.value.length < 8 || !passwordInput.value) {
        alert("Your passoword's must have 8 or more symbol!");
        return false
    }
    const data = {
        email: emailInput.value,
        password: passwordInput.value
    }
    const URL = "http://192.168.0.179:8080/api/user/login";
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
        const response2 = await response.json();
        if(response2){
            window.location.href = "./main.html"
        }
})
