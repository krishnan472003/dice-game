function randomn(n,j){
    switch (n)
    {
        case 1:
            document.getElementById(j).setAttribute("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_1-512.png");
            break;
    
        case 2:
            document.getElementById(j).setAttribute("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_2-512.png");
            break;
            
        case 3:
            document.getElementById(j).setAttribute("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_3-512.png");
            
            break;
        case 4:
            document.getElementById(j).setAttribute("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_4-512.png");
            break;
        
        case 5:
            document.getElementById(j).setAttribute("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_5-512.png");
            break;
      
         case 6:
            document.getElementById(j).setAttribute("src","https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_6-512.png");
            break;
    }
}
function hi(){
    var number1 = Math.floor(Math.random()*6+1);
    var number2 = Math.floor(Math.random()*6+1);
    var i = 'a';
    var j = 'b';

    randomn(number2,i);
    randomn(number1,j);
    if(number2 === number1){
        document.getElementById("yo").innerHTML ="Its a draw!!!";
    }
    else if(number2>number1){
        document.getElementById("yo").innerHTML ="player 2 won";
    }
    else{
        document.getElementById("yo").innerHTML ="player 1 won";
    }
}