//referance for code: https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
  return evt.touches; // browser API
}

function handleTouchStart(evt) {
  const firstTouch = getTouches(evt)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}

let part = 1;
function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      part++;
      if (part === 2) {
        moveToPart2();
      }
      if (part === 3) {
        moveToPart3();
      }
      if (part > 3) {
        window.location.href = "candidates.html";
        console.log("move to next page");
      }
    } else {
      part--;
      if (part <= 0) {
        part = 1;
      }
      if (part === 1) {
        moveToPart1();
      }
      if (part === 2) {
        moveToPart2();
      }
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

function moveToPart1() {
  document.getElementById("line2").style.backgroundColor = "#2e5e6095";
  document.getElementById("bus-guide-text").innerHTML = `
        <div class="bus-guide-text">
            <h1>You are now just a swipe away from your dream job!</h1>
            <h2>These are our house rules:</h2>
            <h3>Swipe right if you like the job!</h3>
            <img src="/img/swipe-right.svg" alt="swipe right icon">
        </div>
  `;
}

function moveToPart2() {
  document.getElementById("line2").style.backgroundColor = "#2e5e60";
  document.getElementById("line3").style.backgroundColor = "#2e5e6095";
  document.getElementById("bus-guide-text").innerHTML = `
        <div class="bus-guide-text">
            <h1>Swipe right if you like the candidate!</h1>
            <img src="/img/swipe-right.svg" alt="swipe right icon">
            <h1>Swipe left if you don’t!</h1>
            <img src="/img/swipe-left.svg" alt="swipe left icon">
        </div>
  `;
}

function moveToPart3() {
  document.getElementById("line3").style.backgroundColor = "#2e5e60";
  document.getElementById("bus-guide-text").innerHTML = `
        <div class="bus-guide-text">
            <h1>After you match with a company, you will get notified!</h1>
            <h3>If they need further information, they will message you!</h3>
        </div>
  `;
}
