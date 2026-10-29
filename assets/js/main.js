const langToggle = document.getElementById('langToggle');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
let currentLang = 'en';
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
      el.textContent = el.dataset[currentLang];
    });
    langToggle.textContent = currentLang === 'en' ? 'عربي' : 'EN';
  });
}
