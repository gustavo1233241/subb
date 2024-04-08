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

const btn4=document.querySelector('#btnAcessibilidadecontraste1');

console.log(btn4);

btn4.addEventListener('click' , () => { 
    

if(btn4.checked){
    html.setAttribute('class', 'corpo');
 
    
}
else{

html.removeAttribute('class','corpo')



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





const btnletra1=document.querySelector('#btnAcessibilidadeletra1');

console.log(btnletra1)

btnletra1.addEventListener('click' , () => { 
    

if(btnletra1.checked){
    html1.setAttribute('class', 'letra');
   
}
else{

html1.setAttribute('class','titulo')


}
});

const btnletra2=document.querySelector('#btnAcessibilidadeletra2');

console.log(btnletra2)

btnletra2.addEventListener('click' , () => { 
    

if(btnletra2.checked){
    html1.setAttribute('class', 'letra2');
   
}
else{

html1.setAttribute('class','titulo')


}
});




var titulo = document.querySelector("#titulo");
var tituloCelular = document.querySelector("#titulo-celular")
var botao = document.querySelector("#troca-titulo");
var botaopt = document.querySelector("#troca-titulo1");
var btningcel = document.querySelector('#trocass12')
botao.addEventListener("click", function(){

           

          
                titulo.innerHTML = "Oil is the energy <br/> that moves the <br/> world!";  
                tituloCelular.innerHTML = "You are on: PETROBRAS WEBSITE"
        
            botaopt.addEventListener("click", function(){
           
             
                    titulo.innerHTML = "O petróleo é a <br/> energia que move o <br/> mundo!";  
                    tituloCelular.innerHTML = "Você está em: SITE PETROBRAS"
                   
                    
            
              
    
    })
})    
btningcel.addEventListener("click", function(){
    if(btningcel.checked){

           

          
        titulo.innerHTML = "Oil is the energy <br/> that moves the <br/> world!";  
        tituloCelular.innerHTML = "You are on: PETROBRAS WEBSITE"
    }
    else{
   
     
            titulo.innerHTML = "O petróleo é a <br/> energia que move o <br/> mundo!";  
            tituloCelular.innerHTML = "Você está em: SITE PETROBRAS"
           
            
    }   
})








