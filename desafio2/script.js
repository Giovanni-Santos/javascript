//Criando variavel botao
const button = document.getElementById('button')

//Adicionando observador de click no botao
button.addEventListener('click', tabuada)

//Criando funcao para chamar ao clicar no botao
function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('[ERRO] Valor Insuficiente')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = n + "X" + c + "=" + n*c
            item.value = 'tab' + c
            tab.appendChild(item)
            c++
        }
    }
}