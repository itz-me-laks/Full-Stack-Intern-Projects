// <!-- DOM Manipulation
// - If we want our websites to be interactive, we want it to change on the fly
//  - So when the user clicks a button we need to respond to it by changing the content
// - DOM catalogs our web page into individual objects which we can select and manipulate
// -->
let secretNum = Math.ceil(Math.random() * 50 + 1);
console.log(secretNum);
let score = 20;
let highscore = 0;

// Selecting the check button
let check = document.querySelector(".check");
//selecting the para tag "Message class"
let message = document.querySelector(".message");

// Add event listener to the check button
check.addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  console.log("your guess is ", guess);

  // handling the cases
  // 1. invalid/no input
  if (!guess) {
    alert("Enter an Valid Number 🫤");
  }
  //you guess is correct
  else if (guess === secretNum) {
    //change background color to #60b347
    let bgSuccess = document.querySelector("html");
    bgSuccess.style.backgroundColor = "yellow";

    // Display the message -> You won!

    message.innerHTML = "Congrats you Won🎁";

    // Display the secret number
    let headings = document.querySelector("h1");
    headings.innerHTML = "<b>Your Answer is : </b>";
    let correct_ans = document.querySelector(".number");
    correct_ans.innerHTML = secretNum;

    //update score
    let highscore = document.querySelector(".highscore");
    highscore.innerHTML = score;
  }
  // guess is less than secert number
  else if (guess < secretNum) {
    if (score > 0) {
      // Display You lost if score goes below 0
      score = score - 1;
      let scores = document.querySelector(".score");
      scores.innerHTML = score;

      // Otherwise Diplay the message Too Low, Display the score and decrement the score

      message.innerHTML = "Too Low😮";
    } else {
      document.querySelector(".message").innerHTML = "You Lost!";
      document.querySelector("html").style.backgroundColor = "crimson";
      document.querySelector("h1").textContent = "Correct Answer:";
      document.querySelector(".number").innerHTML = secretNum;
    }
  } else if (guess > secretNum) {
    if (score > 0) {
      // Display You lost if score goes below 0
      score = score - 1;
      let scores = document.querySelector(".score");
      scores.innerHTML = score;

      // Otherwise Diplay the message Too High, Display the score and decrement the score

      message.textContent = "Too High😐";
    } else {
      document.querySelector(".message").innerHTML = "You Lost!";
      document.querySelector("html").style.backgroundColor = "white";
      document.querySelector("h1").textContent = "Correct Answer:";
      document.querySelector(".number").innerHTML = secretNum;
    }
  }
});
