const button=document.querySelector('.menu');const nav=document.querySelector('#nav');button?.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');button?.setAttribute('aria-expanded','false')}));document.querySelector('#year').textContent=new Date().getFullYear();

// Tema claro/oscuro: conserva la elección y respeta la preferencia del sistema la primera vez.
const themeToggle = document.querySelector('#theme-toggle');
const savedTheme = (() => { try { return localStorage.getItem('renea-theme'); } catch { return null; } })();
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === 'dark';
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    themeToggle.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
    themeToggle.querySelector('.theme-label').textContent = dark ? 'Modo claro' : 'Modo oscuro';
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#111318' : '#ffffff');
}
applyTheme(savedTheme || 'dark');
themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('renea-theme', next); } catch {}
});

