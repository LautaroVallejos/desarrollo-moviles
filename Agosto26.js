// Validador de gmail

var validated = false
var users = []
var passwords = []
do {
    //Solicita Email
    let Email = prompt("Ingrese su mail:")

    //Valida el email
    if(Email.includes("@gmail") && Email.includes(".com")){

        //Solicita y Valida la contra
        let Pass = prompt("Ingrese su contraseña, (debe contener un signo de $)")
        if(Pass.includes("$")){
            // Consulta si quiere ingresar otro
            alert("Usuario ingresado satisfactoriamente")
            back = prompt("Desea ingresar otro usuario? (Y/N)")
            if(back.toLowerCase() == "y"){
                validated = false
                
            } else {
                validated = true
                
            }
        } else{
            alert("La contraseña no cumple con los requisitos")
        }
    } else{
        alert("Email invalido, volve a intentar")
    }
} while (validated != true);