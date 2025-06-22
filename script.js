
// Countdown Timer
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3); // 3 days from now

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("timer").innerText =
    `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

  if (distance < 0) {
    document.getElementById("timer").innerText = "Offer Expired!";
  }
}

setInterval(updateCountdown, 1000);

// FAQ toggle
function toggleFAQ(el) {
  el.classList.toggle("open");
}
