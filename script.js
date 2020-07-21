function acess (password){
    if (password = yoel){
        return true;
    }
    else {
        return confirm ('try again')
    }
}
let password = prompt('enter password');
if (acess(password)){
    alert(`passrowd is correct`)
}
else {
    alert(`you have the wrong password`)
}