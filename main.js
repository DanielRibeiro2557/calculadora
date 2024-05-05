const n0 = document.getElementById("numero0")
const n1 = document.getElementById("numero1")
const n2 = document.getElementById("numero2")
const n3 = document.getElementById("numero3")
const n4 = document.getElementById("numero4")
const n5 = document.getElementById("numero5")
const n6 = document.getElementById("numero6")
const n7 = document.getElementById("numero7")
const n8 = document.getElementById("numero8")
const n9 = document.getElementById("numero9")

const igual = document.getElementById("igual")
const virgula = document.getElementById("virgula")
const soma = document.getElementById("soma")
const subtracao = document.getElementById("subtracao")
const multiplicacao = document.getElementById("multiplicacao")
const divisao = document.getElementById("divisao")
const ac = document.getElementById("ac")

const resultado = document.getElementById("resultado")

let resul = '0'
let res = '0'

let rese = false

let equa = 0
let calculando = false
let ja = false
let jad = false
let igu = false

ac.addEventListener("click", function reset() {
    resul = '0'
    rese = true
    result()
})

n0.addEventListener("click", function num1() {
    res = '0'
    result()
})

n1.addEventListener("click", function num1() {
    res = '1'

    result()
})
n2.addEventListener("click", function num1() {
    res = '2'
    result()
})
n3.addEventListener("click", function num1() {
    res = '3'
    result()
})
n4.addEventListener("click", function num1() {
    res = '4'
    result()
})
n5.addEventListener("click", function num1() {
    res = '5'
    result()
})
n6.addEventListener("click", function num1() {
    res = '6'
    result()
})
n7.addEventListener("click", function num1() {
    res = '7'
    result()
})
n8.addEventListener("click", function num1() {
    res = '8'
    result()
})
n9.addEventListener("click", function num1() {
    res = '9'
    result()
})
virgula.addEventListener("click", function b() {
    res = ","
    result()
})

soma.addEventListener("click", function a(){
    calculando = true
    equa = 1//equação usada
    result()
    /*soma: 1
    subtração: 2
    multiplicação: 3
    divisão: 4*/
})

igual.addEventListener("click", function func(){
    igu = true
    result()
})

function result() {
    let n1 = '0'
    let n2 = '0'
    if(rese){
        resul = '0'
        rese = false
    } else {
        if(resul.includes(",")){
            if(res == ","){
                resul = resul
            } else {
                resul = resul + res
            }
        }else {
            if(resul == '0'){
                if(res == ','){
                    resul = resul + res
                }else {
                    resul = res
                }
            } else{
                resul = resul + res
            }
        }
    }
    resultado.innerHTML = `${resul}`
    parseFloat(resul)
    if(calculando){
        console.log("n1: " + n1)
        if(ja == true){
            n2 = resul
            resul = '0'
        } else {
            n1 = resul
            console.log("n1: " + n1)
            resul = 'queijo'
            console.log("n1: " + n1)
            console.log("resul: " + resul)
            console.log("n2: " + n2)
            ja = true
        }
    }
    if(igu){
        n2 = resul 
        resul = '0'
        parseFloat(n1)
        parseFloat(n2)
        resul = n1 + n2
        resultado.innerHTML = `${resul}`
        igu = false
    }
    resul.toString()
}


resultado.innerHTML = `${resul}`