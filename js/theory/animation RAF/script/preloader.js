let startTime = NaN;
const durationFly = 700;
const durationOpacity = 300;

let left = 0;

const overlay = document.createElement('div');
overlay.style.cssText = `
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: black;
opacity: 1;
z-index: 999;
`;

const fly = document.createElement('div');
fly.style.cssText = `
  position: fixed;
  width: 50px;
  height: 50px;
  left: ${left};
  top: 0;
  top: calc(50% - 25px);
  background: url('image/fly.svg') center/contain no-repeat;
`;

overlay.append(fly);
document.body.append(overlay);

const hideOverlay = (timestamp) => {
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / durationOpacity;
  overlay.style.opacity = `${1 - progress}`;
  if (progress < 1) {
    requestAnimationFrame(hideOverlay);
  } else {
    overlay.remove();
  }
};


const stepFly = (timestamp) => {
  // timestamp - число в мс, которое постоянно увеличивается
  // (срабатывает с загрузки страницы)
  startTime ||= timestamp;
  const progress = (timestamp - startTime) / durationFly;
  left = document.documentElement.scrollWidth * progress;
  // const maxLeft = document.documentElement.scrollWidth - fly.clientWidth;
  fly.style.transform = `translate(${left}px)`;
  if (progress < 1) {
    requestAnimationFrame(stepFly);
  } else {
    startTime = NaN;
    requestAnimationFrame(hideOverlay);
  }
};
requestAnimationFrame(stepFly);
