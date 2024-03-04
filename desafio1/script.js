const button = document.getElementById('botao')

button.addEventListener('click', contar)

function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        window.alert('[ERRO] Algum Valor Nao Foi Inserido Corretamente')    
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f)
        {
           //Contagem Crescente
            for(let c = i; c <= f; c += p)
            {
                res.innerHTML += ' ' + c + '👉'
            }
        }else{
            //Contagem Descrescente
            for(let c = i; c >= f; c -= p)
            {
                res.innerHTML += ' ' + c + '👉'
            }
        }
        res.innerHTML += '🏴'
    }
}