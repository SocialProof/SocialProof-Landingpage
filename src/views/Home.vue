<template>
     <div class="home">
          <div class="container">
               <nav class="">
                    <img src="@/assets/images/icon.png" alt="" class="logo" />
               </nav>

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
                                                                 >Join The Waitlist</b-button
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
                              <h2>Add from any <span>shopping cart</span></h2>
                              <div>
                                   <p>
                                        Get every favourite products of yours to trolli and check out whenever you want
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
                                   <h2>Get notified <span>when price drops</span></h2>
                                   <div>
                                        <p>
                                             Trolli will notify you if there is a price drop or discount on your items.
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
                              <h2>Websites currently live</h2>
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

          <div class="section5">
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
                                        >Join The Waitlist</b-button
                                   >
                              </p>
                         </b-field>
                    </form>
                    <div class="mt-4" data-aos="fade-in" data-aos-delay="500" data-aos-duration="800">
                         Its free 😄
                    </div>
               </div>
          </div>

          <footer>
               <div class="columns is-mobile">
                    <div class="column ">
                         <img src="@/assets/images/icon.png" alt="" class="logo" />

                         <div class="copyright is-hidden-touch">
                              Copyright @ yourtrolli.com 2021. All Rights Reserved.
                         </div>
                    </div>

                    <div class="links">
                         <h3>Company</h3>
                         <div class="link">Twitter</div>
                         <div class="link">Linkedin</div>
                         <div class="link">Facebook</div>
                    </div>
                    <div class="links">
                         <h3>Support</h3>
                         <div class="link">Contact</div>
                         <div class="link">Privacy</div>
                         <div class="link">Terms</div>
                    </div>
               </div>
               <div class="copyright is-hidden-desktop">Copyright @ yourtrolli.com 2021. <br />All Rights Reserved.</div>
          </footer>
     </div>
</template>

<script>
     // @ is an alias to /src
     import axios from "axios";

     export default {
          name: "Home",
          components: {},

          data() {
               return {
                    email: "",
                    isloading: false,
               };
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
     nav {
          padding: 50px 0;
          .logo {
               height: 40px;
          }
          @media only screen and (max-width: 1200px) {
               padding: 30px 40px;
               margin: 0;
          }

          position: relative;
          min-height: 50px;
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

          padding-bottom: 120px;
          padding-top: 120px;
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
               padding: 100px 30px 100px 30px;
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
          padding: 100px;
          padding-top: 110px;
          padding-bottom: 120px;
          text-align: center;

          @media only screen and (max-width: 600px) {
               padding: 120px 40px 100px 40px;

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
          background: #fbfcff;
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
     .section5 {
          .subscribeForm {
               margin: auto;
               width: 382px;
          }
     }
</style>
