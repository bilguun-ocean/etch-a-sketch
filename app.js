// trying to create 16x16 grid
const container = document.querySelector('#container')

const item = document.createElement('div')
item.classList.add('item')

//function for generating grid
function generateGrid () {
   
    const container = document.querySelector('#container');
    const gridSize = document.querySelector('#grid-size');

    //clearing the pre-existing grid items first:
    removeGrids();

    let value = parseInt(gridSize.value);
    gridClass(value);
    for (i = 0; i < value; i++){
        for (l = 0; l < value; l++){
            const item = document.createElement('div');
            item.classList.add('item');
            item.style.backgroundColor = 'white';
            container.appendChild(item);
        }
    }
}
//function for clearing the pre-existing grid items:
function removeGrids() {
    const container = document.querySelector('#container');
    const allItems = document.querySelectorAll('.item');
    allItems.forEach((item) => {
        container.removeChild(item);
    })
}

//function add different class of grid size for each value:
function gridClass (value) {
    item.classList.add('item')
    if (value === 16) {
        container.classList.remove('grid-small');
        container.classList.remove('grid-medium');
        container.classList.remove('grid-large');
        container.classList.add('grid');

    }else if (value === 32){
        container.classList.remove('grid');
        container.classList.remove('grid-medium');
        container.classList.remove('grid-large');
        container.classList.add('grid-small');
    }else if (value === 48){
        container.classList.remove('grid');
        container.classList.remove('grid-large');
        container.classList.remove('grid-small');
        container.classList.add('grid-medium');
    }else{
        container.classList.remove('grid');
        container.classList.remove('grid-small');
        container.classList.remove('grid-medium');
        container.classList.add('grid-large');
    }
}

//button for creating grid
const button = document.querySelector('#generate');
button.addEventListener('click', () => {
    generateGrid();
})

// black hover effect for each div
const blackHover = document.querySelector('#normal')

normal.addEventListener('click', startHover)

function startHover () {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'black';
        })
    })
}

//change the grid size when slider is moved
const slider = document.querySelector('#grid-size');
const output = document.querySelector('#output-size')
slider.addEventListener('input', () => {
    let text = '';
    output.textContent = text //clear the last displayed value when changed into new
    text = 'Grid size: ' + slider.value + " x " +  slider.value;
    output.textContent += text;
})

//button to clear everything up:
function clearGrid () {
    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.style.backgroundColor = 'white';
        item.style.filter = 'brightness(' + 100 + '%)'
    })
}
const clearButton = document.querySelector('#clear')

clearButton.addEventListener('click', clearGrid)

//Feature 1: Rainbow trail

const randomButton = document.querySelector('#random');

randomButton.addEventListener('click', makeRandom)

function makeRandom() {

    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            item.style.filter = 'brightness(' + 100 + '%)'
            item.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        })
    })
}

//Feature 2: Incrementally darken a color (not just black but an other options too)
//global variable for brightness //ik it bad idea :(
let brightness = 90;
const darkenButton = document.querySelector('#increment-darken');

darkenButton.addEventListener('click', () => {
    darkenColor(brightness);

});

function darkenColor(brightness) {
    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.backgroundColor = 'white';
            item.style.filter = 'brightness(' + brightness + '%)';
            brightness -= 10;
            if (brightness < 0  ) {
                brightness = 95;
            }
        })
    })
}
//button.style.filter = 'brightness(' + 85 + '%)'

//function for letting a user pick the color:
const choose = document.querySelector('#choose-color');
choose.addEventListener('input', pickColor)

function pickColor () {
    const items = document.querySelectorAll('.item');
    const color = document.querySelector('#choose-color');

    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.filter = 'brightness(' + 100 + '%)'
            item.style.backgroundColor = color.value;
        })
    })

}


//Debug 2 when page loads, start with default of 16x16 gric and normal hover effect
window.addEventListener('load', () => {
    generateGrid();
    blackHover();
})
