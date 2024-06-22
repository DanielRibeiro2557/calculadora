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
const maismen = document.getElementById("maismen")
const porcent = document.getElementById("porcent")

const resultado = document.getElementById("resultado")

let resul = '0'
let res = '0'

let rese = false

let equa = 0
let calculando = false
let ja = false
let jad = false
let igu = false
let ne1 = 0
let ne2 = 0

let invert = false

porcent.addEventListener("click", function gaga() {
    res = '%'
    result()
})
maismen.addEventListener("click", function gege(){
    invert = true
    result()
})
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
    egua()
    /*soma: 1
    subtração: 2
    multiplicação: 3
    divisão: 4*/
})
subtracao.addEventListener("click", function c(){
    calculando = true
    equa = 2//equação usada
    egua()
})
multiplicacao.addEventListener("click", function a(){
    calculando = true
    equa = 3//equação usada
    egua()
})
divisao.addEventListener("click", function a(){
    calculando = true
    equa = 4//equação usada
    egua()
})
igual.addEventListener("click", function func(){
    igu = true
    egua()
})

function result() {
    if(rese){
        resul = '0'
        ne1 = 0
        ne2 = 0
        rese = false
    } else {
        if (invert) {
            if (resul == '0') {
                res = '0'
            } else {
                if (resul.includes('-')) {
                    res = res.split('-')
                    res = res[1]
                } else {
                    res = '-' + resul
                }
            }
            invert = false
        }

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
                if (res.includes('-') || resul.includes('-')) {
                    resul = res
                } else {
                    resul = resul + res
                }
                
            }
        }
    }
    resultado.innerHTML = `${resul}`
}

function egua(){
    if(resul.includes(',')){
        resul = resul.split(',')
        resul = `${resul[0]}.${resul[1]}`
    }
    if(calculando){
        if (resul.includes('%')) {
            ne1 = resul
        } else {
            ne1 = parseFloat(resul)
        }
        
        calculando = false
        resul = 0
        resultado.innerHTML = `${resul}`
    }

    if(igu){
        if (resul.includes('%')) {
            ne2 = resul.split('%')
            console.log(ne2)
            ne2 = parseFloat(ne2[0])
            ne2 = ne1/100*ne2
        } else {
            if (ne1.includes('%')) {
                
            } else {
                ne2 = parseFloat(resul)
            }
            
        }
        
        switch(equa){
            case 1:
                resul = ne1 + ne2
                break
            case 2:
                resul = ne1 - ne2
                break
            case 3:
                resul = ne1 * ne2
                break
            case 4:
                resul = ne1 / ne2
                break
        }
        resul = resul.toString()
        if(resul.includes('.')){
            resul = resul.split('.')
            resul = `${resul[0]},${resul[1]}`
        }
        igu = false
        resultado.innerHTML = `${resul}`
    }
    resul = resul.toString()
}


resultado.innerHTML = `${resul}`