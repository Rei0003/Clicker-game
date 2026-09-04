let score = 0;

const clicker = document.getElementById('click-button');
const ShopIcon = document.getElementById('shop-icon');
const score_value = document.getElementById('score-value');
const level_value = document.getElementById('level-value');
const shop = document.getElementById('shop-window')

clicker.addEventListener('click', () =>{
    score++;
    score_value.textContent = score;
});

ShopIcon.addEventListener('click', () =>{
    if (shop.style.display === "none") {
        shop.style.display = "inline"
    }
    else{
        shop.style.display = "none"
    }
});