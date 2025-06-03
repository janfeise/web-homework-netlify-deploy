"use strict";
// Elements
const containerHome = document.querySelector(".home-container");

/* 主要逻辑控制中心 */
// 1. 登录逻辑
const userInfo = localStorage.getItem("净界空间");
if (!userInfo) {
  // 用户未登录：跳转登录页面
  window.location.href = "../pages/login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // 轮播图逻辑
  const images = document.querySelectorAll(".carousel img");
  const prevBtn = document.querySelector(".carousel-nav.prev");
  const nextBtn = document.querySelector(".carousel-nav.next");
  let currentIndex = 0;

  // 初始化轮播图
  function initCarousel() {
    images.forEach((img, index) => {
      img.style.opacity = index === 0 ? "1" : "0";
    });
  }

  // 切换图片
  function switchImage(direction) {
    images[currentIndex].style.opacity = "0";
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].style.opacity = "1";
  }

  // 自动轮播
  let interval = setInterval(() => switchImage(1), 3000);

  // 按钮点击事件
  prevBtn.addEventListener("click", () => {
    clearInterval(interval);
    switchImage(-1);
    interval = setInterval(() => switchImage(1), 3000);
  });

  nextBtn.addEventListener("click", () => {
    clearInterval(interval);
    switchImage(1);
    interval = setInterval(() => switchImage(1), 3000);
  });

  initCarousel();

  // 博客文字逻辑
  const blogCards = document.querySelectorAll(".blog-card");
  blogCards.forEach((card) => {
    const img = card.querySelector("img");
    card.setAttribute("data-title", img.alt);
  });

  // 资讯板块标签切换
  const tabs = document.querySelectorAll(".news-tabs .tab");
  const newsLists = document.querySelectorAll(".news-list");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // 移除所有标签的 active 类
      tabs.forEach((t) => t.classList.remove("active"));
      // 隐藏所有资讯列表
      newsLists.forEach((list) => (list.style.display = "none"));

      // 激活当前标签
      this.classList.add("active");
      // 显示对应的资讯列表
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).style.display = "block";
    });
  });
});

/**
 * 当进入home区域时，显示导航栏
 */
const observer = new IntersectionObserver((entries) => {
  const navElement = document.querySelector(".navbar");
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        navElement.classList.add("nav-active");
      }, 1000);
    } else {
      navElement?.classList?.remove("nav-active");
    }
  });
});
observer.observe(containerHome);
