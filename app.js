let initValue = sideNum.value;
let result = 0
let dieResult = document.querySelector('#result');
let resetButton = document.querySelector('#reset');
let rollButton = document.querySelector('#roll')

function roll() {
    result = Math.floor(Math.random() * sideNum.value) + 1;
    dieResult.textContent = result;
}

function reset() {
    result = 0;
    dieResult.textContent = result;
    sideNum.value = 4;
}

rollButton.addEventListener('click', function () {
    roll()
})

resetButton.addEventListener('click', function () {
    reset()
})


