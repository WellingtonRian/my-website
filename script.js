let res = document.getElementById('res')
function envEmail(){
    if(window.location.href === "https://wellingtonrian.com/obrigado.html"){
        setTimeout(function(){
            
            window.location.href="https://wellingtonrian.com/index.html" 
        }, 10000)

        
    }
    
}

envEmail()

let segundos = 10
function iniciarTimer(){
    setTimeout(function exibirTempo(){
        segundos--
        res.innerHTML = `Redirecionando em ${segundos} segundos...`
        setTimeout(exibirTempo,1000)
    },1000)
}
iniciarTimer()


