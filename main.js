function contagem(){
    
    
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var resultados = document.getElementById("resultados")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        alert("ERRO!!! Faltam dados para iniciar a conta")
    }
    else{
        resultados.innerHTML=``

        var ini = parseInt(inicio.value)
        var fi = parseInt(fim.value)
        var pass = parseInt(passo.value)
        if(pass <= 0){
            location.reload()

        }
        else if(ini < fi){
            for(let c = ini; c <= fi; c+= pass){
                resultados.innerHTML += `${c} `
            }

        }
        else{
            for(let c = ini; c >= fi; c-= pass){
                resultados.innerHTML += `${c} `
            }
        }
    }
}