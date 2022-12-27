/**
 * turn 0 - white figures
 *
 * turn 1 - black figures
 */
let turn = 0,
    testArr = new Array(64),
    selectedFigureCellId,
    selectedCellId;

const cellCollection = document.getElementsByClassName("cell");

function printFigures(dataArr) {
    for (let i = 0; i < 64; i++) {
        switch (dataArr[i]) {
            case 0:
                cellCollection[i].innerHTML = "";
                break;
            case 1:
                cellCollection[i].innerHTML = "<div class = 'figure white-pawn-figure'></div>";
                break;
            case 2:
                cellCollection[i].innerHTML = "<div class = 'figure white-rook-figure'></div>";
                break;
            case 3:
                cellCollection[i].innerHTML = "<div class = 'figure white-knight-figure'></div>";
                break;
            case 4:
                cellCollection[i].innerHTML = "<div class = 'figure white-bishop-figure'></div>";
                break;
            case 5:
                cellCollection[i].innerHTML = "<div class = 'figure white-queen-figure'></div>";
                break;
            case 6:
                cellCollection[i].innerHTML = "<div class = 'figure white-king-figure'></div>";
                break;
            case 7:
                cellCollection[i].innerHTML = "<div class = 'figure black-pawn-figure'></div>";
                break;
            case 8:
                cellCollection[i].innerHTML = "<div class = 'figure black-rook-figure'></div>";
                break;
            case 9:
                cellCollection[i].innerHTML = "<div class = 'figure black-knight-figure'></div>";
                break;
            case 10:
                cellCollection[i].innerHTML = "<div class = 'figure black-bishop-figure'></div>";
                break;
            case 11:
                cellCollection[i].innerHTML = "<div class = 'figure black-queen-figure'></div>";
                break;
            case 12:
                cellCollection[i].innerHTML = "<div class = 'figure black-king-figure'></div>";
                break;
        }
    }
}
testArr.fill(0);
testArr[56] = 2;
testArr[57] = 3;
testArr[58] = 4;
testArr[59] = 5;
testArr[60] = 6;
testArr[61] = 4;
testArr[62] = 3;
testArr[63] = 2;
testArr.fill(1,48,56);
testArr.fill(7, 8, 16);
testArr[0] = 8;
testArr[1] = 9;
testArr[2] = 10;
testArr[3] = 11;
testArr[4] = 12;
testArr[5] = 10;
testArr[6] = 9;
testArr[7] = 8;
printFigures(testArr);


function cellSelect(cellId) {
    let cellFigureId = testArr[cellId];
    console.log(cellFigureId);
    if ((!selectedFigureCellId && cellFigureId !== 0) || cellFigureId !== 0) {
        if (cellFigureId > 6 && turn === 0) return false;
        if (cellFigureId < 7 && turn === 1) return false;
        selectedFigureCellId = cellId;
    } else {
        selectedCellId = cellId;
    }
    highlightSelection();
}

function highlightSelection() {
    for (let i = 0; i < cellCollection.length; i++) {
        cellCollection[i].classList.remove("cell-highlighted", "figure-cell-highlighted")
    }
    if (selectedCellId !== undefined) cellCollection[selectedCellId].classList.add("cell-highlighted");
    if (selectedFigureCellId !== undefined) cellCollection[selectedFigureCellId].classList.add("figure-cell-highlighted");
}

let start_button = document.getElementById('start');
let submit_move = document.createElement('button');
start_button.onclick = function () {
    submit_move.innerHTML = 'Подтвердить ход' + '</button>';
    start_button.parentNode.replaceChild(submit_move, start_button);
}
// function emptyCell(cell_number) {
//     let value = document.getElementById('$cell_number').value;
//     if (turn === 0) {
//         //Ход игрока1
//         switch (value) {
//             case(0):
//                 break;
//             case(1):
//                 function pawn() {
//                     //Ход пешки
//                     }
//                             turn++;
//                             break;
//             case (2):
//             function rook() {
//                 //ход ладьи
//                 }
//                     turn++;
//                     break;
//             case (3):
//             function horse() {
//                 //ход конём
//                 }
//                 turn++;
//                 break;
//             case (4):
//             function bishop() {
//                 //Ход слона
//             }
//
//                 turn++;
//                 break;
//             case (5):
//
//             function queen() {
//                 //Ход королевы
//             }
//
//                 turn++;
//                 break;
//             case (6):
//
//             function king() {
//                 //Ход короля
//             }
//
//                 turn++;
//                 break;
//         }
//     }
//     if (turn === 1) {
//         //Ход игрока2
//         switch (value) {
//             case(0):
//                 break;
//             case(7):
//
//             function pawn() {
//                 //Ход пешки
//             }
//
//                 turn++;
//                 break;
//             case (8):
//
//             function rook() {
//                 //ход ладьи
//             }
//
//                 turn++;
//                 break;
//             case (9):
//
//             function horse() {
//                 //ход конём
//             }
//
//                 turn++;
//                 break;
//             case (10):
//
//             function bishop() {
//                 //Ход слона
//             }
//
//                 turn++;
//                 break;
//             case (11):
//
//             function queen() {
//                 //Ход королевы
//             }
//
//                 turn++;
//                 break;
//             case (12):
//                     function king() {
//                 //Ход короля
//             }
//
//                 turn++;
//                 break;
//         }
//     }
//
// }
// Цикл для обработки value иначе. Из массива, который будет передавать Егор. Когда ты будешь соединять наши проги
// Сотри value в divах(или я сотрку) и раскометь этот цикл, который сам все сделает
// egorArr[0-63]
// for (let i = 0; i < 63; i++){
// let value = egorArr[i];
// let value_of_cell = document.getElementbyid(i(ну тип айди клетки == индекс массива));
// value_of_cell.value = egorArr[i];