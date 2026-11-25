// Client-side validation for the contact form.
// Keeps the user on the page and gives clear feedback before anything is sent.

const form = document.getElementById("contact-form");
const statusEl = form.querySelector(".form-status");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data) {
  const errors = [];
  if (!data.name.trim()) errors.push("Please add your name.");
  if (!EMAIL_PATTERN.test(data.email)) errors.push("Please use a valid email address.");
  if (data.message.trim().length < 20) errors.push("Tell us a little more (at least 20 characters).");
  return errors;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const errors = validate(data);

  if (errors.length) {
    statusEl.textContent = errors[0];
    return;
  }

  statusEl.textContent = "Thanks! We'll reply within one working day.";
  form.reset();
});
