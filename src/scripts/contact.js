import emailjs from '@emailjs/browser';
import i18next from 'i18next';

export function setupContactForm() {
  const form = document.getElementById('contact');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z06vp7o',
      'template_cl3qtxl',
      form,
      'vbQOrOi0NK4BE7230'
    )
    .then(() => {
      alert(i18next.t('contact.success'));
      form.reset();
    })
    .catch((error) => {
      alert(i18next.t('contact.error') + ': ' + error.text);
    });
  });
}