let move = 'X';
document.querySelectorAll('.game-board div')
.forEach((item) => {
    item.addEventListener('click' , () => {
        if(item.innerHTML == 'X' || item.innerHTML === 'O') {
 
        } else {
            item.innerHTML = move;
            item.classList.add('animation');
            if (move === 'X') {
                move = 'O';
            } else if (move === 'O') {
                move = 'X';
            }
        }
        
    });
});




let filledIntervel = setInterval(() => {
    let filled = 0;
    document.querySelectorAll('.game-board div')
    .forEach((item) => {
        if (item.innerHTML === "X" || item.innerHTML === "O") {
            filled++;
        }
        if (filled >= 5) {
            giveResult();
        }
        if (filled === 9) {
            clearInterval(filledIntervel);
            giveResult();
        }
    });
}, 500);

document.querySelector('.js-refresh')
.addEventListener('click' , () => {
    document.querySelector('.ox-box1').innerHTML = '';
    document.querySelector('.ox-box2').innerHTML = '';
    document.querySelector('.ox-box3').innerHTML = '';
    document.querySelector('.ox-box4').innerHTML = '';
    document.querySelector('.ox-box5').innerHTML = '';
    document.querySelector('.ox-box6').innerHTML = '';
    document.querySelector('.ox-box7').innerHTML = '';
    document.querySelector('.ox-box8').innerHTML = '';
    document.querySelector('.ox-box9').innerHTML = '';

    document.querySelectorAll('.game-board div')
    .forEach((item) => {
        if (item.classList.contains('animation')) {
            item.classList.remove('animation');
        }

        if (item.classList.contains('game-won-card')) {
            item.classList.remove('game-won-card');
        }

        move = 'X';
    });

});

function giveResult () {
    let a = document.querySelector('.ox-box1');
    let b = document.querySelector('.ox-box2');
    let c = document.querySelector('.ox-box3');
    let d = document.querySelector('.ox-box4');
    let e = document.querySelector('.ox-box5');
    let f = document.querySelector('.ox-box6');
    let g = document.querySelector('.ox-box7');
    let h = document.querySelector('.ox-box8');
    let i = document.querySelector('.ox-box9');

    let cardMatrix = [
        [a , b , c] ,
        [d , e , f] ,
        [g , h , i]
    ];

    let matrix = [
        [tellMove(a) , tellMove(b) , tellMove(c)] ,
        [tellMove(d) , tellMove(e) , tellMove(f)] ,
        [tellMove(g) , tellMove(h) , tellMove(i)]
    ];

    
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
            if (matrix[i][0] !== null) {
                for (let j of cardMatrix[i]) {
                    j.classList.add('game-won-card');    
                    stopIntervel();   
                }
            }
            
        }

    }

    for (let i = 0; i < 3; i++) {
        if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]) {
            if (matrix[0][i] !== null) {
                for (let j = 0; j < cardMatrix.length; j++) {
                    cardMatrix[j][i].classList.add('game-won-card');    
                    stopIntervel();               
                }
            }
        }
    }

    if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
        if (matrix[0][0] !== null) {
            cardMatrix[0][0].classList.add('game-won-card'); 
            cardMatrix[1][1].classList.add('game-won-card'); 
            cardMatrix[2][2] .classList.add('game-won-card'); 
            stopIntervel();
        }
    }

    if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
        if (matrix[0][2] !== null) {
            cardMatrix[0][2].classList.add('game-won-card'); 
            cardMatrix[1][1].classList.add('game-won-card'); 
            cardMatrix[2][0] .classList.add('game-won-card'); 
            stopIntervel();
        }
    }

}

function stopIntervel () {
    let i = 0;
    document.querySelectorAll('.game-board div')
    .forEach((item) => {
        if (item.classList.contains('game-won-card')) {
            i++;
        }

        if(i >= 3) {
            move = '';
            clearInterval(filledIntervel);
            delareResult();
        }
    });
}

function tellMove (item) {
    if(item.innerHTML == 'X' || item.innerHTML === 'O') {
        return item.innerHTML;
    } else {
        return null;
    }
}

function delareResult () {

    document.querySelector('.result').style.opacity = '1';

    if (
        document.querySelector('.game-won-card')
        .innerHTML === 'X'
    ) {
        document.querySelector('.js-person').innerHTML = '1';
    } else {
        document.querySelector('.js-person').innerHTML = '2';
    }
    
    
}