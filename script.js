// script.js

function checkLuck(percentage) {
  const randomNum = Math.random() * 100;
  let result = "";
  let comment = "";

  if (randomNum < percentage) {
    result = "무조건입니다";
    if (percentage === 1) {
      comment = "1% 확률로 운이 따르는 사람이군요!";
    } else if (percentage === 10) {
      comment = "10% 확률로 운이 따르는 사람이군요!";
    } else if (percentage === 33) {
      comment = "33% 확률로 운이 따르는 사람이군요!";
    } else if (percentage === 50) {
      comment = "50% 확률로 운이 따르는 사람이군요!";
    }
  } else {
    result = "아쉽지만 다음 기회에 도전하세요!";
    if (percentage === 1) {
      comment = "1% 확률로 운이 따르지 않은 것 같네요.";
    } else if (percentage === 10) {
      comment = "10% 확률로 운이 따르지 않은 것 같네요.";
    } else if (percentage === 33) {
      comment = "33% 확률로 운이 따르지 않은 것 같네요.";
    } else if (percentage === 50) {
      comment = "50% 확률로 운이 따르지 않은 것 같네요.";
    }
  }

  document.getElementById("result").innerText = result + " " + comment;
}
