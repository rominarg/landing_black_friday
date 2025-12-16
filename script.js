const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3);

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Cálculos de tiempo
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar en el HTML
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;

  // Si la cuenta termina
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML =
      "<h2 style='color:var(--yellow)'>¡OFERTA FINALIZADA!</h2>";
  }
}, 1000);
