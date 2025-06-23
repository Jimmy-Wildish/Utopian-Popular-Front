/*  script.js
    ------------  */

window.addEventListener("DOMContentLoaded", () => {
  /* ───────────── 1. LOAD HEADER & FOOTER ───────────── */
  document.querySelectorAll("[data-include]").forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(res => (res.ok ? res.text() : Promise.reject(file)))
      .then(html => (el.innerHTML = html))
      .catch(err => console.error(`Failed to load ${err}`));
  });

  /* ───────────── 2. CARD FADE-IN ANIMATION ───────────── */
  const cards = document.querySelectorAll(".info-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  cards.forEach(card => observer.observe(card));
});






document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  if (!form) return; // If the form isn’t on this page, do nothing

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (result.success) {
        alert('Message sent!');
        form.reset();
      } else {
        alert('Something went wrong.');
      }
    } catch (err) {
      alert('Network error.');
      console.error(err);
    }
  });
});

