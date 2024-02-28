const aparecer = document.getElementById('aparecer')
const apagar = document.getElementById('apagar')
const fundo = document.getElementById('fundo')

aparecer.addEventListener('click', apareceu)
apagar.addEventListener('click', apagou)

function apareceu(){
    fundo.style.backgroundImage = 'url(ben10.jpg)'
    fundo.style.display = 'block'
    console.log('Oi Cauazinho');
}

function apagou(){
    fundo.style.backgroundImage = display = 'none'
    console.log('Tchau Cauazinho');
}