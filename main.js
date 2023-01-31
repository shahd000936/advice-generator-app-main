document.querySelector(".generate").addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("count").innerText = '#' + data.slip.id
      document.getElementById("advice").innerText = '"' + data.slip.advice + '"'
      console.log(data);
    });
}
