export function typing() {
  const texts = ["Creative", "Interactive", "Thinking UI/UX", "Web publisher"];
  const typingEl = document.querySelector('.main_visual_title');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingEl.innerHTML = currentText.substring(0, charIndex) + '<span class="main_visual_title_blink"></span>';
      if (charIndex < currentText.length) {
        charIndex++;
        setTimeout(type, 200);
      } else {
        isDeleting = true;
        setTimeout(type, 3000);  // 다 쓰고 1초 대기
      }
    } else {
      typingEl.innerHTML = '';  // 지우기 + 커서 유지
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      charIndex = 0;
      setTimeout(type, 0);  // 다음 텍스트 시작 전 잠깐 대기
    }
  }

  type();
}
