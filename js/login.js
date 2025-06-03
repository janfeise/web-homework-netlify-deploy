"use strict";

// Elements
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const btnLogin = document.querySelector(".login__btn");

/**
 * function
 */
function areadyLog() {
  // 读取
  const token = localStorage.getItem("净界空间");
  if (token) {
    window.location.href = "../pages/index.html";
  }
}
areadyLog();

function validateEmail(email) {
  // 常见邮箱正则表达式
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;
  console.log(validateEmail(email));
  if (validateEmail(email) && password === "123456") {
    // 登录成功，跳转主页
    localStorage.setItem("净界空间", email);
    window.location.href = "../pages/index.html";
  } else if (!validateEmail(email)) {
    alert("邮箱格式错误！！！");
  } else if (!password) {
    alert("请输入你的密码");
  } else if (password !== "123456") {
    alert("密码错误！！！");
  }
});
