<template>
     <div class="home">
          <div class="container">
       

               <div class="herocontent ">
                    <div class="veralign">
                         <div class="columns m-0 p-0">
                              <div class="column">
                                   <div>
                                        <h1 data-aos="fade-in" data-aos-delay="100 " data-aos-duration="800">
                                             Your only <span class="bold">Shopping Cart </span><span class="break"> on the Internet</span>
                                        </h1>
                                        <p class="herosub mt-4" data-aos="fade-in" data-aos-delay="500" data-aos-duration="800">
                                             A free browser extension that helps you add any products from any site to your cart and get notified when
                                             prices go down
                                        </p>
                                        <div
                                             class="mt-6"
                                             data-aos="fade-in"
                                             data-aos-delay="800"
                                             data-aos-duration="800"
                                             data-aos-offset="-500"
                                             style="text-align:left"
                                        >
                                             <!-- <button class="button addtochrome " @click="waitinglist">
                                                  <img class="browser-icon chrome" src="@/assets/images/chrome.svg" alt="Chrome logo" />
                                                  <span class="btn-text browser-name active">Add to Chrome</span>
                                             </button> -->

                                             <form class="subscribeForm" @submit.prevent="waitinglist">
                                                  <b-field label="">
                                                       <b-input type="email" placeholder="Email" required size="is-medium" v-model="email"></b-input>

                                                       <p class="control">
                                                            <b-button
                                                                 class="button is-primary"
                                                                 size="is-medium"
                                                                 native-type="submit"
                                                                 :loading="isloading"
                                                                 >Join Waitlist</b-button
                                                            >
                                                       </p>
                                                  </b-field>
                                             </form>
                                        </div>
                                   </div>
                              </div>

                              <div class="column">
                                   <img src="@/assets/images/OnlineShopping.png" class="onlineshopping" alt="" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div class="section2">
               <div class="columns is-vcentered  m-0 p-0">
                    <div class="column">
                         <img src="@/assets/images/screenshot.png" alt="" data-aos="fade-right" data-aos-duration="400" />
                    </div>

                    <div class="column">
                         <div class="">
                              <div style="font-size: 40px;">🛍️</div>
                              <h2>Create your <span class="break">own shopping basket</span></h2>
                              <div>
                                   <p>
                                        Save all your shopping items in one place
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

          <div class="section3 ">
               <div class="container">
                    <div class="columns is-vcentered ">
                         <div class="column">
                              <div class="">
                                   <div style="font-size: 40px;">🤑</div>
                                   <h2>Get notified <span>when price drops</span></h2>
                                   <div>
                                        <p>
                                             We’ll notify you when we detect a price drop on any of your Trolli items
                                        </p>
                                   </div>
                              </div>
                         </div>

                         <div class="column">
                              <img src="@/assets/images/notification1.png" alt="" class="img1" data-aos="fade-left" data-aos-duration="600" />
                              <img
                                   src="@/assets/images/notification2.png"
                                   alt=""
                                   class="img2"
                                   data-aos="fade-left"
                                   data-aos-delay="300"
                                   data-aos-duration="600"
                              />
                         </div>
                    </div>
               </div>
          </div>

          <div class="section4">
               <div class="columns is-vcentered">
                    <div class="column is-hidden-touch">
                         <img src="@/assets/images/TeamWork.png" alt="" class="teamwork" />
                    </div>

                    <div class="column">
                         <div class="">
                              <h2>Websites currently live 🚀</h2>
                              <div>
                                   <p class="mt-10">
                                        We add 100+ websites every month. Dont miss out on the best price
                                   </p>

                                   <div class="liveitems">
                                        <div class="columns is-vcentered is-multiline is-mobile  ">
                                             <div class="column is-4">
                                                  <img
                                                       src="@/assets/images/live/ikea.png"
                                                       alt=""
                                                       class="ikea live"
                                                       data-aos="fade-in"
                                                       data-aos-delay="200"
                                                       data-aos-duration="600"
                                                  />
                                             </div>
                                             <div class="column is-4">
                                                  <img
                                                       src="@/assets/images/live/asos.png"
                                                       alt=""
                                                       class="asos  live"
                                                       data-aos="fade-in"
                                                       data-aos-delay="350"
                                                       data-aos-duration="600"
                                                  />
                                             </div>
                                             <div class="column is-4">
                                                  <img
                                                       src="@/assets/images/live/netaporter.png"
                                                       alt=""
                                                       class="netaporter  live"
                                                       data-aos="fade-in"
                                                       data-aos-delay="500"
                                                       data-aos-duration="600"
                                                  />
                                             </div>
                                             <div class="column is-4">
                                                  <img
                                                       src="@/assets/images/live/amazon.png"
                                                       alt=""
                                                       class="amazon  live"
                                                       data-aos="fade-in"
                                                       data-aos-delay="650"
                                                       data-aos-duration="600"
                                                  />
                                             </div>

                                             <div class="column is-4">
                                                  <img
                                                       src="@/assets/images/live/currys.png"
                                                       alt=""
                                                       class="currys  live"
                                                       data-aos="fade-in"
                                                       data-aos-delay="800"
                                                       data-aos-duration="600"
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="column is-hidden-desktop ">
                         <img src="@/assets/images/TeamWork.png" alt="" class="teamwork" />
                    </div>
               </div>
          </div>

          <div class="section5 ">
               <div class="container">
                    <div class="columns is-vcentered ">
                         <div class="column">
                              <div>
                                   <h2>How it works</h2>
                                   <div class="howitworks">
                                        <div
                                             data-aos="fade-in"
                                             data-aos-delay="100"
                                             data-aos-duration="800"
                                             class="howitworksitem aos-init aos-animate"
                                        >
                                             <div class="columns is-mobile">
                                                  <div class="count">1</div>
                                                  <div class="column">
                                                       <h4>Add to desktop</h4>
                                                       <p>It takes a few clicks to add to your computer and its 100% free</p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div data-aos="fade-in" data-aos-delay="200" data-aos-duration="800" class="howitworksitem aos-init">
                                             <div class="columns  is-mobile">
                                                  <div class="count">2</div>
                                                  <div class="column">
                                                       <h4>Add items</h4>
                                                       <p>
                                                            Add items from any online shop into a centralised basket. Say goodbye to 100’s of open
                                                            tabs
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div data-aos="fade-in" data-aos-delay="300" data-aos-duration="800" class="howitworksitem aos-init">
                                             <div class="columns  is-mobile">
                                                  <div class="count">3</div>
                                                  <div class="column">
                                                       <h4>We'll do the work</h4>
                                                       <p>
                                                            We'll automatically tell you if there are price drops on items in your basket
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="column">
                              <img src="@/assets/images/howitworks.png" alt="" class="img1" />
                         </div>
                    </div>
               </div>
          </div>
          <div class="section6">
               <div class="container">
                    <h2>1000+ Happy shoppers</h2>
                    <p class="herosub mt-10">
                         Install extension and you’ll get notified on the best price
                    </p>
                    <img src="@/assets/images/happyshoppers.png" alt="" class="happyshoppers" />

                    <!-- <div class="text-center mt-5">
                         <button class="button addtochrome ">
                              <img class="browser-icon chrome" src="@/assets/images/chrome.svg" alt="Chrome logo" />
                              <span class="btn-text browser-name active">Add to Chrome</span>
                         </button>
                    </div> -->

                    <form class="subscribeForm mt-6" @submit.prevent="waitinglist">
                         <b-field label="">
                              <b-input type="email" placeholder="Email" required size="is-medium" v-model="email"></b-input>

                              <p class="control">
                                   <b-button class="button is-primary" size="is-medium" native-type="submit" :loading="isloading"
                                        >Join Waitlist</b-button
                                   >
                              </p>
                         </b-field>
                    </form>
                    <div class="mt-4" data-aos="fade-in" data-aos-delay="500" data-aos-duration="800">
                         Its free 😄
                    </div>
               </div>
          </div>

    
     </div>
