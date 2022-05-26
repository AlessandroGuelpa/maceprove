var minutes = 00;
var second = 00;
var mil = 00;
var mild = document.getElementById("mil");
var secd = document.getElementById("second");
var mind = document.getElementById("minutes");
var Int;

function start() {
  clearInterval(Int);
  Int = setInterval(function s1() {
    mil++;
    if (mil <= 9) {
      mild.innerHTML = "0" + mil;
    }
    if (mil > 9) {
      mild.innerHTML = mil;
    }
    if (mil > 99) {
      second++;
      secd.innerHTML = "0" + second;
      mil = 0;
      mild.innerHTML = "0" + 0;
    }
    if (second <= 9) {
      secd.innerHTML = "0" + second;
    }
    if (second > 9) {
      secd.innerHTML = second;
    }
    if (second > 60) {
      minutes++;
      mind.innerHTML = "0" + minutes;
      second = 0;
      secd.innerHTML = "0" + 0;
    }
    if (minutes <= 9) {
      mind.innerHTML = "0" + minutes;
    }
    if (minutes > 9) {
      mind.innerHTML = minutes;
    }
    if (minutes > 60) {
      clearInterval(Int);
      Int = setInterval(0);
    }
  }, 10);
}
function stop() {
  clearInterval(Int);
  Int = setInterval(0);
}
function reset() {
  clearInterval(Int);
  Int = setInterval(0);
  minutes = 00;
  second = 00;
  mil = 00;
  mind.innerHTML = minutes + "0";
  secd.innerHTML = second + "0";
  mild.innerHTML = mil + "0";
}
