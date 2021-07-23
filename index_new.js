for(var i=0;i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",Handleclick);
}
// Button clicks
function Handleclick(){
    var buttonInnerHtml= this.innerHTML;
    makeSound(buttonInnerHtml)
    }
//KeyBoard clicks
document.addEventListener("keydown",function(event){
    makeSound(event.key)
})
function makeSound(key)
{
    switch(key)
    {
        case "a":
            {
                var tom1= new Audio('Naan un azhaginile.mp3');
                tom1.play();
                break;
            }
        case "b":
            {
                var tom2=new Audio('Mundhinam Parthenae.mp3')
                tom2.play();
                break;
            }
        case "c":
            {
                var tom3= new Audio('Vaaranam Aayiram Nenjukkul Peidhidum.mp3');
                tom3.play();
                break;
            }
        case "d":
            {
                var tom4= new Audio('Vizhi Moodi Yosithal Song.mp3');
                tom4.play();
                break;
            }
        case "e":
            {
                var tom5= new Audio('Hey Amigo - Kaappaan ! Tamil.mp3');
                tom5.play();
                break;
            }
        case "f":
            {
                var tom6= new Audio('Nani Koni.mp3');
                tom6.play();
                break;
            }   
        case "g":
            {
                var tom7= new Audio('Singam Dance - Tamil Song.mp3');
                tom7.play();
                break;
            }   
        case "h":
            {
                var tom8= new Audio('Anbe Peranbe-NGK.mp3');
                tom8.play();
                break;
            }   
        default:
            {
                alert("You have pressed the wrong key");
            } 
    }
}