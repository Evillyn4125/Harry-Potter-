const avanca = deocument.querySelectorAll(".btn-proximo")
console.log(avanca)

avanca.forEach(button =>{
    button.addEventListen('click', function(){
        const atual = document.querySelector('ativo')
    const proximoPasso = "passo-" + this.getAattribute('data-proximo')
    atual.classList.remove('ativo')
    document.getElementById(proximoPasso).classList.add('ativo')
   })
}

)