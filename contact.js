document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const inputs = {
    fullName: document.getElementById('full-name'),
    email: document.getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
  };

  const errors = {
    fullName: document.getElementById('error-full-name'),
    email: document.getElementById('error-email'),
    subject: document.getElementById('error-subject'),
    message: document.getElementById('error-message')
  };

  const successEl = document.getElementById('contact-success');

  function validate() {
    let valid = true;

    if (!inputs.fullName.value.trim()) {
      errors.fullName.textContent = 'Full name is required.';
      inputs.fullName.setAttribute('aria-invalid', 'true');
      valid = false;
    } else {
      errors.fullName.textContent = '';
      inputs.fullName.removeAttribute('aria-invalid');
    }

    const emailVal = inputs.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) {
      errors.email.textContent = 'Email is required.';
      inputs.email.setAttribute('aria-invalid', 'true');
      valid = false;
    } else if (!emailPattern.test(emailVal)) {
      errors.email.textContent = 'Please enter a valid email (name@example.com).';
      inputs.email.setAttribute('aria-invalid', 'true');
      valid = false;
    } else {
      errors.email.textContent = '';
      inputs.email.removeAttribute('aria-invalid');
    }

    if (!inputs.subject.value.trim()) {
      errors.subject.textContent = 'Subject is required.';
      inputs.subject.setAttribute('aria-invalid', 'true');
      valid = false;
    } else {
      errors.subject.textContent = '';
      inputs.subject.removeAttribute('aria-invalid');
    }

    const msg = inputs.message.value.trim();
    if (!msg) {
      errors.message.textContent = 'Message is required.';
      inputs.message.setAttribute('aria-invalid', 'true');
      valid = false;
    } else if (msg.length < 10) {
      errors.message.textContent = 'Message must be at least 10 characters.';
      inputs.message.setAttribute('aria-invalid', 'true');
      valid = false;
    } else {
      errors.message.textContent = '';
      inputs.message.removeAttribute('aria-invalid');
    }

    return valid;
  }

  Object.values(inputs).forEach((el) => {
    el.addEventListener('blur', validate);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    successEl.hidden = true;
    successEl.textContent = '';

    const ok = validate();
    if (ok) {
      successEl.textContent = 'Thanks! Your message has been sent.';
      successEl.hidden = false;
      form.reset();
      
      successEl.focus && successEl.focus();
    } else {
      
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
    }
  });
});
