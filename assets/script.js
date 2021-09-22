let screen = document.getElementById("screen");

let squares = [];
let height = 20;
let width = 60;
let curY = Math.floor(height / 2);
let curX = Math.floor(width / 2);


//INITIATE GRID
function initialGridFill() {

    for (y = 0; y < height; y++) {
        let row = [];
        for (x = 0; x < width; x++) {
            if (x == curX && y == curY) row.push("X");
            else row.push("O");
        }
        squares.push(row);
    }
}

//UPDATE SCREEN
function fillMap() {

    let map = document.createElement("table");
    map.setAttribute('id', 'map');

    if (document.getElementById('map')) {
        let oldMap = document.getElementById('map');
        oldMap.remove();
    }

    let newMap = document.createElement("tbody");

    for (i = 0; i < squares.length; i++) {

        let row = document.createElement('tr');

        for (j = 0; j < squares[i].length; j++) {
            let point = document.createElement('td');
            point.textContent = squares[i][j];
            row.append(point);
        }

        newMap.append(row);

    }

    map.append(newMap);

    screen.appendChild(map);

}

//UPDATE POSITION
function movement(direction) {

    //squares[curY][curX] = "Z";
    squares[curY][curX] = "O";

    switch (direction) {
        case 37:
            curX--;
            break;
        case 38:
            curY--;
            break;
        case 39:
            curX++;
            break;
        case 40:
            curY++;
            break;
        default:
            console.log("how did you get here?")
            break;
    }

    if (curX < 0) {
        curX = 0
    } else if (curX > width - 1) {
        curX = width - 1;
    } else if (curY < 0) {
        curY = 0;
    } else if (curY > height - 1) {
        curY = height - 1;
    }

    squares[curY][curX] = "X";

    fillMap();

}

//GET USER INPUT
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40') {

        movement(e.keyCode);

    }

}

/*
function randomMovement() {


    let direction = Math.ceil(Math.random() * 4) + 36;

    movement(direction);

}
*/

initialGridFill();

fillMap();

//setInterval(randomMovement, 1000);

document.onkeydown = checkKey;
