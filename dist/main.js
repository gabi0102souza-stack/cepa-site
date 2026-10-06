'use strict';
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu(returnFocus = false) {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  mobileNav.hidden = expanded;
  menuButton.setAttribute('aria-expanded', String(!expanded));
});
mobileNav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
document.querySelectorAll('[data-image-slot]').forEach(slot => {
  const asset = window.CEPA_ASSETS?.[slot.dataset.imageSlot];
  if (!asset?.src || !asset.alt) return;
  const img = new Image();
  img.className = 'slot-image';
  img.alt = asset.alt;
  img.style.objectPosition = asset.position || '50% 50%';
  const isHero = slot.classList.contains('hero-image');
  img.loading = isHero ? 'eager' : 'lazy';
  img.decoding = 'async';
  if (isHero) img.fetchPriority = 'high';
  img.addEventListener('load', () => {
    slot.classList.add('has-image');
    slot.removeAttribute('role');
    slot.removeAttribute('aria-label');
    img.classList.add('loaded');
  }, { once: true });
  img.addEventListener('error', () => img.remove(), { once: true });
  slot.append(img);
  img.src = asset.src;
});
// O conteúdo permanece visível sem JavaScript ou com movimento reduzido.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(element => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('reveal-pending');
      observer.observe(element);
    }
  });
}
