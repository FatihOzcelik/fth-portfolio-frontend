<template>
  <div class="contact">
    <div class="contact-container">
      <div class="form-container">
        <div class="title-label" id="title">Send a message</div>
        <!-- <form method="POST" action="send"> -->
        <!-- <form method="POST" action="send" @submit="submit" > -->
        <!-- <form id="contact-form" @submit="submit"> -->
        <form name="contact-form" method="POST" data-netlify="true">
          <div id="name-container">
            <input class="text-box" type="text" id="name-input" placeholder="Name" name="name" required>
            <!-- <input class="text-box" type="text" id="name-input" v-model="contacter.name" placeholder="Name" required> -->
          </div>
          <div id="email-container">
            <input class="text-box" type="email" id="email-input" placeholder="Email" name="email" required>
            <!-- <input class="text-box" type="email" id="email-input" v-model="contacter.email" placeholder="Email" required> -->
          </div>
          <div id="subject-container">
            <input class="text-box" type="text" id="subject-input" placeholder="Subject" name="subject" required>
            <!-- <input class="text-box" type="text" id="subject-input" v-model="contacter.subject" placeholder="Subject" required> -->
          </div>
          <div id="message-container">
            <textarea class="text-box" id="message-textarea" placeholder="Message" name="message" required></textarea>
            <!-- <textarea class="text-box" id="message-textarea" v-model="contacter.message" placeholder="Message" required></textarea> -->
          </div>
          <div class="Button" id="send-button-container">
            <!-- <input type="submit" id="send-button-submit" value="Send"> -->
            <button type="submit" id="send-button-submit">Send</button>
          </div>
          <!-- <div id="warning-text">
            <span v-if="seen">This function is in progress. Please send your message directly to this mail: fatih @ ozcelik . dk :-)</span>
          </div> -->
        </form>
      </div>
    <!-- <span id="envelope-container" :class="reverseEnvelopeAnimation"> -->
      <!-- <span id="envelope-container" :class="[reverseEnvelopeAnimation?'reverseEnvelopeAnimationTrue':'']"> -->
      <span id="envelope-container">
      <svg id="svg-envelope" height="100%" viewBox="0 0 1715 1689" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
          <g transform="matrix(1,0,0,1,-382.933,-901.191)">
              <g id="base" transform="matrix(0.885663,0,0,1,121.31,324.647)">
                  <rect x="302.051" y="1266.63" width="1922.47" height="994.035" style="fill:url(#_Linear1);stroke:black;stroke-width:8.82px;"/>
              </g>
              <g id="innerside" transform="matrix(0.885663,0,0,1,121.31,324.647)">
                  <path d="M1239.95,755.084C1254.5,747.149 1272.08,747.149 1286.63,755.084C1433.57,835.229 2224.52,1266.63 2224.52,1266.63L1263.29,1790.9L302.051,1266.63C302.051,1266.63 1093,835.229 1239.95,755.084Z" style="fill:url(#_Linear2);stroke:black;stroke-width:8.82px;stroke-linejoin:miter;stroke-miterlimit:1;"/>
              </g>
              <g id="innerside-after" transform="matrix(0.885663,5.76867e-17,1.24618e-16,-1.0038,121.31,2868.06)">
                  <path d="M1238.5,755.873C1253.69,747.587 1272.88,747.587 1288.08,755.873C1438.68,838.015 2224.52,1266.63 2224.52,1266.63L302.051,1266.63C302.051,1266.63 1087.89,838.015 1238.5,755.873Z" style="fill:url(#_Linear3);stroke:black;stroke-width:8.8px;stroke-linejoin:miter;stroke-miterlimit:1;"/>
              </g>
              <g id="bottomflap" transform="matrix(0.885663,5.42038e-16,-4.3385e-16,1.10652,121.31,1183.76)">
                  <path d="M1236.74,756.832C1252.76,748.097 1273.82,748.097 1289.83,756.832C1444.69,841.292 2224.52,1266.63 2224.52,1266.63L302.051,1266.63C302.051,1266.63 1081.89,841.292 1236.74,756.832Z" style="fill:url(#_Linear4);stroke:black;stroke-width:8.32px;"/>
              </g>
              <g id="topflap-open" transform="matrix(0.885663,6.88508e-16,-7.04869e-16,1.0038,121.31,323.222)">
                  <path d="M1238.5,755.873C1253.69,747.587 1272.88,747.587 1288.08,755.873C1438.68,838.015 2224.52,1266.63 2224.52,1266.63L302.051,1266.63C302.051,1266.63 1087.89,838.015 1238.5,755.873Z" style="fill:url(#_Linear5);stroke:black;stroke-width:8.8px;stroke-linejoin:miter;stroke-miterlimit:1;"/>
              </g>
              <g id="topflap-closed" transform="matrix(0.885663,-4.72789e-16,-6.19857e-16,-1.30832,121.31,3248.43)">
                  <path d="M1233.71,758.485C1250.98,749.068 1275.6,749.068 1292.86,758.485C1454.58,846.686 2224.52,1266.63 2224.52,1266.63L302.051,1266.63C302.051,1266.63 1072,846.686 1233.71,758.485Z" style="fill:url(#_Linear6);stroke:black;stroke-width:7.46px;"/>
              </g>
              <g id="topflap-open-colored">
                  <path d="M1233.71,758.485C1250.98,749.068 1275.6,749.068 1292.86,758.485C1454.58,846.686 2224.52,1266.63 2224.52,1266.63L302.051,1266.63C302.051,1266.63 1072,846.686 1233.71,758.485Z" style="fill:url(#_Linear7);stroke:black;stroke-width:7.46px;" transform="matrix(0.885663,4.72789e-16,-6.19857e-16,1.30832,121.31,-65.8757)"/>
              </g>
          </g>
          <defs>
              <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1922.47,0,0,994.035,302.051,1763.65)"><stop offset="0" style="stop-color:rgb(59,183,90);stop-opacity:1"/><stop offset="0.51" style="stop-color:rgb(31,93,81);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(21,62,78);stop-opacity:1"/></linearGradient>
              <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1922.47,0,0,524.276,302.051,1004.49)"><stop offset="0" style="stop-color:rgb(226,226,226);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(25,65,80);stop-opacity:1"/></linearGradient>
              <linearGradient id="_Linear3" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1922.47,0,0,263.844,302.051,870.864)"><stop offset="0" style="stop-color:rgb(226,226,226);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(25,65,80);stop-opacity:1"/></linearGradient>
              <linearGradient id="_Linear4" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1922.47,0,0,524.276,302.051,1004.49)"><stop offset="0" style="stop-color:rgb(59,183,90);stop-opacity:1"/><stop offset="0.51" style="stop-color:rgb(31,93,81);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(21,62,78);stop-opacity:1"/></linearGradient>
              <linearGradient id="_Linear5" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1922.47,0,0,263.844,302.051,870.864)"><stop offset="0" style="stop-color:rgb(226,226,226);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(25,65,80);stop-opacity:1"/></linearGradient>
              <linearGradient id="_Linear6" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1922.47,0,0,524.276,302.051,1004.49)"><stop offset="0" style="stop-color:rgb(59,183,90);stop-opacity:1"/><stop offset="0.51" style="stop-color:rgb(31,93,81);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(21,62,78);stop-opacity:1"/></linearGradient>
              <linearGradient id="_Linear7" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1922.47,0,0,524.276,302.051,1004.49)"><stop offset="0" style="stop-color:rgb(59,183,90);stop-opacity:1"/><stop offset="0.51" style="stop-color:rgb(31,93,81);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(21,62,78);stop-opacity:1"/></linearGradient>
          </defs>
      </svg>
    </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  // data() {
  //   return {
  //     // reverseEnvelopeAnimation: false,
  //     contacter: {
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     }
  //   }
  // },
  // data() {
  //   return {
  //     seen: false
  //   }
  // },
  // methods: {
  //   submit(e){
  //     e.preventDefault();
      
  //     window.gsap.to("#contact-form", {
  //       duration: 0.1,
  //       yoyo: "true",
  //       x: "+=20",
  //     });
  //     window.gsap.to("#contact-form", {
  //       duration: 0.1,
  //       yoyo: "true",
  //       x: "-=20",
  //       delay: 0.1,
  //     });      
  //     window.gsap.to("#contact-form", {
  //       duration: 0.1,
  //       yoyo: "true",
  //       x: "+=20",
  //       delay: 0.2,
  //     });      
  //     window.gsap.to("#contact-form", {
  //       duration: 0.1,
  //       yoyo: "true",
  //       x: "-=20",
  //       delay: 0.3,
  //     });      
  //     window.gsap.to("#contact-form", {
  //       duration: 0.1,
  //       yoyo: "true",
  //       x: "+=20",
  //       delay: 0.4,
  //     });      
  //     window.gsap.to("#contact-form", {
  //       duration: 0.1,
  //       yoyo: "true",
  //       x: "-=20",
  //       delay: 0.5,
  //     });     
      
  //     this.seen = true;


  //   }
  // }

  //     // var request = new XMLHttpRequest();
  //     // var url = "/send";
  //     // request.open("POST", url, true);
  //     // request.setRequestHeader("Contect-Type", "application/json");
  //     // request.onreadystatechange = function () {
  //     //   if (request.readyState === 4 && request.status === 200) {
  //     //     var jsonData = JSON.parse(request.response);
  //     //     console.log(jsonData);
  //     //     alert(JSON.stringify(jsonData));
  //     //   }
  //     // };

  //     // var formData = new FormData();
  //     // formData.append("name", this.contacter.name);
  //     // formData.append("email", this.contacter.email);
  //     // var request = new XMLHttpRequest();
  //     // request.open("POST", "/send");
  //     // request.send(formData);
  //     // request.onreadystatechange = function () {
  //     //   if (request.readyState === 4){
  //     //     if (request.status === 200 && request.statusText === "OK") {
  //     //       console.log("SUCCESS");
  //     //     } else {
  //     //       console.log("FAIL");
  //     //     }
  //     //   } else {
  //     //     console.log("request.readyState !=== 4)");
  //     //   }
  //     // }


  //     // alert(JSON.stringify(this.contacter));
  //     // console.log(this.contacter.name);
  //     // console.log(this.contacter.email);
  //     // console.log(this.contacter.subject);
  //     // console.log(this.contacter.message);
      
  //     // var name = this.contacter.name;
  //     // var email = this.contacter.email;
  //     // var subject = this.contacter.subject;
  //     // var message = this.contacter.message;

  //     // var data = JSON.stringify({ "name": name, "email": email, "subject": subject, "message": message});

  //     // request.send(data);

  //     // console.log(name);
  //     // console.log(email);
  //     // console.log(subject);
  //     // console.log(message);

  //     //reverse envelope animation
  //     // this.reverseEnvelopeAnimation = !this.reverseEnvelopeAnimation;
  //   }
  // }
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

