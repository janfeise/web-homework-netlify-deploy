/* 弹窗 */
"use strict";

// Elements
const btnSetting = document.querySelector(".setting__icon");
const containerBg = document.querySelector(".bg");
const containerPopuplogin = document.querySelector("#popup-login");
const containerPopupCover = document.querySelector(".popup__cover");
const containerUploadImg = document.querySelector("#upload-img");
const inputImg = document.querySelector("#fileInput");

btnSetting.addEventListener("click", function () {
  containerPopuplogin.classList.remove("popup--hidden");
});

containerPopupCover.addEventListener("click", function () {
  containerPopuplogin.classList.add("popup--hidden");
});

// 选择图片
const selectImg = function () {
  let flagIndex = -1; // 通过这个判断图片是否已选中，若选中则索引等于该图片的索引
  const containerBgImg = document.querySelectorAll(".login__bg-img"); // 背景图片
  containerBgImg.forEach(function (element, i) {
    element.addEventListener("click", function () {
      if (flagIndex === i) {
        // flagIndex 等于 i：说明该图片已经被选中

        // 1. 将该图片的边框恢复默认值
        this.style.border = "2.5px solid white";

        // 2. 恢复上一个背景图
        containerBg.style.backgroundImage = `url(../assets/登录页-图片05.jpg)`;

        // 3. flagIndex 恢复-1
        flagIndex = -1;
      } else {
        // flagIndex 不等于 i：说明该图片未被选中

        // 1. 清楚所有图片的边框
        containerBgImg.forEach(function (el) {
          el.style.border = "2.5px solid white";
        });

        // 2. 为选中的图片设置边框
        this.style.border = "2.5px solid var(--color-blue)";

        // 3. 更改背景图片
        // 获取图片的src
        const img = this.querySelector("img");
        const src = img.getAttribute("src");
        containerBg.style.backgroundImage = `url(${src})`;

        // 4. 设置flagIndex
        flagIndex = i;
      }
      console.log(bgSrcArr);
    });
  });
};

// 选择图片时：将背景图片更改为所选择的图片
selectImg();

/**
 * 上传图片
 */
containerUploadImg.addEventListener("click", function () {
  inputImg.click();
});

// 获取图片
inputImg.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    // 示例：读取图片内容
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;

      // 添加所上传的图片
      const html = `
        <div class="login__bg-img">
            <img
              src=${imageUrl}
              alt="封面"
              class="login__select--img"
            />
          </div>
      `;
      containerUploadImg.insertAdjacentHTML("beforebegin", html);
      selectImg();
    };
    reader.readAsDataURL(file); // 将文件读取为 base64 编码的 URL
  } else {
    alert("请选择一个图片文件！");
  }
});
