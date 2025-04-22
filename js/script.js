import { loadFile } from "./common/loadFile.js";
import { particle } from "./lib/particle.js";
import { initAos } from "./lib/aos.js";
import { initSwiper } from "./lib/swiper.js";
import { typing } from "./pages/typing.js";

let windowWidth = 0;

// 윈도우 너비 구하는 함수
function updateWidth() {
  return window.innerWidth;
}

// window 너비에 따른 함수 분기점
function checkWidth() {
  windowWidth = updateWidth();

  if(windowWidth < 1200) {
    // 반응형
  } else {
    // 데스크탑탑
  }
}

// 윈도우 리사이즈시 너비에 따른 함수 분기점
window.addEventListener('resize', function() {
  windowWidth = updateWidth();
  checkWidth();
})

// DOM 로드 후 함수 실행
document.addEventListener('DOMContentLoaded', function(){
  loadFile(function(){
    particle();
    initAos();
    initSwiper();
    typing();
  })
})