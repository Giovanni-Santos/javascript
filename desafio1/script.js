const button = document.getElementById('botao')
const result = document.getElementById('result')

button.addEventListener('click', text)

function text(){
    let start = document.getElementById('start').value
    let step = document.getElementById('step').value
    let end = document.getElementById('end').value
    
    start = Number(start)
    step = Number(step)
    end = Number(end)

    while(start<=end)
    {
        result.innerHTML += '👉' + start
        start=start+step
    }
    result.innerHTML += '👉🏴'
}