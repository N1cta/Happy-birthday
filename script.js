// Countdown functionality
const countdownOverlay = document.querySelector('.countdown-overlay');
const countdownNumber = document.querySelector('.countdown-number');
const firstSlide = document.querySelector('.first--slide');

// Hide first slide initially
firstSlide.style.display = 'none';

let count = 3;
countdownNumber.textContent = count;

const countdownInterval = setInterval(() => {
  count--;
  countdownNumber.textContent = count;
  
  if (count <= 0) {
    clearInterval(countdownInterval);
    countdownOverlay.style.opacity = '0';
    setTimeout(() => {
      countdownOverlay.style.display = 'none';
      firstSlide.style.display = 'block';
    }, 500);
  }
}, 1000);

// Initialize elements
const firstSlideContainer = document.querySelector(".slide--content");
const secondSlideContainer = document.querySelector(".slide--content--one");
const secondCanvas = document.querySelector(".second--canvas");
const thirdCanvas = document.querySelector(".third--canvas");
const music = document.getElementById("birthdayMusic");

// Hide initially
secondSlideContainer.style.display = "none";
secondCanvas.style.display = "none";
thirdCanvas.style.display = "none";

// Animation sequence
setTimeout(() => {
  firstSlideContainer.style.display = "none";
  secondSlideContainer.style.display = "block";
  music.play();
}, 6500);

setTimeout(() => {
  document.querySelector(".first--slide").style.display = "none";
  secondCanvas.style.display = "block";
}, 10500);

setTimeout(() => {
  secondCanvas.style.display = "none";
  thirdCanvas.style.display = "block";
}, 13800);

// Add confetti
setTimeout(() => {
  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti";
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "50%";
    
    const animationDuration = 3 + Math.random() * 5;
    confetti.style.animation = `confetti-fall ${animationDuration}s linear forwards`;
    
    confettiContainer.appendChild(confetti);
  }
  
  document.body.appendChild(confettiContainer);
}, 15000);

// Add restart button
setTimeout(() => {
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Повторить";
  restartBtn.style.position = "fixed";
  restartBtn.style.bottom = "20px";
  restartBtn.style.right = "20px";
  restartBtn.style.zIndex = "1000";
  restartBtn.style.padding = "10px 20px";
  restartBtn.style.background = "#ffffffff";
  restartBtn.style.border = "none";
  restartBtn.style.borderRadius = "5px";
  restartBtn.style.cursor = "pointer";
  restartBtn.style.fontFamily = "'Carter One', sans-serif";
  restartBtn.style.fontSize = "1.2em";
  
  restartBtn.addEventListener("click", () => {
    location.reload();
  });
  
  document.body.appendChild(restartBtn);
}, 21500);

// Прокрутка к поздравлению
setTimeout(() => {
  // Создаем конфеtti перед прокруткой
  createConfetti();
  
  // Плавная прокрутка к поздравлению
  setTimeout(() => {
    document.querySelector('.final-congratulations').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }, 500);

}, 18500);

// Функция создания конфеtti
function createConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti";
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "50%";
    
    const animationDuration = 3 + Math.random() * 5;
    confetti.style.animation = `confetti-fall ${animationDuration}s linear forwards`;
    
    confettiContainer.appendChild(confetti);
  }
  
  document.body.appendChild(confettiContainer);
}

// Кнопка "Повторить"
setTimeout(() => {
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Повторить";
  restartBtn.className = "restart-btn";
  
  restartBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => location.reload(), 1000);
  });
  
  document.body.appendChild(restartBtn);
}, 18000);



// Добавить проверку касаний
document.addEventListener('touchstart', function() {
  // Автовоспроизведение аудио после взаимодействия с пользователем
  const music = document.getElementById("birthdayMusic");
  if (music.paused) {
    music.play().catch(e => console.log("Audio play failed:", e));
  }
}, { once: true });

// Оптимизация confetti для мобильных
function createConfetti() {
  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti";
  
  // Уменьшаем количество confetti для производительности
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "absolute";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "50%";
    confetti.style.willChange = "transform, opacity"; // Оптимизация
    
    const animationDuration = 2 + Math.random() * 3; // Более короткая анимация
    confetti.style.animation = `confetti-fall ${animationDuration}s linear forwards`;
    
    confettiContainer.appendChild(confetti);
  }
  
  document.body.appendChild(confettiContainer);
}