</template>

<script>
     // @ is an alias to /src
     import axios from "axios";
     import mixpanel from "../mixpanel.js";

     export default {
          name: "Home",
          components: {},

          data() {
               return {
                    email: "",
                    isloading: false,
               };
          },

          mounted() {
               mixpanel.custom("Landing page visit");
          },

          methods: {
               async waitinglist() {
                    this.isloading = true;

                    var submitted_email = this.email;
                    var your_api_key = "7EQRV4";

                    try {
                         let resp = await axios.post("https://getwaitlist.com/api/v1/waitlists/submit", {
                              email: submitted_email,
                              api_key: your_api_key,
                              referral_link: document.URL,
                         });

                         console.log(resp);

                         this.$buefy.toast.open({
                              duration: 5000,
                              message: "Thanks for joining! Check your inbox.",
                              position: "is-bottom",
                              type: "is-success",
                         });
                    } catch (error) {
                         this.$buefy.toast.open({
                              duration: 5000,
                              message: "Could not add you to Waitlist",
                              position: "is-bottom",
                              type: "is-danger",
                         });
                         console.log(error.response.data);
                         console.log(error.response.status);
                         console.log(error.response.headers);
                    }

                    this.isloading = false;

                    // console.log(resp);
               },
          },
     };
</script>

