function logOut(element){ 
    console.log(element);

    if(element.innerText === "Login"){
        element.innerText = "Logout"
    } else {
        element.innerText = "Login"
    }
}


function liked(){
    alert("Ninja was liked");
}


function remove(element){
    element.remove();
}