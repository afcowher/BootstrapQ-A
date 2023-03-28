document.getElementById("1").addEventListener("click", click1);
document.getElementById("2").addEventListener("click", click2);
document.getElementById("3").addEventListener("click", click3);
document.getElementById("4").addEventListener("click", click4);

function click1() {
  document.getElementById("1").innerHTML = "Correct!";
  document.getElementById("2").innerHTML = "Prince";
  document.getElementById("3").innerHTML = "King";
  document.getElementById("4").innerHTML = "Jack";
}

function click2() {
  document.getElementById("1").innerHTML = "Queen";
  document.getElementById("2").innerHTML = "Incorrect!";
  document.getElementById("3").innerHTML = "King";
  document.getElementById("4").innerHTML = "Jack";
}

function click3() {
  document.getElementById("1").innerHTML = "Queen";
  document.getElementById("2").innerHTML = "Prince";
  document.getElementById("3").innerHTML = "Incorrect!";
  document.getElementById("4").innerHTML = "Jack";
}

function click4() {
  document.getElementById("1").innerHTML = "Queen";
  document.getElementById("2").innerHTML = "Prince";
  document.getElementById("3").innerHTML = "King";
  document.getElementById("4").innerHTML = "Incorrect!";
}