const teclasNum=[...document.querySelectorAll(".num")]

const teclasOp = [...document.querySelectorAll(".op")]

const teclaRes = [...document.querySelectorAll(".res")]

const display = document.querySelector(".display")

const ton=document.querySelector("#ton")

const tlimpar=document.querySelector("#tlimpar")

const tigual = document.querySelector("#tigual")

const tcpy = document.querySelector("#tcpy")

const calc_aba = document.querySelector("#calc_aba")

const calc = document.querySelector("#calc")

let sinal =true

let decimal = false

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false
        
            if(evt.target.innerHTML == ","){
                if(!decimal){
                    decimal =true
                    if(display.innerHTML=="0"){
                        display.innerHTML = "0,"
                    }else{
                        display.innerHTML += evt.target.innerHTML
                    }
                    
                }

                
            }else{
                if(display.innerHTML=="0"){
                    display.innerHTML =""
                    }
                display.innerHTML += evt.target.innerHTML
         }
         
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal =true
            if(display.innerHTML=="0"){
                display.innerHTML =""
            }
            if(evt.target.innerHTML == "x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML += evt.target.innerHTML
            }
            
        }
        
    })
})

tlimpar.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    display.innerHTML = 0
})

tigual.addEventListener("click",(evt)=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})

tcpy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
    alert("Copiado com sucesso! Resultado:  "+display.innerHTML)
})

calc_aba.addEventListener("click",(evt)=>{
    calc.classList.toggle("calc_exibir")
    calc_aba.classList.toggle("calc_aba_exibindo")
})