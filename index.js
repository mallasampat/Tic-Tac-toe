let arr = Array(9).fill(undefined);
console.log('Arr:',arr);
 document.addEventListener("DOMContentLoaded", () => {
    let outer = document.getElementById("outer");
    let chance = false;

    outer.addEventListener("click", (e) => {
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        if(cell.textContent === "") {
            console.log('Chance:',chance);
            if(chance) {
                cell.textContent = "X"
                cell.style.color = "blue";
                arr[cellNumber] = "X"
                winningcombo("X", chance);
            } else {
                cell.textContent = "O"
                cell.style.color = "green";
                arr[cellNumber] = "O";
                winningcombo("O", chance);
            }
            chance = !chance
        }
    })
 });

 function winningcombo(char, chance) {
    if(arr[0] === char && arr[1] === char && arr[2] === char) {
        setTimeout(() => {
            resetGame(char, chance);
        }, 10);
    } else if(arr[3] === char && arr[4] === char && arr[5] === char) {
        setTimeout(() => {
            resetGame(char, chance);
        }, 10);
    } else if(arr[6] === char && arr[6] === char && arr[8] === char) {
        setTimeout(() => {
            resetGame(char, chance);
        }, 10);
    } else if(arr[0] === char && arr[3] === char && arr[6] === char) {
        setTimeout(() => {
            resetGame(char, chance);
        }, 10);
    } else if(arr[1] === char && arr[4] === char && arr[7] === char) {
        setTimeout(() => {
            resetGame(char, chance);
        }, 10);
    } else if(arr[2] === char && arr[5] === char && arr[8] === char) {
        setTimeout(() => {
            resetGame(char, chance);
        }, 10);
    } else if(arr[0] === char && arr[4] === char && arr[8] === char) {
        setTimeout(() => {
            resetGame(char, chance);
        }, 10);
    } else if(arr[2] === char && arr[4] === char && arr[6] === char) {
        setTimeout(() => {
            resetGame(char, chance);
        }, 10);
    }
 }

 function resetGame(char, chance) {
    alert(`${char} Wins`);
    let blocks = document.getElementsByClassName("inner");
    Array.from(blocks).forEach((block) => block.textContent = '');
    arr = Array(9).fill(undefined);
    chance = false;
 }