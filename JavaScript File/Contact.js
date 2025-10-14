
  const form = document.querySelector(".contact-form");
  const success = document.querySelector(".success");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      success.style.display = "block";
      form.reset();
    } else {
      alert("❌ Failed to send. Try again.");
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});