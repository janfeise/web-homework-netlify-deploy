"use strict";

// Elements
const messageItem = document.querySelectorAll(".message__item");

/**
 * function
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

messageItem.forEach((item, index) => {
  index && (item.style.animationDelay = `${getRandomInt(10)}s`);
});
