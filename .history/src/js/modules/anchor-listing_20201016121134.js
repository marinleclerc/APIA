export const toggleActiveClick = () => {
  const triggers = document.querySelectorAll('.js-active-click');
  if (triggers.length < 1) return;
  [...triggers].forEach(trigger => {
    trigger.addEventListener('click', e => {
      trigger.classList.toggle('active');
    });
  });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      top: (el.offsetTop - offset),
      behavior: 'smooth',
    });
  });
});
