const bpmDisplay = document.getElementById('bpmDisplay');
const tempoSlider = document.getElementById('tempoSlider');
const startBtn = document.getElementById('startBtn');
const pendulum = document.getElementById('pendulum');
const weight = document.getElementById('weight');

let isPlaying = false;
let intervalId = null;
let bpm = 120;
let swingDirection = 1;
let swingAngle = 0;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playClick() {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.frequency.value = 800;
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.05);
}

function tick() {
  playClick();
  
  swingDirection *= -1;
}

function animatePendulum() {
  if (!isPlaying) {
    swingAngle = 0;
    pendulum.style.transform = `translateX(-50%) rotate(0deg)`;
    return;
  }
  
  const maxAngle = 25;
  const speed = (bpm / 60) * 2;
  
  swingAngle += speed * swingDirection;
  
  if (swingAngle > maxAngle) {
    swingAngle = maxAngle;
    swingDirection = -1;
    playClick();
  } else if (swingAngle < -maxAngle) {
    swingAngle = -maxAngle;
    swingDirection = 1;
    playClick();
  }
  
  pendulum.style.transform = `translateX(-50%) rotate(${swingAngle}deg)`;
  
  const weightPosition = 30 + (120 - swingAngle) * 0.5;
  weight.style.top = `${weightPosition}px`;
  
  requestAnimationFrame(animatePendulum);
}

function startMetronome() {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  isPlaying = true;
  startBtn.textContent = 'STOP';
  
  animatePendulum();
}

function stopMetronome() {
  isPlaying = false;
  startBtn.textContent = 'START';
  
  swingAngle = 0;
  swingDirection = 1;
  pendulum.style.transform = `translateX(-50%) rotate(0deg)`;
  weight.style.top = '30px';
}

function updateBPM() {
  bpm = parseInt(tempoSlider.value);
  bpmDisplay.textContent = bpm;
}

tempoSlider.addEventListener('input', updateBPM);

startBtn.addEventListener('click', () => {
  if (isPlaying) {
    stopMetronome();
  } else {
    startMetronome();
  }
});

updateBPM();