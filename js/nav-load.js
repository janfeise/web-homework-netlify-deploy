"use strict";

// 在四个页面中加载：导航栏
function loadComponent(id, path) {
  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

const welcome = function () {
  const userInfo = localStorage.getItem("净界空间");
  const textLogin = document.querySelector(".login__name");
  console.log(textLogin);
  if (userInfo) {
    textLogin.textContent = `欢迎您！${userInfo}`;
  }
};

const navColor = function () {
  const currentPath = window.location.pathname;
  const navElement = document.querySelector(".navbar");
  const judge =
    currentPath === "/pages/" || currentPath === "/pages/index.html";
  if (!judge && navElement) {
    navElement.classList.add("nav-active");
  }
};

const logout = function () {
  const btnLogout = document.querySelector(".logout");
  btnLogout.addEventListener("click", function () {
    localStorage.removeItem("净界空间");
    window.location.href = "../pages/login.html";
  });
};

window.addEventListener("DOMContentLoaded", () => {
  // 加载导航栏
  loadComponent("header-container", "../components/nav.html");
  setTimeout(() => {
    navColor();
    welcome();
    logout();
  }, 600);
});
