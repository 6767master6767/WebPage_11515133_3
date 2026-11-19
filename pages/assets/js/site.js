<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');

=======
﻿document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
>>>>>>> 35bfb68c8146619659d779917302c8ebff524016
  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '開啟導覽選單');
      nav.classList.remove('is-open');
    };
<<<<<<< HEAD

=======
>>>>>>> 35bfb68c8146619659d779917302c8ebff524016
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '關閉導覽選單' : '開啟導覽選單');
      nav.classList.toggle('is-open', open);
    });
<<<<<<< HEAD

    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 760) closeMenu();
    });
=======
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
>>>>>>> 35bfb68c8146619659d779917302c8ebff524016
  }

  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = String(new Date().getFullYear());
  });
<<<<<<< HEAD
=======

  const form = document.querySelector('[data-demo-form]');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const name = form.elements.name.value.trim();
      const status = form.querySelector('.form-status');
      status.textContent = `示範回覆：${name ? `${name}，謝謝` : '謝謝'}你的留言！此表單尚未連接寄送服務。`;
      form.reset();
    });
  }
>>>>>>> 35bfb68c8146619659d779917302c8ebff524016
});
