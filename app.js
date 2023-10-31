const button = document.querySelector("#get-advice-button");

async function updateNewAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice"); 
    const randomAdvice = await response.json();
  
    console.log("Nuevo consejo!", randomAdvice);
    document.querySelector("#advice-id").textContent = randomAdvice.slip.id;
    document.querySelector(".card__quote").textContent = randomAdvice.slip.advice;  }
  
  button.addEventListener("click", updateNewAdvice);
