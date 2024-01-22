let box = document.getElementsByClassName("box");
let currentPlayer = "X";
let player1 = document.getElementsByTagName("input")[0];
let player2 = document.getElementsByTagName("input")[1];
let submit = document.getElementById("submit");
let again = document.getElementById("tryagain");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    if (box[i].value === "") {
      box[i].value = `${currentPlayer}`;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    chackWinner();
  });
}

again.addEventListener("click", () => {
  for (let a = 0; a < 9; a++) {
    box[a].value = "";
    document.getElementById("name").innerText = ``;
    document.querySelector(".players").style.display = "none";
  }
});

function chackWinner() {
  let box = document.getElementsByClassName("box");
  let X = "X";
  let O = "O";
  if (
    (box[0].value === X || box[0].value === O) &&
    (box[1].value === X || box[1].value === O) &&
    (box[2].value === X || box[2].value === O) &&
    (box[3].value === X || box[3].value === O) &&
    (box[4].value === X || box[4].value === O) &&
    (box[5].value === X || box[5].value === O) &&
    (box[6].value === X || box[6].value === O) &&
    (box[7].value === X || box[7].value === O) &&
    (box[8].value === X || box[8].value === O)
  ) {
    document.getElementById("name").innerText = `A draw!`;
    document.querySelector(".players").removeAttribute("style");
  } else if (
    (box[0].value === X && box[1].value === X && box[2].value === X) ||
    (box[0].value === X && box[3].value === X && box[6].value === X) ||
    (box[0].value === X && box[4].value === X && box[8].value === X) ||
    (box[2].value === X && box[4].value === X && box[6].value === X) ||
    (box[1].value === X && box[4].value === X && box[7].value === X) ||
    (box[2].value === X && box[5].value === X && box[8].value === X) ||
    (box[3].value === X && box[4].value === X && box[5].value === X) ||
    (box[6].value === X && box[7].value === X && box[8].value === X)
  ) {
    document.getElementById(
      "name"
    ).innerText = `Congratulations ${player1.value}, you won`;
    document.querySelector(".players").removeAttribute("style");
  } else if (
    (box[0].value === O && box[1].value === O && box[2].value === O) ||
    (box[0].value === O && box[3].value === O && box[6].value === O) ||
    (box[0].value === O && box[4].value === O && box[8].value === O) ||
    (box[2].value === O && box[4].value === O && box[6].value === O) ||
    (box[1].value === O && box[4].value === O && box[7].value === O) ||
    (box[2].value === O && box[5].value === O && box[8].value === O) ||
    (box[3].value === O && box[4].value === O && box[5].value === O) ||
    (box[6].value === O && box[7].value === O && box[8].value === O)
  ) {
    document.getElementById(
      "name"
    ).innerText = `Congratulations ${player2.value}, you won`;
    document.querySelector(".players").removeAttribute("style");
  }
}

submit.addEventListener("click", () => {
  if (player1.value === "") {
    player1.style.border = "1px solid red";
  } else if (player2.value === "") {
    player2.style.border = "1px solid red";
  } else {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".container").removeAttribute("style");
  }
});

player1.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (player1.value === "") {
      player1.style.border = "1px solid red";
    } else if (player2.value === "") {
      player2.style.border = "1px solid red";
    } else {
      document.querySelector(".login").style.display = "none";
      document.querySelector(".container").removeAttribute("style");
    }
  }
});

player2.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (player1.value === "") {
      player1.style.border = "1px solid red";
    } else if (player2.value === "") {
      player2.style.border = "1px solid red";
    } else {
      document.querySelector(".login").style.display = "none";
      document.querySelector(".container").removeAttribute("style");
    }
  }
});

document.addEventListener('scroll', (e) => {
  if (scrollLock && document.documentElement.scrollTop > 100) {
      document.documentElement.scrollTop = 100;
  }
});