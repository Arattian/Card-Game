let cardFace = ['img/cards/7C.png', 'img/cards/7S.png', 'img/cards/7H.png', 'img/cards/7D.png',
                'img/cards/8C.png', 'img/cards/8S.png', 'img/cards/8H.png', 'img/cards/8D.png',
                'img/cards/9C.png', 'img/cards/9S.png', 'img/cards/9H.png', 'img/cards/9D.png',
                'img/cards/10C.png', 'img/cards/10S.png', 'img/cards/10H.png', 'img/cards/10D.png',
                'img/cards/JC.png', 'img/cards/JS.png', 'img/cards/JH.png', 'img/cards/JD.png',
                'img/cards/QC.png', 'img/cards/QS.png', 'img/cards/QH.png', 'img/cards/QD.png',
                'img/cards/KC.png', 'img/cards/KS.png', 'img/cards/KH.png', 'img/cards/KD.png',
                'img/cards/AC.png', 'img/cards/AS.png', 'img/cards/AH.png', 'img/cards/AD.png', ]

for (let i = 0; i < 8; i += 0.5) {
    let card = document.createElement("DIV");
    card.classList.add('cards');
    document.getElementById('game').appendChild(card);
    card.style.top = -i + 208 + 'px';
    card.style.left = i + 300 + 'px';
}

for (let i = 0; i < 8; i += 0.5) {
    let card = document.createElement("DIV");
    card.classList.add('cards');
    document.getElementById('game').appendChild(card);
    card.style.top = -i + 208 +'px';
    card.style.left = i + 600 + 'px';
}

let anim1 = setInterval(stacking, 50);
let cards = document.getElementsByClassName('cards');
let moveL = 0;
let moveR = 6.4;
let l = 0;
let r = 16;
function stacking() {
        cards[l].style.top = 208 - moveL + 'px';
        cards[l].style.left = 450 + moveL + 'px';
        moveL += 0.4;
        l++;
        cards[r].style.top = 208 - moveR + 'px';
        cards[r].style.left = 450 + moveR + 'px';
        moveR += 0.4;
        r++;
    if (l === 16) {
        clearInterval(anim1);
    }
}

setTimeout(moving, 2000);
//stack move and rotate
function moving() {
    for (let i = 0; i < 32; i++) {
        cards[i].style.transition = 'top 1s ease, left 1s ease, transform 1.5s ease';
        cards[i].style.top = parseInt(cards[i].style.top) - 88 + 'px';
        cards[i].style.left = parseInt(cards[i].style.left) - 220 + 'px';
        cards[i].style.transform = 'rotate(-45deg)';
    }
}

//cards giving animation
let anim2;
setTimeout(function () {
    anim2 = setInterval(giveCardsPl, 200);
}, 5000);

let op = 31;
let pl = 23;

function giveCardsPl() {
    cards[op].style.transition = 'all 1s';
    cards[op].style.top = parseInt(cards[op].style.top) - 90 + 'px';
    cards[op].style.left = parseInt(cards[op].style.left) + 420 + 'px';
    cards[op].style.transform = 'rotate(0deg)';
    op--;
    if (op === 23) {
        op = 24;
        clearInterval(anim2);
    }
}

let anim3;
setTimeout(function () {
    anim3 = setInterval(giveCardsOp, 200); 
}, 5000);

function giveCardsOp() {
    cards[pl].style.transition = 'all 1s';
    cards[pl].style.top = parseInt(cards[pl].style.top) + 270 + 'px';
    cards[pl].style.left = parseInt(cards[pl].style.left) + 420 + 'px';
    cards[pl].style.transform = 'rotate(0deg)';
    pl--;
    if (pl === 15) {
        pl = 16;
        clearInterval(anim3);
    }
}

let anim4;
setTimeout(function () {
    anim4 = setInterval(receiveCards, 100);
}, 8000);
let move = 0;
function receiveCards() {
    document.getElementById('opponent').style.zIndex = 3;
    cards[pl].style.left = 320 +  move + 'px';
    cards[pl].style.top = '435px';
    cards[op].style.left = 320 + move + 'px';
    cards[op].style.top = '-20px';
    move += 40;
    pl++;
    op++;
    if (pl === 24) {
        pl = 16;
        clearInterval(anim4);
    }
}

