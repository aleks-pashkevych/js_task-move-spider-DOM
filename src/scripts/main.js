'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallEl = wall.getBoundingClientRect();
  const spiderEl = spider.getBoundingClientRect();

  let x = e.pageX - wallEl.left - wall.clientLeft - spiderEl.width / 2;
  let y = e.pageY - wallEl.top - wall.clientTop - spiderEl.height / 2;

  x = Math.max(0, Math.min(x, wall.clientWidth - spider.clientWidth));
  y = Math.max(0, Math.min(y, wall.clientHeight - spider.clientHeight));

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
