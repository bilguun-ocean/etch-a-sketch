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
    startHover();
})

//hover effect for each div
function startHover () {
    const items = document.querySelectorAll('.item');
    items.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'black';
        })
    })
}

//add a mouseenter effect that leaves trail which soon dissapears, idea from MDN mouseenter

//change the grid size when slider is moved
const slider = document.querySelector('#grid-size');
const output = document.querySelector('span')
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
    })
}
const clearButton = document.querySelector('#clear')

clearButton.addEventListener('click', clearGrid)