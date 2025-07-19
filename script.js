const logo = document.getElementById('logo');

let hoverTimer;

const redirectUrl = 'https://github.com/begiflow';

logo.addEventListener('mouseenter', () => {
  hoverTimer = setTimeout(() => {
    window.location.href = redirectUrl;
  }, 3000);
});

logo.addEventListener('mouseleave', () => {
  clearTimeout(hoverTimer);
});