<style lang="scss" scoped>
     .home {
          max-width: 100vw;
          overflow-x: hidden;
     }
     .columns,
     .column {
          margin: 0 !important;
          padding: 0 !important;
     }
   
     .herocontent {
          text-align: left;
          position: relative;
          padding: 50px 0 130px 0px;

          @media only screen and (max-width: 800px) {
               padding-left: 30px;
               padding-right: 30px;
          }
          @media only screen and (max-width: 600px) {
               text-align: center;
          }

          .onlineshopping {
               max-width: 400px;
               display: block;
               margin: auto;

               @media only screen and (max-width: 600px) {
                    max-width: 300px;
                    margin-top: 40px;
               }
          }

          p {
               @media only screen and (max-width: 600px) {
                    margin: auto;
                    display: block;
               }
          }
     }

     .veralign {
          // position: absolute;
          // top: 44%;
          // transform: translate(0, -50%);
          // -webkit-transform: translate(0, -50%);
          // text-align: center;
          // width: 100%;
          // left: 0;
          // right: 0;
          // margin: 0 auto;
          // padding-left: 40px;
          // padding-right: 40px;
     }

     .addtochrome {
          background: #ff6c49;
          // box-shadow: 0 0 0 rgb(82 95 127 / 3%), 0 2px 5px rgb(49 49 93 / 10%), 0 1px 2px rgb(0 0 0 / 0%);
          height: 50px;
          border: none;
          border-radius: 30px;
          color: white;
          width: 250px;
          font-weight: 500;

          position: relative;
          img {
               position: absolute;
               left: 15px;
          }

          @media only screen and (max-width: 600px) {
               margin: auto;
               display: block;
          }
     }
     .addtochrome:hover {
          color: white;
     }

     h1 {
          font-size: 50px;
          font-family: Lato, sans-serif;
          font-style: normal;
          font-weight: 400;

          color: #232d42;

          @media only screen and (max-width: 600px) {
               font-size: 37px;

               .break {
                    display: inline-block;
               }

               .bold {
                    // display: block;
               }
          }
     }

     h2 {
          font-size: 35px !important;
          font-family: Lato, sans-serif;
          font-style: normal;
          font-weight: 700;
          text-align: left;
          color: #232d42;
     }
     p {
          text-align: left;
          font-size: 18px;
          font-style: normal;
          font-weight: 300;
          line-height: 33px;
          font-size: 19px;
          color: #647178;
          letter-spacing: 0.5px;
          @media only screen and (max-width: 600px) {
               text-align: center;
               max-width: 300px !important;

               font-size: 17px;
          }
     }

     .section2 {
          background: #fbfcff;

          img {
               position: relative;
               left: -100px;
          }
          padding-bottom: 100px;
          padding-top: 100px;

          @media only screen and (max-width: 800px) {
               padding: 100px 30px 100px 30px;
               text-align: center;
          }
          h2 {
               span {
                    display: block;
               }
               @media only screen and (max-width: 800px) {
                    text-align: center;
                    max-width: 100%;
                    max-width: 100%;
                    font-size: 27px !important;
                    margin-top: 30px;
                    span {
                         display: inline;
                    }
               }
          }
          p {
               margin-top: 20px;
               max-width: 400px;

               @media only screen and (max-width: 800px) {
                    text-align: center;
                    max-width: 330px;
                    display: inline-block;

                    font-size: 17px;
               }
          }
     }

     .section3 {
          @media only screen and (max-width: 800px) {
               padding: 0px 30px 100px 30px;
               text-align: center;
          }
          h2 {
               span {
                    display: block;
               }
               @media only screen and (max-width: 800px) {
                    text-align: center;
                    max-width: 100%;
                    max-width: 100%;
                    font-size: 27px !important;
                    margin-top: 30px;
                    span {
                         display: inline;
                    }
               }
          }
          p {
               margin-top: 20px;
               max-width: 400px;

               @media only screen and (max-width: 800px) {
                    text-align: center;
                    max-width: 330px;
                    display: inline-block;
                    margin-bottom: 20px;
                    font-size: 17px;
               }
          }
          margin-top: 20px;

          @media only screen and (max-width: 800px) {
               padding: 50px 40px 120px 40px;
               text-align: center;
               p {
                    max-width: 330px !important;

                    display: inline-block;
               }
          }

          padding: 100px;
          padding-top: 110px;
          padding-bottom: 170px;
          img {
               height: 120px;
               width: auto;

               @media only screen and (max-width: 800px) {
                    height: 100px;
               }

               display: block;
          }
          .img1 {
               position: relative;
               top: 10px;
               left: -30px;

               @media only screen and (max-width: 800px) {
                    left: -10px;
               }
          }
          .img2 {
               position: relative;
               top: 20px;
               right: -30px;

               @media only screen and (max-width: 800px) {
                    right: -20px;
               }
          }
     }

     .section4 {
          // padding: 100px;
          // padding-top: 200px;
          // padding-bottom: 150px;

          // text-align: center;
          // @media only screen and (max-width: 600px) {
          //      padding: 40px;
          //      padding-top: 80px;
          //      p {
          //           max-width: 300px !important;
          //      }
          // }

          // h2 {
          //      text-align: center;
          //      font-size: 40px !important;
          //      @media only screen and (max-width: 600px) {
          //           font-size: 30px !important;
          //      }
          // }
          // p {
          //      text-align: center;
          //      max-width: 100%;
          //      margin-top: 20px;
          // }

          padding-bottom: 100px;
          padding-top: 100px;
          background: #fbfcff;

          .liveitems {
               max-width: 400px !important;

               @media only screen and (max-width: 800px) {
                    max-width: 400px !important;
                    margin: auto;
                    margin-bottom: 20px;

                    .columns {
                         justify-content: center;
                    }
               }

               .live {
                    padding: 10px;
                    display: block;
                    width: 100%;
                    height: auto;
               }
          }
          .asos {
               position: relative;
               left: -5px;
          }
          .ikea {
               position: relative;
               top: 2px;
               left: -5px;
               width: 90%;
          }
          .amazon {
               position: relative;
               top: 5px;
               left: -5px;
               width: 90%;
          }
          .ikea {
               width: 80%;
          }

          @media only screen and (max-width: 1200px) {
               padding: 80px 30px 100px 30px;
               text-align: center;
          }

          img.teamwork {
               position: relative;
               max-width: 350px;
               width: 90%;
               display: block;
               margin: auto;
               @media only screen and (max-width: 600px) {
                    max-width: 250px;
               }
          }

          h2 {
               span {
                    display: block;
               }
               @media only screen and (max-width: 800px) {
                    text-align: center;
                    max-width: 100%;
                    max-width: 100%;
                    font-size: 27px !important;
                    margin-top: 30px;
                    span {
                         display: inline;
                    }
               }
          }
          p {
               margin-top: 20px;
               max-width: 400px;
               padding-bottom: 20px;

               @media only screen and (max-width: 800px) {
                    text-align: center;
                    max-width: 330px;
                    display: inline-block;

                    font-size: 17px;
               }
          }
     }
     .section5 {
          @media only screen and (max-width: 800px) {
               padding: 0px 30px 100px 30px;
               text-align: center;
          }
          h2 {
               text-align: left;
               span {
                    display: block;
               }
               @media only screen and (max-width: 800px) {
                    text-align: center;
                    max-width: 100%;
                    max-width: 100%;
                    font-size: 27px !important;
                    margin-top: 30px;
                    span {
                         display: inline;
                    }
               }
          }
          p {
               max-width: 400px;
               margin-bottom: 20px;
               @media only screen and (max-width: 800px) {
                    text-align: center;
                    max-width: 330px;
                    display: inline-block;
                    margin-bottom: 20px;
                    font-size: 17px;
               }
          }
          margin-top: 20px;

          .count {
               color: #fff;
               font-size: 23px;
               text-align: center;
               width: 40px;
               height: 40px;
               padding: 3px;
               font-weight: 500;
               border-radius: 100%;
               background: #ff6c49;
               margin-right: 20px;
          }

          .howitworks {
               padding-top: 30px;
               text-align: left;
          }

          h4 {
               font-weight: 500;
               margin-bottom: 3px;
               color: #000;
               font-size: 24px;
          }

          @media only screen and (max-width: 800px) {
               h4 {
                    font-size: 19px;
               }
               padding: 50px 40px 100px 40px;

               p {
                    margin-top: 0;
                    max-width: 330px !important;
                    text-align: left;
                    display: inline-block;
               }
          }

          padding: 100px;
          padding-top: 110px;
          padding-bottom: 170px;
          img {
               @media only screen and (max-width: 800px) {
                    width: 100%;
                    margin: auto;
                    margin-top: 50px;
               }

               display: block;
               width: 450px;
               max-width: 70%;
          }
          .img1 {
               position: relative;
               top: 10px;
               left: -30px;

               @media only screen and (max-width: 800px) {
                    left: -10px;
               }
          }
     }
     .section6 {
          background: #fbfcff;
          padding: 100px;
          padding-top: 110px;
          padding-bottom: 120px;
          text-align: center;

          @media only screen and (max-width: 600px) {
               padding: 100px 40px 100px 40px;

               p {
                    max-width: 300px !important;
               }
          }

          h2 {
               text-align: center;
               font-size: 40px !important;
               font-weight: 7600;

               @media only screen and (max-width: 800px) {
                    font-size: 30px !important;
               }
          }
          p {
               text-align: center;
               max-width: 100%;
               margin-top: 20px;
          }
          img {
               display: block;
          }
          .happyshoppers {
               display: block;
               max-width: 300px;
               height: auto;
               margin: 40px auto 0px auto;
               @media only screen and (max-width: 800px) {
                    max-width: 300px;
               }
          }
     }

     footer {
          @media only screen and (max-width: 600px) {
               padding: 50px 20px;
               .links {
                    width: 120px !important;
                    padding-left: 30px;
               }
          }
          .columns {
               margin: 0;
               padding: 0 10px;
          }
          background: white;
          padding: 100px;

          .logo {
               height: 40px;
               @media only screen and (max-width: 600px) {
                    width: 100%;
                    min-width: 90px;
                    height: auto;
                    position: relative;
                    top: 0;
                    max-width: 150px;
               }
          }

          .links {
               padding-left: 20px;
               margin-left: 120px;
               margin-right: 30px;

               @media only screen and (max-width: 900px) {
                    margin-left: 10px;
                    margin-right: 0;
                    padding: 0;
                    font-size: 14px !important;
               }
          }
          .copyright {
               display: block;

               margin-top: 100px !important;
               margin-bottom: 0 !important;

               @media only screen and (max-width: 600px) {
                    text-align: center;
                    font-size: 14px;
                    margin-top: 70px !important;
                    width: 100%;
               }
          }

          h3 {
               font-weight: 700;
               margin-bottom: 14px;
          }
     }
     .bold {
          font-weight: 700;

          color: #ff6c49;
     }

     .herosub {
          max-width: 600px;
          @media only screen and (max-width: 600px) {
               margin: auto;
          }
     }
</style>
<style lang="scss">
     .subscribeForm {
          @media only screen and (max-width: 600px) {
               margin: auto;
               width: 352px;
               text-align: center;
          }
          font-family: "Nunito";
          input {
               font-size: 17px !important;
               font-family: "Nunito";
               width: 220px;
               height: 50px;
               padding-right: 20px !important;

               @media only screen and (max-width: 600px) {
                    width: 190px;
               }
          }
          button {
               font-weight: 500;
               font-family: "Nunito";
               font-size: 17px !important;

               height: 50px;
          }
          .control {
               margin: 0 !important;
          }
     }
     .section6 {
          .subscribeForm {
               margin: auto;
               width: 382px;
          }
     }

</style>
