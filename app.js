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

// black hover effect for each div
const normalHover = document.querySelector('#normal')

normalHover.addEventListener('click', startHover)

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
    generateGrid();

    if (slider.value == 16) {
        output.textContent = 'Small';
    }else if (slider.value == 32) {
        output.textContent = 'Medium';
    }else if (slider.value == 48) {
        output.textContent = 'Large';
    }else{
        output.textContent = 'Largest';
    }

    const allButtons = document.querySelectorAll('button')
    allButtons.forEach((button) => {
            allButtons.forEach((button) => {
                button.classList.remove('clicked')
            })
    })
})

//button to clear everything up:
function clearGrid () {
    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.style.backgroundColor = 'white';
    })
}
const clearButton = document.querySelector('#clear')

clearButton.addEventListener('click', clearGrid)

//Feature 1: Rainbow trail

const randomButton = document.querySelector('#random');

randomButton.addEventListener('click', () => {
    makeRandom();
})

function makeRandom() {

    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            let r = Math.round(Math.random() * 255);
            let g = Math.round(Math.random() * 255);
            let b = Math.round(Math.random() * 255);
            item.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        })
    })
}



//function for letting a user pick the color:
const choose = document.querySelector('#choose-color');
choose.addEventListener('input', pickColor)

function pickColor () {
    const items = document.querySelectorAll('.item');
    const color = document.querySelector('#choose-color');

    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = color.value;
        })
    })

}


//Debug 2 when page loads, start with default of 16x16 gric and normal hover effect
window.addEventListener('load', () => {
    generateGrid();
    startHover();
})

//Feature for showing which choice is clicked
const allButtons = document.querySelectorAll('button')
    allButtons.forEach((button) => {
        button.addEventListener('click', () => {

            allButtons.forEach((button) => {
                button.classList.remove('clicked')
            })
            button.classList.toggle('clicked')
        })
    })

//Feature Eraser
const eraser = document.querySelector('#eraser')
eraser.addEventListener('click', eraseGrid)

function eraseGrid () {
    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'white'
        })
    })
}

//Feature: Christmas color trail
const christmas = document.querySelector('#christmas');
christmas.addEventListener('click', startChristmas)

function startChristmas() {
    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            //180 - 255 r
            //0 - 147 g and b for redish colors
            //0 - 144 r
            //130 - 255 g  0 - 120 b for greenish
            let greenOrRed = Math.round(Math.random() * 1);
            if (greenOrRed == 0) {
                let r = Math.round(Math.random() * (255-180) + 180);
                let g = Math.round(Math.random() * (147-0) + 0);
                let b = Math.round(Math.random() * (147-0) + 0);
                item.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            }else {
                let r = Math.round(Math.random() * (147-0) + 0);
                let g = Math.round(Math.random() * (255-130) + 130);
                let b = Math.round(Math.random() * (120-0) + 0);
                item.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            }
        })
    })
}