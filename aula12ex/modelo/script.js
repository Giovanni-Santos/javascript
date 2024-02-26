//Criando a variavel Botao e pegando ela por ID
const botao = document.getElementById('botao')

//Colocando um observador de "click" na variavel Botao
//Quando ativado o "click", executar a funcao "verificar()"
botao.addEventListener('click', verificar)

//Criando a funcao "verificar"
function verificar(){
    //Criando as variaveis dentro da funcao
    const data = new Date()//Pegando Data Atual
    const ano = data.getFullYear()//Pegando o ano atual pela variavel "data" criada anteriormente
    const fano = document.getElementById('txtano')//Pegando o ano digitado no formulario
    const res = document.querySelector('#res')//Adicionando o campo da resposta final

    //Verificando se o usuario digitou um valor valido
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')//usuario digitou 0 ou data futura
    }else{
        //Criando variaveis dentro da funcao
        const fsex = document.getElementsByName('radsex')//Resultado de sexo do usuario
        let idade = ano - Number(fano.value)//Realizando o calculo da idade do usuario
        let genero = ''//Criando a Variavel tipo string "genero"
        const img = document.createElement('img')//Criando um elemento imagem

        img.setAttribute('id', 'foto')//Atribuindo um ID com valor "foto" na tag imagem criada
        
        //Verificando o sexo escolhido pelo usuario: 0 = Homem && 1 = Mulher
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //Crianca
                img.setAttribute('src', 'homem-bebe.png')//Atribuindo "homem-bebe.png" no "src"
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'homem-jovem.png')//Atribuindo "homem-jovem.png" no "src"
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')//Atribuindo "homem-adulto.png" no "src"
            }
            else{
                //Idoso
                img.setAttribute('src', 'homem-velho.png')//Atribuindo "homem-velho.png" no "src"
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //Crianca
                img.setAttribute('src', 'mulher-bebe.png')//Atribuindo "mulher-bebe.png" no "src"
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')//Atribuindo "mulher-jovem.png" no "src"
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')//Atribuindo "mulher-adulta.png" no "src"
            }
            else{
                //Idoso
                img.setAttribute('src', 'mulher-velha.png')//Atribuindo "mulher-velha.png" no "src"
            }
        }
        res.style.textAlign = 'center'//Colocando texto centralizado
        res.innerHTML = 'Detectamos Genero: ' + genero + ' Com idade: ' + idade//Resposta Final
        res.appendChild(img)//Ativando a imagem
    }
}