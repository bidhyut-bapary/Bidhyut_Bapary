var typed = new Typed(".text", {
  strings: ["AI Engineer", "Web Developer", "Data Scientist" , "Python Developer" , " Machine Learning"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
//profassinonal Skill//
document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-line span");
  const labels = document.querySelectorAll(".percentage-label");

  const skills = [
    { selector: ".html", percent: 90 },
    { selector: ".css", percent: 60 },
    { selector: ".javascript", percent: 85 },
    { selector: ".python", percent: 50 },
    { selector: ".react", percent: 75 }
  ];

  // Animation trigger function
  function animateBars() {
    skills.forEach((skill, i) => {
      const bar = document.querySelector(`.progress-line${skill.selector} span`);
      const label = labels[i];
      let current = 0;
      const target = skill.percent;

      // Animate bar width
      bar.style.width = target + "%";

      // Animate number count
      const counter = setInterval(() => {
        if (current < target) {
          current++;
          label.textContent = current + "%";
        } else {
          clearInterval(counter);
        }
      }, 25);
    });
  }

  // Run animation only once when section appears
  const skillsSection = document.querySelector("#skills");
  let animated = false;

  window.addEventListener("scroll", () => {
    const rect = skillsSection.getBoundingClientRect();
    if (!animated && rect.top < window.innerHeight - 100) {
      animateBars();
      animated = true;
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const radialBars = document.querySelectorAll(".radial-bar");
  const radialSection = document.querySelector(".radial-bars");
  let animated = false;

  const skillValues = [90, 65, 75, 85]; // শতাংশ অনুযায়ী

  function animateRadialBars() {
    radialBars.forEach((bar, i) => {
      const path = bar.querySelector(".path");
      const percentText = bar.querySelector(".percentage");
      const radius = 80;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (skillValues[i] / 100) * circumference;

      // animate fill
      path.style.strokeDasharray = circumference;
      path.style.strokeDashoffset = circumference;

      setTimeout(() => {
        path.style.transition = "stroke-dashoffset 2s ease";
        path.style.strokeDashoffset = offset;
      }, 100);

      // animate number count
      let current = 0;
      const target = skillValues[i];
      const counter = setInterval(() => {
        if (current < target) {
          current++;
          percentText.textContent = current + "%";
        } else {
          clearInterval(counter);
        }
      }, 25);
    });
  }

  window.addEventListener("scroll", () => {
    const rect = radialSection.getBoundingClientRect();
    if (!animated && rect.top < window.innerHeight - 100) {
      animateRadialBars();
      animated = true;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  toggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
document.getElementById("downloadCV").addEventListener("click", function () {
    // নিচের লিংকে তোমার GitHub ফাইল লিংক বসাও
    const fileUrl = "https://drive.google.com/file/d/1VE0nrbtJScFXTmqL4rgFdc06UEHKZIcY/view?usp=sharing";
    const fileName = "Bidhyut_Bapary.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  document.getElementById("downloadCV").addEventListener("click", function () {
  const fileUrl = "hhttps://drive.google.com/uc?export=download&id=1AbCdEfGhIjKlmNOP";
  window.open(fileUrl, "_blank");
});
