export function particle() {
  particlesJS("main_visual_particle", {
    "particles": {
        "number": {
            "value": 30,  
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#1A1A1A"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 40,
            "random": false,
            "anim": {
                "enable": false
            }
        },
        "move": {
            "enable": true,
            "speed": 3, 
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        },
        "line_linked": {
            "enable": false
        },
        "shadow": {
            "enable": true,
            "color": "#1A1A1A",
            "blur": 10 // 블러 효과 (값이 클수록 더 흐릿하게)
        }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": false },
            "onclick": { "enable": false }
        }
    },
    "retina_detect": true
  });
  
  // particles.js가 완전히 로드된 후 실행되도록 감지
  function waitForParticles() {
    if (window.pJSDom && window.pJSDom.length > 0) {
        let particles = window.pJSDom[0].pJS.particles.array;
        particles.forEach(particle => {
            particle.radius = Math.random() * (40 - 30) + 30; // 크기: 30 ~ 40px
            particle.opacity = Math.random() * (0.5 - 0.1) + 0.1; // 투명도: 0.5 ~ 0.8
        });
    } else {
        requestAnimationFrame(waitForParticles); // particles.js가 로드될 때까지 반복 실행
    }
  }
  
  // 즉시 실행
  waitForParticles();
}