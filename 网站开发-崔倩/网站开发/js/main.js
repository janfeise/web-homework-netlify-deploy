"use strict";

/* 主要逻辑控制中心 */
// 1. 登录逻辑
const userInfo = localStorage.getItem("userInfo");
if (!userInfo) {
  // 用户未登录：跳转登录页面
  window.location.href = "../pages/login.html";
}
