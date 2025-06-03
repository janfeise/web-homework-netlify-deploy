"use strict";

// DOM
const username = document.querySelector(".login__username");
const password = document.querySelector(".login__password");
const loginBtn = document.querySelector(".login__btn");

// 登录
loginBtn.addEventListener("click", function () {
  const user = username.value;
  const pass = password.value;

  // 存储在local-storage
  user && pass && localStorage.setItem("userInfo", JSON.stringify(user));

  // 跳转主页
  window.location.href = "../pages/index.html";
});
