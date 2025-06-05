"use strict";

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});

// Elements
const messageItem = document.querySelectorAll(".message__item");
const publishBtn = document.getElementById("publishBtn");

/**
 * function
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

messageItem.forEach((item, index) => {
  index && (item.style.animationDelay = `${getRandomInt(10)}s`);
});

// 发布留言
// 留言模板
const messageTemplate = {
  id: Date.now(), // 使用时间戳作为唯一ID
  content: "", // 留言内容
  timestamp: "", // 留言时间
  avatar: "message__avatar--" + Math.floor(Math.random() * 4 + 1), // 随机头像1-4
  isNew: true, // 标记为新留言
};

// 本地存储的留言数组
const messages = [];

// 发布留言函数
function publishMessage() {
  // 1. 获取输入内容
  const content = document.getElementById("messageInput").value;

  // 每次发布时都生成一个新的头像
  const newMessage = {
    id: Date.now(),
    content: content,
    timestamp: new Date().toLocaleString(),
    avatar: "message__avatar--" + Math.floor(Math.random() * 4 + 1), // 随机头像1-4
    isNew: true,
  };

  // 3. 保存到本地存储
  const messages = JSON.parse(localStorage.getItem("messages") || "[]");
  messages.push(newMessage);
  localStorage.setItem("messages", JSON.stringify(messages));

  // 4. 显示新留言
  displayNewMessage(newMessage);

  // 发布成功
  messageInput.value = ""; // 清空输入框
  messageInput.placeholder = "留言发布成功！";
  setTimeout(() => {
    messageInput.placeholder = "请输入您的留言...";
  }, 2000);

  // 5. 清空输入框
  document.getElementById("messageInput").value = "";
}

// 显示新留言函数
function displayNewMessage(message) {
  const messageHTML = `
        <div class="message__item message__new">
            <div class="message__avatar ${message.avatar}"></div>
            <div class="message__text">${message.content}</div>
        </div>
    `;
  console.log(message.avatar);
  const container = document.querySelector(".message-scroll-area");
  container.insertAdjacentHTML("beforeend", messageHTML);

  // 选中刚刚插入的元素
  const newMessage = container.querySelector(".message__item:last-child");

  // 修改 top 值，例如设为 20%
  newMessage.style.top = `${Math.floor(Math.random() * 70) + 10}%`;
}

// 发布留言按钮点击事件
publishBtn.addEventListener("click", publishMessage);
