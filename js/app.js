'use srict';

// used for navigation to h1 elments on the page
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavoir: 'smooth',
    });
  });
});
