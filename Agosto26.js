// Programa para añadir usuarios y contraseñas utilizando metodos de manipualcion de strings

var noValidated = false
var users = []
var passwords = []
do {
    //Solicita y valida el mail
    let Email = prompt("Ingrese su mail:")
    if(Email.includes("@gmail.com")){

        //Solicita y valida la contraseña
        let Pass = prompt("Ingrese su contraseña, (debe contener un signo de $)")
        if(Pass.includes("$")){

            // Consulta si quiere ingresar otro
            alert("Usuario ingresado satisfactoriamente")
            back = prompt("Desea ingresar otro usuario? (Y/N)")
            if(back.toLowerCase() == "y"){
                // El bucle se repite y envia los datos al array
                noValidated = false
                users.push(Email)
                passwords.push(Pass)
                
            } else {
                // El bucle se termina y envia los datos al array
                noValidated = true
                users.push(Email)
                passwords.push(Pass)
            }
        } else{
            alert("La contraseña no cumple con los requisitos")
        }

    } else{
        alert("Email invalido, volve a intentar")
    }

} while(noValidated != true);

//Retorna los datos para el output
getAllUsers = users.map(user => user)
getAllPass = passwords.map(pass => pass)

// Fin del programa y datos por pantalla
alert("### Fin del Programa | Resultados en la Consola ###")
console.log("Listado de Usuarios")
console.log(getAllUsers)
console.log("Listado de Contraseñas")
console.log(getAllPass)