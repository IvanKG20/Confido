let timer = 1;
function jobApply() {
  document.getElementById("upOverlay").style.height = "100%";
  document.getElementById("upOverlay").style.bottom = "0";

  setTimeout(function () {
    //replace job
    switch (timer) {
      case 0:
            timer++;
        job0();
        break;
      case 1:
            timer++;
        job1();
        break;
      case 2:
            timer++;
        job2();
        break;
      case 3:
        timer = 0;
        job3();
        break;
      default:
    }
  }, 500);
  setTimeout(function () {
    //show new job
    document.getElementById("upOverlay").style.height = "0%";
    document.getElementById("upOverlay").style.bottom = "100%";
  }, 1000);
}

function jobReject() {
  document.getElementById("upOverlay2").style.height = "100%";
  document.getElementById("upOverlay2").style.bottom = "0";

  setTimeout(function () {
    //replace job

  }, 500);
  setTimeout(function () {
    //show new job
    document.getElementById("upOverlay2").style.height = "0%";
    document.getElementById("upOverlay2").style.bottom = "100%";
  }, 1000);
}

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
      /* right swipe */
      jobApply();
    } else {
      /* left swipe */
      jobReject();
    }
  } else {
    if (yDiff > 0) {
      /* down swipe */
    } else {
      /* up swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
}

    function job0() {
      document.getElementById("company-image").src = "/img/Student/logo.png";
      document.getElementById("CompanyName").innerHTML = "LiveWall";
      document.getElementById("Job").innerHTML = "Student Developer";
      document.getElementById("Salary").innerHTML = "1200 euro per month";
      document.getElementById(
        "Description"
      ).innerHTML = `LiveWall is a creative media agency that provides students and recent graduates with the opportunity 
                to work at a creative, digital agency. Here they can be a developer for the most exciting brand and companies. 
                Here at LiveWall you will develop abilities to advance in your developer career.
`;
      document.getElementById("job-check1").innerHTML =
        "Good communicaiton skills";
      document.getElementById("job-check2").innerHTML = "Fluent in English";
      document.getElementById("job-check3").innerHTML =
        "Intermediate experience in HTML, CSS an JS";
      document.getElementById("job-check4").innerHTML =
        "Ability to cooperate with team members";
      document.getElementById("job-check5").innerHTML =
        "Studying or finished a ICT related higher education degree";
    }

function job1(){
  document.getElementById("company-image").src = "img/Horizon_icon.png";
  document.getElementById("CompanyName").innerHTML = "Horizon studio";
  document.getElementById("Description").innerHTML = `We are a company full of ambitious
student specialized in web development
and design that are really looking forward
to expand their horizons in this industry.
Weekly meetings on Friday
In case you cannot be present with the
group you have to state the reason (and
it should be good)
Everyone must finish their tasks before
the deadlines that we set
BE ACTIVE and give your opinion always
In case a task it's too much for you, don't
be shy, ask for help
If any of the rules is not respected
there will be CONSEQUENCES.
`;
    document.getElementById("job-check1").innerHTML = "Good soft skills";
    document.getElementById("job-check2").innerHTML = "HTML CSS";
    document.getElementById("job-check3").innerHTML = "Teamwork";
    document.getElementById("job-check4").innerHTML = "JavaScript knowledge";
    document.getElementById("job-check5").innerHTML = "at least a second year ICT student";
  }

  function job2() {
    document.getElementById("company-image").src = "img/ASML_logo.png";
    document.getElementById("CompanyName").innerHTML = "ASML";
    document.getElementById("Job").innerHTML = "UX designer";
    document.getElementById("Salary").innerHTML = "4500 euro per month";
    document.getElementById(
      "Description"
    ).innerHTML = `ASML produces the photolithography machines used in the production of computer chips. In these machines, patterns are optically imaged onto a silicon wafer that is covered with a film of light-sensitive material (photoresist). This procedure is repeated dozens of times on a single wafer. The photoresist is then further processed to create the actual electronic circuits on the silicon. 
`;
    document.getElementById("job-check1").innerHTML = "7 years of relevant experience";
    document.getElementById("job-check2").innerHTML = "Good idea of design trends";
    document.getElementById("job-check3").innerHTML = "Teamwork soft skills and presentation ability";
    document.getElementById("job-check4").innerHTML = "Knowledge about how to use Figma and Axure on a high level";
    document.getElementById("job-check5").innerHTML = "Masters degree related to UX design";
  }

    function job3() {
      document.getElementById("company-image").src = "img/google-logo.png";
      document.getElementById("CompanyName").innerHTML = "Google";
      document.getElementById("Job").innerHTML = "JavaScript developer";
      document.getElementById("Salary").innerHTML = "3500 euro per month";
      document.getElementById(
        "Description"
      ).innerHTML = `Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics. It has been referred to as "the most powerful company in the world" and one of the world's most valuable brands due to its market dominance, data collection, and technological advantages in the area of artificial intelligence. 
`;
      document.getElementById("job-check1").innerHTML =
        "3 years of relevant experience";
      document.getElementById("job-check2").innerHTML =
        "Drive to keep learning new technologies";
      document.getElementById("job-check3").innerHTML =
        "Knowledge about React, Vue, Anguler and Ruby";
      document.getElementById("job-check4").innerHTML =
        "Teamwork and soft skills";
      document.getElementById("job-check5").innerHTML =
        "Masters degree related to computer science";
    }