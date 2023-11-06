function calculadora(){
    let n1=parseInt(num1.value)
    let n2=parseInt(num2.value)
    let operador=operacao.value
     if(operador == '+'){
        document.getElementById('resOperacao').innerHTML=n1+n2
    }else if(operador == '-'){
        document.getElementById('resOperacao').innerHTML=n1-n2
    }else if(operador == '*'){
        document.getElementById('resOperacao').innerHTML=n1*n2
    }else if(operador == '/'){
        document.getElementById('resOperacao').innerHTML=(n1/n2).toFixed(2)
    }
}

