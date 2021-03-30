// création de la variable qui va récupérer la saisi de la boîte de dialogue
var firstname = prompt("Enter your firstname please :");
//si la variable "fistname" contient des lettres & set différente de null alors

if(isNaN(firstname) && firstname != null){
// on affiche l'alerte
  alert("hello :" + firstname);
// sinon  en dehors de cette condition on affiche une alerte avec la mention
// d'entrée incorrect
  }else{
    alert("Entry incorrect !");
  }
