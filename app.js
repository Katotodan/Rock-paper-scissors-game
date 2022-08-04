const round = document.querySelector('em');
const playerStart = document.querySelectorAll('#player .start i');
const computerStart = document.querySelectorAll('#computer .start i');
const playerSpan = document.querySelectorAll('#player span');
const computerSpan = document.querySelectorAll('#computer span');
const displayClickPlayer = document.querySelector('#player aside');
const displayClickComputer = document.querySelector('#computer aside p');
const result = document.querySelector('#result');
const load = document.querySelector('.loader')

let NumberOfMatch = 1;
round.innerHTML = NumberOfMatch;

let playerWin = 0;
let computerWin = 0;
const update = (success) =>{
    if(success === 'win'){
        playerWin++;
        for(let i=0; i<playerWin; i++){
            if(playerStart[i]){
                playerStart[i].style.color = 'yellow'
            }
        }
        if(playerWin === 5){
            endGame('win')
        }
    }else{
        computerWin++;
        for(let i=0; i<computerWin; i++){
            if(computerStart[i]){
                computerStart[i].style.color = 'yellow'
            }
        }
        if(computerWin === 5){
            endGame('fail')
        }
    }
}

let playAgain = true;
const fail = () =>{
    result.style.display = 'block';
    result.innerHTML = 'You loss' 
    update('lose')
}
const succed = () =>{
    result.style.display = 'block';
    result.innerHTML = 'You win' 
    update('win')
}

playerSpan.forEach((element , index) =>{
        
    element.addEventListener('click' , () =>{
        if(playAgain === true){
            playAgain = false;
            displayClickPlayer.innerHTML = `<span>${element.innerHTML}</span>`;
            load.style.display = 'inline-block';
            let random = Math.floor(Math.random() *3);
            setTimeout(() => {
                load.style.display = 'none';
                displayClickComputer.innerHTML = `<span> ${playerSpan[random].innerHTML}</span>`;
                if(index === random){
                    result.style.display = 'block';
                    result.innerHTML = 'TIE GAME' 
                }else if(index === 0 && random === 1){
                    fail()
                }else if(index === 0 && random === 2){
                    succed()
                }else if(index === 1 && random === 0){
                    succed()                  
                }else if(index === 1 && random === 2){
                    fail()
                }else if(index === 2 && random === 0){
                    fail()                 
                }else if(index === 2 && random === 1){
                    succed()                   
                }
                setTimeout(() => {
                    displayClickComputer.innerHTML ="";
                    displayClickPlayer.innerHTML = "";
                    result.innerHTML = ""
                    playAgain = true;

                }, 1000);
                
            }, 1000);
        }    
    })
    
    
    
})

const endGame = () =>{
    displayClickComputer.innerHTML = "";
    displayClickPlayer.innerHTML = "";
    document.querySelector('article').style.display = 'block';
    const out = document.querySelectorAll('article q');
    out[0].innerHTML = playerWin;
    out[1].innerHTML = computerWin;
    playerSpan.forEach(element =>{
        element.style.display = 'none'
    })
    computerSpan.forEach(element =>{
        element.style.display = 'none'
    })
    
    
    
}

const startGame = () =>{
    playerWin = 0;
    computerWin = 0;
    document.querySelector('article').style.display = 'none';
    playerSpan.forEach(element =>{
        element.style.display = 'inline-block'
    });
    computerSpan.forEach(element =>{
        element.style.display = 'inline-block'
    })
    computerStart.forEach(element =>{
        element.style.color = 'rgb(123, 112, 112)'
    })
    playerStart.forEach(element =>{
        element.style.color = 'rgb(123, 112, 112)'
    })
    NumberOfMatch++;
    round.innerHTML = NumberOfMatch;


}

const btn = document.querySelector('button');
btn.addEventListener('click' , (e) =>{
    e.preventDefault();
    startGame()
})
