const idade = 16
console.log('Voce tem ' + idade + ' Anos');

if(idade < 16){
    console.log('Nao Vota');
}
else if(idade < 18 || idade > 65){
    console.log('Voto Opcional');
}
else{
    console.log('Voto Obrigatorio');
}