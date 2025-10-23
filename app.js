console.log("HELLO BUFFALO PLATOON!");

let randomNumber = Math.floor(Math.random() * 100) + 1;

// everytime the button gets clicked run this
document.getElementById("guessButton").onclick = function() {
  
  // get user input
  let guess = Number(document.getElementById("guessInput").value);

  // low/high if statements
  if (guess < randomNumber) {
    document.getElementById("message").textContent = "Too low!";
  } 
  else if (guess > randomNumber) {
    document.getElementById("message").textContent = "Too high!";
  } 
  else {
    document.getElementById("message").textContent = "You got it!";
  }

  let list = document.getElementById("guesses");
  let item = document.createElement("li");
  item.textContent = guess;
  list.appendChild(item);
};
