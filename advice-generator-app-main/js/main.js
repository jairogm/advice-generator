const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceId = document.getElementById("advice-id");
      adviceId.innerHTML = data.slip.id;
      const adviceBody = document.getElementById("advice-text");
      adviceBody.innerHTML = data.slip.advice;
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
