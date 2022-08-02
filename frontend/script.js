console.log("hello")

//Scopes//

let globalVariable = `globálisan elérhető`;

console.log(globalVariable)

function logVariable(){
    
    let funcVariable = `Beyoncé`
    let globalVariable = `metallica`
    console.log(globalVariable)
    function changeVal(){
        let globalVariable =`tre`
        console.log(globalVariable)
    }
   changeVal()
}

logVariable();

//console.log(funcVariable)

/* Block scope: {} köze írjuk a kódunkat pl 
{
    function xy(){
        function kódja
    }
    xy()
}*/