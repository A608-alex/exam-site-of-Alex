let correctCode = "EXAM2026";
let time = 60;

function startExam() {
  let code = document.getElementById("code").value;
  if (code === correctCode) {
    document.getElementById("login").style.display = "none";
    document.getElementById("exam").style.display = "block";
    startTimer();
  } else {
    alert("Wrong Exam Code");
  }
}

function startTimer() {
  let timer = setInterval(() => {
    document.getElementById("timer").innerText = "Time Left: " + time;
    time--;
    if (time < 0) {
      clearInterval(timer);
      submitExam();
    }
  }, 1000);
}

function submitExam() {
  alert("Exam Submitted");
  location.reload();
}
