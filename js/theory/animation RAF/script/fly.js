const fly = document.createElement('div');
//  pointer-events:none; - нельзя кликнуть или выделить
fly.style.cssText = `
  position: fixed;
  width: 50px;
  height: 50px;
  left: 0;
  top: 0;
  pointer-events: none;
  background: url('image/fly.svg') center/contain no-repeat;
`;
const docEl = document.documentElement;
document.body.append(fly);
const calcPositionFly = () => {
  const maxLeft = docEl.scrollWidth - fly.clientWidth;
  const maxScroll = docEl.scrollHeight - docEl.clientHeight;

  const percentScroll = (window.scrollY * 100) / maxScroll;
  const left = maxLeft * (percentScroll / 100);
  // fly.style.left = left + 'px';
  fly.style.transform = `translate(${left}px)`;
};

window.addEventListener('scroll', () => {
  requestAnimationFrame(calcPositionFly);
});
calcPositionFly();
