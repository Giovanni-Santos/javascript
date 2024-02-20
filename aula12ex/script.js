//Criando variaveis
const corpo = document.getElementsByTagName('body')[0]
const msg = document.getElementById('msg')
const img = document.getElementById('imagem')
const data = new Date()
const hora = data.getHours()

corpo.addEventListener('load', carregar());

function carregar(){
    msg.innerHTML = 'Agora sao ' + hora + ' horas'
    if(hora >= 0 && hora < 12){
        msg.innerHTML += '<p>Bom Dia!</p>'
        img.scr = 'manha.png'
        document.body.style.background = '#f4c578'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML += '<p>Boa Tarde!</p>'
        img.src = 'tarde.png'
        document.body.style.background = '#5d39ec'
    }else{
        msg.innerHTML += '<p>Boa Noite!</p>'
        img.src = 'noite.png'
        document.body.style.background = '#4c4c4c'
    }
}
