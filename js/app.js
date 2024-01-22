let box = document.getElementsByClassName("box");
let currentPlayer = "<b>X</b>";
let player1 = document.getElementsByTagName("input")[0];
let player2 = document.getElementsByTagName("input")[1];
let submit = document.getElementById("submit");
let again = document.getElementById("tryagain");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    if (box[i].innerHTML === "") {
      box[i].innerHTML = `${currentPlayer}`;
      currentPlayer = currentPlayer === "<b>X</b>" ? "<b>O</b>" : "<b>X</b>";
    }
    chackWinner();
  });
}

again.addEventListener("click", () => {
  for (let a = 0; a < 9; a++) {
    box[a].innerHTML = "";
    document.getElementById("name").innerText = ``;
    document.querySelector(".players").style.display = "none";
  }
});

function chackWinner() {
  let box = document.getElementsByClassName("box");
  let X = "<b>X</b>";
  let O = "<b>O</b>";
  if (
    (box[0].innerHTML === X || box[0].innerHTML === O) &&
    (box[1].innerHTML === X || box[1].innerHTML === O) &&
    (box[2].innerHTML === X || box[2].innerHTML === O) &&
    (box[3].innerHTML === X || box[3].innerHTML === O) &&
    (box[4].innerHTML === X || box[4].innerHTML === O) &&
    (box[5].innerHTML === X || box[5].innerHTML === O) &&
    (box[6].innerHTML === X || box[6].innerHTML === O) &&
    (box[7].innerHTML === X || box[7].innerHTML === O) &&
    (box[8].innerHTML === X || box[8].innerHTML === O)
  ) {
    document.getElementById(
      "name"
    ).innerText = `A draw!`;
    document.querySelector(".players").removeAttribute("style");
  } else if (
    (box[0].innerHTML === X && box[1].innerHTML === X && box[2].innerHTML === X) ||
    (box[0].innerHTML === X && box[3].innerHTML === X && box[6].innerHTML === X) ||
    (box[0].innerHTML === X && box[4].innerHTML === X && box[8].innerHTML === X) ||
    (box[2].innerHTML === X && box[4].innerHTML === X && box[6].innerHTML === X) ||
    (box[1].innerHTML === X && box[4].innerHTML === X && box[7].innerHTML === X) ||
    (box[2].innerHTML === X && box[5].innerHTML === X && box[8].innerHTML === X) ||
    (box[3].innerHTML === X && box[4].innerHTML === X && box[5].innerHTML === X) ||
    (box[6].innerHTML === X && box[7].innerHTML === X && box[8].innerHTML === X)
  ) {
    document.getElementById(
      "name"
    ).innerText = `Congratulations ${player1.innerHTML}, you won`;
    document.querySelector(".players").removeAttribute("style");
  } else if (
    (box[0].innerHTML === O && box[1].innerHTML === O && box[2].innerHTML === O) ||
    (box[0].innerHTML === O && box[3].innerHTML === O && box[6].innerHTML === O) ||
    (box[0].innerHTML === O && box[4].innerHTML === O && box[8].innerHTML === O) ||
    (box[2].innerHTML === O && box[4].innerHTML === O && box[6].innerHTML === O) ||
    (box[1].innerHTML === O && box[4].innerHTML === O && box[7].innerHTML === O) ||
    (box[2].innerHTML === O && box[5].innerHTML === O && box[8].innerHTML === O) ||
    (box[3].innerHTML === O && box[4].innerHTML === O && box[5].innerHTML === O) ||
    (box[6].innerHTML === O && box[7].innerHTML === O && box[8].innerHTML === O)
  ) {
    document.getElementById(
      "name"
    ).innerText = `Congratulations ${player2.innerHTML}, you won`;
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

  setTimeout(() => {
    scrollToTop();
  }, "500");
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

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