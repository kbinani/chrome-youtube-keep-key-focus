let target = null;
const onFocus = (ev) => {
  ev.target.blur();
  console.log(`[chrome-youtube-keep-key-focus] blurred the seekbar`);
};

const onTick = () => {
  if (target && target.deref()) {
    return;
  }
  target = null;
  const element = document.querySelector('div.ytp-progress-bar');
  if (element) {
    target = new WeakRef(element);
    element.addEventListener("focus", onFocus);
  }
};

setInterval(onTick, 1000);
