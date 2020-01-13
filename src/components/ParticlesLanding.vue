<template>
  <div class="particleslanding">
      <div id="particles-js" style="z-index: 1;"></div>

      <div id="coming-soon">
          <span>Coming soon..</span>
          <span id="coming-soon-last-dot">.</span>
      </div>
  </div>
</template>

<script>

import "particles.js"
export default {
  name: "particleslanding",
  mounted(){
      this.initParticles()
  },
  
  methods: {
    initParticles() {
      window.particlesJS("particles-js", {
        "particles": {
            "number": {
            "value": 140,
            "density": {
                "enable": true,
                "value_area": 800
            }
            },
            "color": {
            "value": "#ffffff"
            },
            "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            },
            "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 0.6393606393606394,
                "opacity_min": 0.1,
                "sync": false
            }
            },
            "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4.795204795204795,
                "size_min": 0.1,
                "sync": false
            }
            },
            "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
            },
            "move": {
            "enable": true,
            "speed": 0.3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
            "onhover": {
                "enable": false,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
            },
            "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 183.8161838161838,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
            }
        },
        "retina_detect": true
        })
    }
  }
};
</script>


<style lang="scss">

// #particles-js canvas {
//     // display: block;
//     // -webkit-transform: scale(1);
//     // -ms-transform: scale(1);
//     // transform: scale(1);
//     // opacity: 1;
//     // -webkit-transition: opacity .8s ease, -webkit-transform 1.4s ease;
//     // transition: opacity .8s ease, transform 1.4s ease
// }
$bg-color: #153e4e;

.particleslanding{
    background-color: $bg-color;
}

#particles-js {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    // background-color: rgb(37, 37, 41);
    // background-color: #152d4e;
    background-color: $bg-color;
}

#coming-soon{
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
    font-size: 120px;
    background-color: transparent;
    padding-top: 20%;
    }

#coming-soon-last-dot{
    color: white;
    animation: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes blink {
    from{color: white;}
    to {color: transparent;}
}

@media (max-width:640px) {
    // #particles-js {
    //     width: 100%;
    //     height: 100%;
    //     position: fixed;
    //     background-color: transparent;
    // }

    #coming-soon{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        position: relative;
        font-size: 50px;
        background-color: transparent;
        padding-top: 45%;
    }
}
</style>