.contact-container {
  min-height: calc(100vh - 93px);  
  background-color: $bg-color;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-container {
    margin-right: 10vw;
    transform: translateX(-200%);
    animation: slide-in-form 2s forwards;
}

@keyframes slide-in-form {
  100%{
    transform: translateX(0%);
  }  
}

.text-box{
  font-size: 15px;
  box-sizing: border-box;
  width: 640px;
  padding: 15px;
  background-color: #1b4e63;  
  color: white;
  border-radius: 3px;
  border-collapse: white;
  border: 1px solid transparent;
  margin-bottom: 20px;
}

#title{
  order: 1;
  font-size: 44px;
  color: $primary-color;
  margin-bottom: 15px;
}

#name-container{ 
  order: 2;  
}

#email-container{
  order: 3;
}

#subject-container{
  order: 4;
}

#message-container{
  order: 5;
}

#message-textarea{
  margin-bottom: 15px;
  height: 30vh;
  resize: none;
}

textarea::-webkit-scrollbar {
    width: 1em;
}

textarea::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

textarea::-webkit-scrollbar-thumb {
  background-color: $bg-color;
}

::placeholder {
  color: rgb(197, 197, 197);
  opacity: 1;
}

input:-webkit-autofill {
    animation-name: autofill;
    animation-fill-mode: both;
    -webkit-text-fill-color: $text-color !important;
}

