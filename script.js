console.log("hello");

let Fname = document.getElementById("Fname");
let Lname = document.getElementById("Lname");
let phone = document.getElementById("phone");
let qualification = document.getElementById("qualification");
let subject = document.getElementById("subjects");
let email = document.getElementById("email");
let about = document.getElementById("about");


// for First Name validation
Fname.addEventListener('blur', ()=>{

    let regex = /^([a-zA-Z]){2}/
    let str = Fname.value;
    if (regex.test(str)){
        
        Fname.classList.add('is-valid')
        Fname.classList.remove('is-invalid')
    }
    else {
        
        Fname.classList.add('is-invalid')
        Fname.classList.remove('is-valid')
    }
})

// for Last Name validation
Lname.addEventListener('blur', ()=>{
    
    let regex = /^([a-zA-Z]){2}/
    let str = Lname.value;
    if (regex.test(str)){
        
        Lname.classList.add('is-valid')
        Lname.classList.remove('is-invalid')
    }
    else {
        
        Lname.classList.add('is-invalid')
        Lname.classList.remove('is-valid')
    }
})

// for phone validation
phone.addEventListener('blur', ()=>{
    
    let regex = /^([0-9]){10}$/
    let str = phone.value;
    if (regex.test(str)){
        
        phone.classList.add('is-valid')
        phone.classList.remove('is-invalid')
    }
    else {
        
        phone.classList.add('is-invalid')
        phone.classList.remove('is-valid')
    }
})

// for Qualification validation
qualification.addEventListener('blur', ()=>{
    
    let regex = /^([\w_.-\s])*$/
    let str = qualification.value;
    if (regex.test(str)){
        
        qualification.classList.add('is-valid')
        qualification.classList.remove('is-invalid')
    }
    else {
        
        qualification.classList.add('is-invalid')
        qualification.classList.remove('is-valid')
    }
})

// for subject validation
subject.addEventListener('blur', ()=>{
    
    let regex = /^([\w_.-\s])*$/
    let str = subject.value;
    if (regex.test(str)){
        
        subject.classList.add('is-valid')
        subject.classList.remove('is-invalid')
    }
    else {
        
        subject.classList.add('is-invalid')
        subject.classList.remove('is-valid')
    }
})

// for email validation
email.addEventListener('blur', ()=>{
    
    let regex = /([a-zA-Z0-9+_\.\-]+)@([a-zA-Z0-9+_\.\-]+)\.([a-z]){2,7}/
    let str = email.value;
    if (regex.test(str)){
        
        email.classList.add('is-valid')
        email.classList.remove('is-invalid')
    }
    else {
        
        email.classList.add('is-invalid')
        email.classList.remove('is-valid')
    }
})

// for about validation
about.addEventListener('blur', ()=>{
    
    let regex = /^([\w_.-\s])*$/
    let str = about.value;
    if (regex.test(str)){
        
        about.classList.add('is-valid')
        about.classList.remove('is-invalid')
    }
    else {
        
        about.classList.add('is-invalid')
        about.classList.remove('is-valid')
    }
})