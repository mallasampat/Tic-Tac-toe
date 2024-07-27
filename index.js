let arr = Array(9).fill(undefined);
let chance = false;
 document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer");

    outer.addEventListener("click", (e) => {
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        if(cell.textContent === "") {
            if(chance) {
                cell.textContent = "X"
                cell.style.color = "blue";
                arr[cellNumber] = "X"
                winningcombo("X");
            } else {
                cell.textContent = "O"
                cell.style.color = "green";
                arr[cellNumber] = "O";
                winningcombo("O");
            }
            chance = !chance
        }
    })
 });

 function winningcombo(char) {
    if(arr[0] === char && arr[1] === char && arr[2] === char) {
        winningColour(true, 0, 1, 2);
        setTimeout(() => {
            resetGameAfterwin(char, 0, 1, 2);
        }, 10);
    } else if(arr[3] === char && arr[4] === char && arr[5] === char) {
        winningColour(true, 3, 4, 5);
        setTimeout(() => {
            resetGameAfterwin(char, 3, 4, 5);
        }, 10);
    } else if(arr[6] === char && arr[7] === char && arr[8] === char) {
        winningColour(true, 6, 7, 8);
        setTimeout(() => {
            resetGameAfterwin(char, 6, 7 , 8);
        }, 10);
    } else if(arr[0] === char && arr[3] === char && arr[6] === char) {
        winningColour(true, 0, 3, 6);
        setTimeout(() => {
            resetGameAfterwin(char, 0, 3, 6);
        }, 10);
    } else if(arr[1] === char && arr[4] === char && arr[7] === char) {
        winningColour(true, 1, 4, 7);
        setTimeout(() => {
            resetGameAfterwin(char, 1, 4, 7);
        }, 10);
    } else if(arr[2] === char && arr[5] === char && arr[8] === char) {
        winningColour(true, 2, 5, 8);
        setTimeout(() => {
            resetGameAfterwin(char, 2, 5, 8);
        }, 10);
    } else if(arr[0] === char && arr[4] === char && arr[8] === char) {
        winningColour(true, 0, 4, 8);
        setTimeout(() => {
            resetGameAfterwin(char, 0, 4, 8);
        }, 10);
    } else if(arr[2] === char && arr[4] === char && arr[6] === char) {
        winningColour(true, 2, 4, 6);
        setTimeout(() => {
            resetGameAfterwin(char, 2, 4, 6);
        }, 10);
    }
 }

 function winningColour(condition, index1, index2, index3) {
    let cell1 = document.getElementById(`block-${index1}`);
    let cell2 = document.getElementById(`block-${index2}`);
    let cell3 = document.getElementById(`block-${index3}`);

    if(condition) {
        cell1.style.backgroundColor = 'red';
        cell2.style.backgroundColor = 'red';
        cell3.style.backgroundColor = 'red';
    } else {
        cell1.style.backgroundColor = '#fff';
        cell2.style.backgroundColor = '#fff';
        cell3.style.backgroundColor = '#fff';
    }
 }

 function resetGameAfterwin(char, idx1, idx2, idx3) {
    alert(`${char} Wins`);
    winningColour(false, idx1, idx2, idx3);
    resetGame();
 }

 function resetGame() {
    let blocks = document.getElementsByClassName("inner");
    Array.from(blocks).forEach((block) => block.textContent = '');
    arr = Array(9).fill(undefined);
    chance = false;
 }