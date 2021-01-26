const div = document.createElement('div');
div.classList.add('container');

const body = document.querySelector('body');
body.appendChild(div);
const container = document.querySelector('div.container');
//Button
const resetButton = document.createElement('button');
resetButton.style.width = '90px';
resetButton.style.height = '40px';
resetButton.textContent = 'Reset';
body.appendChild(resetButton); 


let cell;
let target;

//makes cells

function makeCell(numCell){
    for(let c = 0; c < numCell; c++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
};

// cells within each row we are using custom properties with prefix --   //https://github.com/CatQueenCodes/Project-Etch-A-Sketch/blob/master/index.html  //
// makeGrid(5,3)  5 loop 3 cells or columns. In this case (4,4), (5,5) //

function makeGrid(numRow, numCol){
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for(let r = 0; r < numRow; r++){
        makeCell(numCol);
    }
};

function promtGrid(){
    let number = prompt("Choose grid size between 5-64", 16);
        if(number >= 5 && number <= 64){
            makeGrid(number, number);
        }else{
            do{
                number = prompt("Invalid size! Choose between 5-64!");
            }
            while(number < 5 || number > 64);
            makeGrid(number, number);
        }
};

function changeColor(target){
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function(e){
    target = e.target;

    if(target.matches('div.cell')){
        changeColor(target);
    }
});

promtGrid();

//Reset Button

resetButton.addEventListener('click', function(){
    window.location.reload();
});