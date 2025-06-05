"use strict";

// 在四个页面中加载：页脚
function loadComponent(id, path) {
  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

window.addEventListener("DOMContentLoaded", () => {
  // 加载页脚
  loadComponent("footer-container", "../components/footer.html");
});
