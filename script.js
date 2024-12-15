function adoptPet(petName) {  
    alert(`Thank you for adopting ${petName}!`);  
}  

function handleSubmit(event) {  
    event.preventDefault(); // Prevent form submission  
    const name = document.getElementById('name').value;  
    const email = document.getElementById('email').value;  
    const message = document.getElementById('message').value;  

    alert(`Thank you, ${name}! Your message has been sent.`);  
}