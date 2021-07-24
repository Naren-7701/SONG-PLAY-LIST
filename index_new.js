for(var i=0;i < document.querySelectorAll(".drum").length; i++)
{
    
    document.querySelectorAll(".drum")[i].addEventListener("click",Handleclick);
}
// Button clicks
function Handleclick(){
    var buttonInnerHtml= this.innerHTML;
    makeSound(buttonInnerHtml);
    for(var i=0;i < document.querySelectorAll(".drum").length; i++)
{
    
    document.querySelectorAll(".drum")[i].disabled="true";
}

}
function makeSound(key)
{
    switch(key){
        
        case "A":{
                var tom1= new Audio('Naan un azhaginile.mp3');
                tom1.play();
                break;
            }
        case "B":{
                var tom2=new Audio('Mundhinam Parthenae.mp3')
                tom2.play();
                break;
            }
        case "C":{
                var tom3= new Audio('Vaaranam Aayiram Nenjukkul Peidhidum.mp3');
                tom3.play();
                break;
            }
        case "D":{
                var tom4= new Audio('Vizhi Moodi Yosithal Song.mp3');
                tom4.play();
                break;
            }
        case "E":{
                var tom5= new Audio('Hey Amigo - Kaappaan ! Tamil.mp3');
                tom5.play();
                break;
            }
        case "F":{
                var tom6= new Audio('Nani Koni.mp3');
                tom6.play();
                break;
            }   
        case "G":{
                var tom7= new Audio('Singam Dance - Tamil Song.mp3');
                tom7.play();
                break;
            }   
        case "H":{
                var tom8= new Audio('Anbe Peranbe-NGK.mp3');
                tom8.play();
                break;
            }   
    }
}
function myFunction() {
    document.location.reload();
  }
