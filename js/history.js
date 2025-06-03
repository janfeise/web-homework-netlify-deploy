"use strict";

// Elements
const containerBoxs = document.querySelectorAll(".history__box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("history__box--animation");
    }
  });
});

containerBoxs.forEach((box) => {
  observer.observe(box);
});