let anim5;
setTimeout(function () {
    anim5 = setInterval(showCards, 100);
}, 10000);

let playerCards = [];
let opponentCards = [];

function showCards() {
    let p = Math.floor(Math.random() * 32);
    let e = Math.floor(Math.random() * 32);
    if (cardFace[p] === '' || p === e || cardFace[e] === '') {
        return;
    }
    playerCards.push(cardFace[p]);
    opponentCards.push(cardFace[e]);
    cards[pl].style.transition = 'transform 0.8s ease';
    cards[pl].style.transform = 'rotateY(360deg)';
    cards[pl].style.background = `url(${cardFace[p]}) no-repeat`;
    cards[pl].style.backgroundSize = 'contain';
    cardFace[p] = '';
    cardFace[e] = '';
    pl++;
    if (pl === 24) {
        clearInterval(anim5);
    }
}

setTimeout(events, 13000);

function events() {
    for (let i = 16; i < 24; i++) {
        cards[i].style.cursor = 'pointer';
        cards[i].style.transition = 'all 0.1s ease';
        cards[i].addEventListener('click', function () {
            let r = Math.floor(Math.random() * 360);
            this.style.top = '208px';
            this.style.left = '457px';
            this.style.transform = `rotate(${r}deg)`;
            if (i < 20) {
                // i+1 to disable card stacking
                for (let j = 16; j < i + 1; j++) { 
                    if (cards[j].style.top !== '208px') {
                        cards[j].style.left = parseInt(cards[j].style.left) + 40 + 'px';
                    }
                }
            } else {
                // i+1 to disable card stacking
                for (let j = (i + 1); j < 24; j++) { 
                    if (cards[j].style.top !== '208px') {
                        cards[j].style.left = parseInt(cards[j].style.left) - 40 + 'px';
                    }
                }
            }
            disable();
            setTimeout(enable, 2000);
        });
        cards[i].addEventListener('click', oppMove);
    }
}

function disable() {
    document.getElementById('disable').style.display = 'block';
}

function enable() {
    document.getElementById('disable').style.display = 'none';
}
// array to disable card repeating
let arr = [0, 1, 2, 3, 4, 5, 6, 7]; 
let positions = ['-50px', '455px'];
let opScore = 0;
let plScore = 0;

function oppMove() {
    let x = Math.floor(Math.random() * arr.length);
    // random op-card 24-31
    let c = arr[x] + 24; 
    cards[c].style.transition = 'all 0.2s ease';
    cards[c].style.zIndex = 10;
    cards[c].style.top = '208px';
    cards[c].style.left = '457px';
    cards[c].style.transform = `rotate(${c + 90}deg)`;
    cards[c].style.background = `url(${opponentCards[x]}) no-repeat`;
    cards[c].style.backgroundSize = 'contain';
    // deleting arr items to lock card repeating
    arr.splice(x, 1); 

    if (c < 28) {
        // i+1 to disable card stacking
        for (let j = 24; j < c + 1; j++) { 
            if (cards[j].style.top !== '208px') {
                cards[j].style.left = parseInt(cards[j].style.left) + 40 + 'px';
            }
        }
    } else {
        // i+1 to disable card stacking
        for (let j = c; j < 32; j++) { 
            if (cards[j].style.top !== '208px') {
                cards[j].style.left = parseInt(cards[j].style.left) - 40 + 'px';
            }
        }
    }

    setTimeout(function () {
        let r = Math.floor(Math.random() * 2);
        for (let i = 16; i < 32; i++) {
            if (cards[i].style.top === '208px') {
                cards[i].style.top = positions[r];
                cards[i].style.opacity = 0;
                if (r === 0) {
                    opScore += 10;
                    document.getElementById('opscore').innerHTML = opScore;
                } else {
                    plScore += 10;
                    document.getElementById('plscore').innerHTML = plScore;
                }
            }
        }

    }, 1500);
}
