"use strict";

// 在四个页面中加载：导航栏
function loadComponent(id, path) {
  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

window.addEventListener("DOMContentLoaded", () => {
  // 加载导航栏
  loadComponent("header-container", "../components/nav.html");
});
