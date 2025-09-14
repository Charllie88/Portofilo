// Minimal client-side behaviour: form handling and year insert
document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
      // Simulate send
      status.textContent = "Sending...";
      setTimeout(() => {
        status.textContent = "Message sent — thank you!";
        form.reset();
      }, 700);
    });
  }
});
