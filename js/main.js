function clicou(){
document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";   
}

function redirecionar(){
    //window.open("https://store.steampowered.com/?l=portuguese");
    window.location.href = "https://store.steampowered.com/?l=portuguese";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passou gostoso";
   elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

    /*var validar = 0;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade  = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/


//var d = new Date();
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());


//var count = 0;
//for(count=0; count <= 5; count++){
  //  alert(count);
//};

//var idade = prompt("Qual sua idade?");
//if (idade > 18){
  //  alert ("maior de idade");
//}else{
  //  alert("menor de idade");
//};


//var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
//console.log(frutas.nome);
//alert(frutas.nome);

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva")
//lista.pop()
//onsole.log(lista)
//console.log(lista.toString());
//console.log(lista.join(" - "))


//var nome = "Eliel Vieira";
//var n1 = 21;
//var n2 = 10;
//var frase = "Alemanha é o melhor time do mundo"
//alert (nome + " tem " + idade +  " anos");
//alert(idade + idade2)
//console.log(nome);
//console.log(n1 * n2)
//console.log(frase.toUpperCase());
//alert(frase.toUppercase());
