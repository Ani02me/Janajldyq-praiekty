
// Қар анимациясын
for (let i = 0; i < 100; i++) {
  let snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.innerHTML = '❄';
  document.body.appendChild(snowflake);
}

let newYearDate = new Date('December 31, 2024 23:59:59').getTime();
function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = newYearDate - now;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = '<h2>Happy New Year! 🎉</h2>';
    }
}

let countdownInterval = setInterval(updateCountdown, 1000);
let home = document.getElementById('home')

window.addEventListener("scroll",function(){
  if(window.scrollY > 400){
    home.style.opacity = '1'
  }else{
    home.style.opacity = '0'
  }
})