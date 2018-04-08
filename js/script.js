let div = document.getElementsByClassName("hidden");
let locked = document.getElementsByClassName("game-mod");

for (let i = 1; i < locked.length; i++) {
    locked[i].addEventListener('mouseover', function () {
        div[i - 1].style.opacity = 1;
    });
    locked[i].addEventListener('mouseout', function () {
        div[i - 1].style.opacity = 0;
    })
}

let menu = document.getElementById('menu');

menu.addEventListener('mouseover', function () {
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName('line')[i].style.backgroundColor = '#fff';
    }
});

menu.addEventListener('mouseout', function () {
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName('line')[i].style.backgroundColor = '#EFC89D';
    }
});

let gameMenu = document.getElementById('menu');
let toggler = 0;
let menuHide;

gameMenu.addEventListener('click', function () {
    if (toggler === 0) {
        document.getElementById('game-menu').style.left = '825px';
        toggler = 1;
        clearTimeout(menuHide); 
        menuHide = setTimeout(hideMenu, 3000);
    } else {
        document.getElementById('game-menu').style.left = '100%';
        toggler = 0;
        clearTimeout(menuHide); 
    }
});

function hideMenu() {
    document.getElementById('game-menu').style.left = '100%';
    toggler = 0;
}

let avatar = document.getElementById('avatar');
let avToggler = 0;

avatar.addEventListener('click', function() {
    if (avToggler === 0) {
        document.getElementById('player-menu').style.left = '0px';
        avToggler = 1;
    } else {
        document.getElementById('player-menu').style.left = '-270px';
        avToggler = 0;
    }
}); 

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('player-menu').style.left = '-270px';
    avToggler = 0;
})