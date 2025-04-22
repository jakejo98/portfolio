export function initAos() {
  AOS.init({
    duration: 500,   // 애니메이션 지속시간(ms)
    delay: 1000,       // 지연시간(ms)
    once: false,        // 스크롤 한 번만 애니메이션 실행 (true/false)
    offset: 0
  });
}