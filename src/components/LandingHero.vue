<template>
  <div class="landing">
    <span id="f-logo-hero">
      <svg
        id="f-logo-hero-id"
        height="100%"
        viewBox="0 0 106.40225 125.67043">
        <g
          transform="translate(-60.722137,-82.618077)">
          <path
            d="m 60.854754,208.1225 c 0.30292,-123.285338 0.2226,-125.372131 0.2226,-125.372131 l
              105.867876,3e-6 -13.47962,43.770838 -58.310622,0.7573 4.998052,24.23298 33.62328,0.60582 
              -7.87572,26.05047 -26.050466,0.60582 -6.96698,29.3825 z"
            style="background-color:transparent;fill-opacity:0.93564357;stroke:#000000;stroke-width:1px;
            stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
        </g>
      </svg>
    </span>

    <div class="text-and-button-container">
      <div id="id_text_fatihozcelik" class="text_fatihozcelik">
        <!-- FATİH ÖZÇELİK -->
        <span>
          <img 
            id="f-logo-before-text"
            src="../assets/f-logo-v2-plain-svg.svg"
            alt="F"
            margin="0"
            border="0"
            padding="0"
          />
        </span>
        <span id="text_fatih">atih Özçelik</span>
      </div>
      <div id="profession" class="elements_under_fth">
        Software Engineer
      </div>
      <div id="description" class="elements_under_fth">
        Currenly focussed on full stack web development. I have touched every stage of software
        engineering phases and several platforms including mobile and desktop.
      </div>
      <router-link to="/contact">
        <button  id="btn" class="elements_under_fth">Get in touch</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "landing",
  mounted(){
    window.gsap.from(".elements_under_fth", {
      duration: 1.5,
      ease: "back",
      y: "-1000",
    });

    window.gsap.from(".text_fatihozcelik", {
      duration: 2,
      ease: "power3",
      x: "-3000",
      delay: 0.8,
    });    
  },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

$bg-color: #153e4e;
$primary-color: rgba(53, 199, 89, 0.911);
$text-color: rgba(255, 255, 255, 0.842);

.landing {
  background-color: $bg-color;
}

 .text_fatihozcelik {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 80px;
  color: $primary-color;
  background-color: transparent;
}

#text_fatih{
  margin: -13px;
  background-color: transparent;
}

#profession {
  color: $text-color;
  font-size: 40px;
  padding-bottom: 0.2%;
  background-color: transparent;
}

#description {
  color: $text-color;
  font-size: 21px;
  padding-bottom: 3%;
  background-color: transparent;
}

#btn {
  padding: 1%;
  color: $primary-color;
  background-color: transparent;
  border: 2px solid;
  font-size: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.4s ease 0s, color 0s, border-color 0s;
}

#btn:hover{
  background-color: $primary-color;
  color: $bg-color;
  border-color: $primary-color;
}

#f-logo-before-text{
  height: 77px;
}

#f-logo-hero{
  background-color: transparent;
  height: 550px;
  stroke-dasharray: 510;
  stroke-dashoffset: 510;
  fill: transparent;
  animation: draw 4s linear forwards;
  animation-delay: 2s;
}

#f-logo-hero-id{
  animation: fillLogo 4.5s linear forwards;
  animation-delay: 6s;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes fillLogo{
  to {
    fill: #3BB75A;
  }
}

@media (min-width: 1101px){
  .landing{
    min-height: calc(100vh - 93px);  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #description{
    width: 580px;
  }
  .text-and-button-container{
    margin-left: 40px;
    margin-top: 100px;
  }
}

@media (max-width:1100px) and (min-width: 640px) {
  #f-logo-hero{
    height: 380px;
    order: 2;
    padding-top: 9%;
    align-self: center;
  }

  .landing{
    position: fixed;
    height: calc(100vh - 93px);  
    display: flex;
    flex-direction: column;
  }

  .text-and-button-container{
    padding-top: 2vh;
    padding-right: 3vh;
    padding-left: 3vh;
    order: 1;
  }
}

@media (max-width:640px) {
  .landing {
    position: fixed;
    height: calc(100vh - 93px);  
    display: flex;
    flex-direction: column;
    // padding-bottom: 47px;
  }
  
  .text_fatihozcelik{
    font-size: 60px;
  }

  #profession {
    font-size: 28px;
  }

  #description {
    font-size: 18px;
  }
  
  #btn {
    font-size: 17px;
  }

  #text_fatih{
    margin: -13px;
    background-color: transparent;
  }

  #f-logo-hero{
    height: 230px;
    order: 2;
    padding-top: 9%;
    align-self: center;
  }

  #f-logo-before-text{
    height: 60px;
  }

  .text-and-button-container{
    padding-top: 2vh;
    padding-right: 2vh;
    padding-left: 2vh;
    order: 1;
  }
}

</style>