const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (nav && !nav.querySelector('a[href="resources.html"]')) {
  const resourcesLink = document.createElement('a');
  resourcesLink.href = 'resources.html';
  resourcesLink.textContent = 'Resources';
  if (location.pathname.endsWith('/resources.html')) resourcesLink.classList.add('active');
  nav.insertBefore(resourcesLink, nav.querySelector('.nav-button'));
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('.year').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

document.querySelectorAll('.logo img').forEach((logo) => {
  logo.style.width = '64px';
  logo.style.height = '64px';
  logo.style.flex = '0 0 64px';
  logo.style.objectFit = 'cover';
  logo.style.objectPosition = 'center';
  logo.style.borderRadius = '50%';
  logo.style.background = 'var(--cream)';
  logo.style.border = '2px solid rgba(243, 181, 44, .78)';
  logo.style.boxShadow = '0 7px 18px rgba(28, 44, 70, .2)';
});
