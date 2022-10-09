
const formulario= document.getElementById("formulario");
const selectPlanetas= document.getElementById("selectPlaneta");

const btnCalcularIdade=document.getElementById("btnCalcular");
const inputSegundos= document.getElementById("segundos");
const resultadoParagrafo= document.getElementById("resultado");

formulario.addEventListener("submit",function(evento){
evento.preventDefault();
const option = selectPlanetas.options[selectPlanetas.selectedIndex];

const idade= calcularIdade(option.value,inputSegundos.value);
resultadoParagrafo.textContent=`No planeta ${option.text} você tem ${idade} anos`;

inputSegundos.value='';
});


function calcularIdade(planet, seconds){
 
    let ageOnEarth= parseFloat((seconds/31557600).toFixed(2));
      let ageOnPlanet;
     
      switch(planet){
         case'terra': 
         ageOnPlanet= ageOnEarth;
         break;
    
         case 'mercurio':
          ageOnPlanet= parseFloat((ageOnEarth/0.2408467).toFixed(2));
          break;
    
         case 'venus':
          ageOnPlanet= parseFloat((ageOnEarth/0.61519726).toFixed(2));
         break;
    
         case 'marte':
          ageOnPlanet= parseFloat((ageOnEarth/1.8808158).toFixed(2));
         break;
         case 'jupiter':
          ageOnPlanet= parseFloat((ageOnEarth/ 11.862615).toFixed(2));
         break;
         case 'saturno':
          ageOnPlanet= parseFloat((ageOnEarth/29.447498).toFixed(2));
         break;
         case 'urano':
          ageOnPlanet= parseFloat((ageOnEarth/84.016846).toFixed(2));
         break;
         case 'neturno':
          ageOnPlanet= parseFloat((ageOnEarth/164.79132).toFixed(2));
         break;
    
      }
      return ageOnPlanet;
    
    };


