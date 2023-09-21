
let computer='';
let result='';

let score= JSON.parse(localStorage.getItem('score')) || {
win:0,
lose:0,
tie:0
}

document.querySelector('.js-score').innerHTML=`Win:${score.win}, Lose:${score.lose},Tie:${score.tie}`;

function playgame(playerMove){

const random= Math.random();
if(random>0 && random<= 1/3){
    computer='rock';
}
else if( random> 1/3 && random<= 2/3){
    computer='paper';  
}
else{
    computer='scissors';
}


if(playerMove==='rock'){
    if(computer==='rock'){
    result='TIE';
    console.log(result);
    score.tie++;
    
    }
    else if(computer==='paper'){
        result='LOSE';
        console.log(result);
        score.lose++;
        
    }
    else if(computer==='scissors'){
        result='WIN';
        console.log(result);
        score.win++;
        
    }

}


else if(playerMove==='paper'){
    if(computer==='rock'){
    result='WIN';
    console.log(result);
    score.win++;
    
    }
    else if(computer==='paper'){
        result='TIE';
        console.log(result);
        score.tie++;
        
    }
    else if(computer==='scissors'){
        result='LOSE';
        console.log(result);
        score.lose++;
        
    }

}


else if(playerMove==='scissors'){
    if(computer==='rock'){
    result='LOSE';
    console.log(result);
    score.lose++;
    
    }
    else if(computer==='paper'){
        result='WIN';
        console.log(result);
        score.win++;
        
    }
    else if(computer==='scissors'){
        result='TIE';
        console.log(result);
        score.tie++;
        
    }

}

document.querySelector('.js-score').innerHTML=`Win:${score.win}, Lose:${score.lose},Tie:${score.tie}`;

document.querySelector('.results').innerHTML=result;   

document.querySelector('.js-moves').innerHTML=`Your move: ${playerMove} . Computer move:${computer}.`;


localStorage.setItem('score',JSON.stringify(score));

}