export function particle() {
  particlesJS("main_visual_particle", {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#005B96"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": true,  
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,  
          "sync": false
        }
      },
      "size": {
        "value": 30,
        "random": false,
        "anim": {
          "enable": false
        }
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      },
      "line_linked": {
        "enable": false
      },
    },
    "interactivity": {
      "events": {
        "onhover": { "enable": false },
        "onclick": { "enable": false }
      }
    },
    "retina_detect": true
  });
}
