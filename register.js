document.getElementById("formContainer").addEventListener("submit",function(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    //errors
    const Nerror=document.getElementById("Nerror");
    const Eerror=document.getElementById("Eerror");
    const Perror=document.getElementById("Perror");

    
    const OldUser=JSON.parse(localStorage.getItem(email));
    if( name==OldUser.name &&email==OldUser.email && password==OldUser.password){
        alert("you are already registered! please login");
        window.location.href="index.html";
        document.getElementById("formContainer").reset();
    }else{
    
    if(!name || /\s/.test(name)  ){
        Nerror.textContent="name can't contain spaces or null."
        Nerror.style.color="red";
        return;
    }else{
        Nerror.textContent="";
    }
    let emailRegex=/^[A-Za-z0-9]+@gmail\.com$/;
    if(!emailRegex.test(email)){
        Eerror.textContent="Enter correct formate.";
        Eerror.style.color="red";
        return;
    }else{
        Eerror.textContent="";
        
    }
    let passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    if(!passRegex.test(password)){
        Perror.textContent="Invalid password formate!";
        Perror.style.color="red";
        return;
    }else{
        Perror.textContent="";
    }
    const user={name,email,password};
    localStorage.setItem(email,JSON.stringify(user));
    alert("Registration successful!");
    document.getElementById("formContainer").reset();
    window.location.href="index.html";
}
})