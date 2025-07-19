document.getElementById("formContainer").addEventListener("submit",function(e){
    e.preventDefault();
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const user=JSON.parse(localStorage.getItem(email));
    if(user && user.password===password){
        alert("login successful");
        document.getElementById("formContainer").reset();
    }else{
        alert("invailid Email or password");
        document.getElementById("formContainer").reset();
    }
})