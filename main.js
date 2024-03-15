const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const deleteBtn = document.getElementById("delete");
const evalBtn = document.getElementById("eval");
const pointBtn = document.getElementById("point");

numbers.forEach(element => {
    element.addEventListener("click", () => {
        firstNumber.value += element.value;
    })
})
operators.forEach(element => {
    element.addEventListener("click", () => {
        const operacion = [...firstNumber.value];
        if(operacion[operacion.length - 1] === " " || operacion.length == 0){
            return;
        }else{
            firstNumber.value += " " + element.value +" ";
        }
    });
});
pointBtn.addEventListener("click",() => {
    const operacion = [...firstNumber.value];
    const event = (element) => element === ".";
    if(operacion.some(event) || operacion.length === 0){
        return;
    }else{
        firstNumber.value += ".";
    }
})
deleteBtn.addEventListener("click", () => {
    const operacion = [...firstNumber.value];
    const cadena = firstNumber.value
    if(operacion[operacion.length - 1] === " "){
        const regex = /(.{3})$/;
        const nuevaCadena = cadena.replace(regex, "")
        firstNumber.value = nuevaCadena
    }else{
        const regex = /(.{1})$/;
        const nuevaCadena = cadena.replace(regex, "")
        firstNumber.value = nuevaCadena
    }
})
evalBtn.addEventListener("click", () => {
    const operacion = [...firstNumber.value];
    const cadena = firstNumber.value
    if(
        operacion.length == 0
        ||
        operacion[operacion.length - 1] === " "
    ){
        const valorAnterior = secondNumber.value
        secondNumber.value = "Syntaxt Error"
        setTimeout(() => {
            secondNumber.value = valorAnterior
            setTimeout(() =>{
                if(secondNumber.value === "Syntaxt Error"){
                    secondNumber.value = ""
                }
            }, 1100)
        }, 1000);
        // setTimeout(1000, ()=>{
            // secondNumber.value = valorAnterior
        // })
    }else{
        console.log(eval(cadena));
        const result = eval(firstNumber.value);
        secondNumber.value = result;
        firstNumber.value = ""
        
    }   
})