@keyframes autofill {
    to {
        color: $text-color;
        background: #1b4e63;
    }
}

input[type=text]:focus, input[type=email]:focus, textarea:focus{
  border: 1px solid $primary-color !important;
  outline: none;
}

input:focus::placeholder, textarea:focus::placeholder {
  color: transparent;
}

#send-button-container {
  order: 5;
}

#send-button-submit {
  font-size: 18px;
  font-weight: 500;
  padding: 0.9%;
  color: $primary-color;
  background-color: transparent;
  border: 2px solid;
  border-color: $primary-color;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.4s ease 0s, color 0s, border-color 0s;
}

#send-button-submit:hover{
  background-color: $primary-color;
  color: $bg-color;
  border-color: $primary-color;
}

#svg-envelope{
  height: 400px;
}

#envelope-container{
  animation: slide-in-envelope 2s linear forwards;
}

@keyframes slide-in-envelope {
  0%{
    transform: translateY(-200%) rotateY(0deg);
  }
  50%{
    transform: translateY(-100%) rotateY(360deg);
  }
  100%{
      transform: translateY(0%) rotateY(0deg);
  }
}

#topflap-open-colored{
  transform: rotateX(180deg);
  transform-origin: center 94.3%;
  animation: fold 2s 2s forwards;
}

@keyframes fold {
  100%{
    transform: rotateX(0deg);
  }
}

// //Reverse envelope animation
// .reverseEnvelopeAnimationTrue {
//   animation: slide-out-envelope 2s linear forwards;

// }

@keyframes slide-out-envelope {
  0%{
    transform: translateY(-200%) rotateY(0deg);
  }
  50%{
    transform: translateY(-100%) rotateY(360deg);
  }
  100%{
      transform: translateY(0%) rotateY(0deg);
  }
}

#topflap-open-colored{
  transform: rotateX(180deg);
  transform-origin: center 94.3%;
  animation: fold 2s 2s forwards;
}

@keyframes fold {
  100%{
    transform: rotateX(0deg);
  }
}

// #innerside-after{
//   visibility: hidden;
// }

#innerside{
  visibility: hidden;
}

#topflap-open{
  visibility: hidden;
}

#topflap-closed{
  visibility: hidden;
}

#warning-text{
  font-size: 20px;
  margin-top: 15px;
  width: 500px;
  color: $primary-color;
}

@media (max-width: 1270px){
  .form-container {
    margin-right: 2vw;
  }
}

@media (max-width: 1100px){
  .form-container {
    margin-right: 4vw;
  }

  .text-box{
    width: 370px;
  }
  #warning-text{
    width: 370px;
  }
}

@media (max-width:840px) {
  .contact-container {
      display: flex;
      flex-direction: column;
      padding-left: 2vh;    
  }
}

</style>