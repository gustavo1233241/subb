const btn=document.querySelector('#btnAcessibilidadecontraste');
const html = document.querySelector('html');
let interruptor = true;

btn.addEventListener('click' , () => { 
    

if(interruptor){
    html.setAttribute('class', 'corpo');
    interruptor = false;
}
else{

html.removeAttribute('class','corpo')

interruptor = true
}




});


const btnletra=document.querySelector('#btnAcessibilidadeletra');
const html1 = document.querySelector('h2');
let interruptor1 = true;

btnletra.addEventListener('click' , () => { 
    

if(interruptor1){
    html1.setAttribute('class', 'letra');
    interruptor1 = false;
}
else{

html1.removeAttribute('class','letra')

interruptor1 = true
}
});




var titulo = document.querySelector("#titulo");
var tituloCelular = document.querySelector("#titulo-celular")
var botao = document.querySelector("#troca-titulo");
var botaopt = document.querySelector("#troca-titulo1");

botao.addEventListener("click", function(){

           

          
                titulo.innerHTML = "Oil is the energy <br/> that moves the <br/> world!";  
                tituloCelular.innerHTML = "You are on: PETROBRAS WEBSITE"
        
            botaopt.addEventListener("click", function(){
           
             
                    titulo.innerHTML = "O petróleo é a <br/> energia que move o <br/> mundo!";  
                    tituloCelular.innerHTML = "Você está em: SITE PETROBRAS"
                   
                    
            
              
    
    })
           
})



var btnAcessibilidades=document.querySelector("#acessibilidadeCel");
var acessCel=document.querySelector("#acessibilidadeCel")
var interruptorDeAcessCel = true
btnAcessibilidades.addEventListener('click', () =>{

if (interruptorDeAcessCel){

acessCel.setAttribute('class', 'acessCel')

interruptorDeAcessCel = false;

}
else{

    acessCel.removeAttribute('class', 'acessCel')
    
    interruptorDeAcessCel = true;
    
    }
    
    



})
