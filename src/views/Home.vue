<template>
     <div class="home">
          <nav>
               <img src="@/assets/icon.png" alt="" class="logo" />
          </nav>

          <div class="herocontent">
               <div class="veralign">
                    <h1 data-aos="fade-in" data-aos-delay="100 " data-aos-duration="800">
                         Your only <span class="break"> <span class="bold">Shopping Cart </span>on the Internet</span>
                    </h1>
                    <p class="herosub mt-4" data-aos="fade-in" data-aos-delay="500" data-aos-duration="800">
                         A free browser extension that helps you add any products from any site to your cart and get notified when prices go down
                    </p>
                    <div class="text-center mt-6" data-aos="fade-in" data-aos-delay="800" data-aos-duration="800" data-aos-offset="-500">
                         <button class="button addtochrome ">
                              <img class="browser-icon chrome" src="@/assets/chrome.svg" alt="Chrome logo" />
                              <span class="btn-text browser-name active">Add to Chrome</span>
                         </button>
                    </div>
               </div>
          </div>

          <div class="section2">
               <div class="columns is-vcentered">
                    <div class="column">
                         <img src="@/assets/image.png" alt="" data-aos="fade-right" data-aos-duration="400" />
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
                    <div class="columns is-vcentered">
                         <div class="column">
                              <div class="">
                                   <h2>Get notified <span>when price drops</span></h2>
                                   <div>
                                        <p>
                                             Get every favourite products of yours to trolli and check out whenever you want
                                        </p>
                                   </div>
                              </div>
                         </div>

                         <div class="column">
                              <img src="@/assets/product1.png" alt="" class="img1" data-aos="fade-left" data-aos-duration="600" />
                              <img
                                   src="@/assets/product2.png"
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
               <div class="container">
                    <h2>Websites currently Live</h2>
                    <p class="herosub mt-10">
                         We add 100+ websites every month. Dont miss out on the best price
                    </p>
                    <div class="mt-6">
                         <div class="columns is-vcentered is-multiline is-mobile is-centered ">
                              <div class="column is-4-mobile">
                                   <img src="@/assets/asos.png" alt="" class="asos" data-aos="fade-in" data-aos-delay="200" data-aos-duration="600" />
                              </div>
                              <div class="column is-4-mobile">
                                   <img
                                        src="@/assets/currys.png"
                                        alt=""
                                        class="currys"
                                        data-aos="fade-in"
                                        data-aos-delay="350"
                                        data-aos-duration="600"
                                   />
                              </div>
                              <div class="column is-4-mobile">
                                   <img
                                        src="@/assets/netaporter.png"
                                        alt=""
                                        class="netaporter"
                                        data-aos="fade-in"
                                        data-aos-delay="500"
                                        data-aos-duration="600"
                                   />
                              </div>
                              <div class="column is-4-mobile">
                                   <img src="@/assets/ikea.png" alt="" class="ikea" data-aos="fade-in" data-aos-delay="650" data-aos-duration="600" />
                              </div>
                              <div class="column is-4-mobile">
                                   <img
                                        src="@/assets/amazon.png"
                                        alt=""
                                        class="amazon"
                                        data-aos="fade-in"
                                        data-aos-delay="800"
                                        data-aos-duration="600"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div class="section5">
               <div class="container">
                    <h2>1000+ happy shoppers</h2>
                    <p class="herosub mt-10">
                         Install extension and you’ll get notified on the best price
                    </p>
                    <div class="text-center mt-6">
                         <button class="button addtochrome ">
                              <img class="browser-icon chrome" src="@/assets/chrome.svg" alt="Chrome logo" />
                              <span class="btn-text browser-name active">Add to Chrome</span>
                         </button>
                    </div>
                    <div class="mt-4" data-aos="fade-in" data-aos-delay="500" data-aos-duration="800">
                         Its free 😄
                    </div>
               </div>
          </div>

          <footer>
               <div class="columns is-mobile">
                    <div class="column ">
                         <img src="@/assets/icon.png" alt="" class="logo" />

                         <div class="copyright is-hidden-touch">
                              Copyright @ yourtrolli.co.uk 2021. All Rights Reserved.
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
               <div class="copyright is-hidden-desktop">Copyright @ yourtrolli.co.uk 2021. <br />All Rights Reserved.</div>
          </footer>
     </div>
</template>

<script>
     // @ is an alias to /src
     import HelloWorld from "@/components/HelloWorld.vue";

     export default {
          name: "Home",
          components: {
               HelloWorld,
          },
     };
</script>

<style lang="scss" scoped>
     .columns,
     .column {
          margin: 0;
          padding: 0;
     }
     nav {
          margin-left: 7.6%;
          margin-right: 7.6%;
          padding: 50px;
          .logo {
               height: 40px;
          }
          @media only screen and (max-width: 600px) {
               padding: 30px 40px;
               margin: 0;
          }
          position: relative;
          min-height: 50px;
     }
     .herocontent {
          height: 87vh;

          padding-left: 20px;
          padding-right: 20px;
          text-align: center;
          position: relative;
     }

     .veralign {
          position: absolute;
          top: 44%;
          transform: translate(0, -50%);
          -webkit-transform: translate(0, -50%);
          text-align: center;
          width: 100%;
          left: 0;
          right: 0;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
     }

     .section2 {
          img {
               position: relative;
               left: -100px;
          }
          padding-bottom: 60px;
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
          text-align: left;

          position: relative;
          img {
               position: absolute;
               left: 15px;
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
          text-align: center;
          color: #232d42;

          @media only screen and (max-width: 600px) {
               font-size: 37px;

               .break {
                    // font-size: 35px;
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

     .section2,
     .section3 {
          @media only screen and (max-width: 600px) {
               padding: 0px 30px 100px 30px;
               text-align: center;
          }
          h2 {
               span {
                    display: block;
               }
               @media only screen and (max-width: 600px) {
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

               @media only screen and (max-width: 600px) {
                    text-align: center;
                    max-width: 330px;
                    display: inline-block;

                    font-size: 17px;
               }
          }
     }

     .section3 {
          margin-top: 80px;
          background: #fbfcff;
          @media only screen and (max-width: 600px) {
               padding: 50px 40px 120px 40px;
               text-align: center;
               p {
                    max-width: 330px !important;

                    display: inline-block;
               }
          }

          padding: 100px;
          padding-top: 120px;
          padding-bottom: 150px;
          img {
               height: 120px;
               width: auto;

               @media only screen and (max-width: 600px) {
                    height: 100px;
               }

               display: block;
          }
          .img1 {
               position: relative;
               top: 10px;
               left: -30px;

               @media only screen and (max-width: 600px) {
                    left: -10px;
               }
          }
          .img2 {
               position: relative;
               top: 20px;
               right: -30px;

               @media only screen and (max-width: 600px) {
                    right: -20px;
               }
          }
     }

     .section4 {
          padding: 100px;
          padding-top: 200px;
          padding-bottom: 150px;

          text-align: center;
          @media only screen and (max-width: 600px) {
               padding: 40px;
               padding-top: 80px;
               p {
                    max-width: 300px !important;
               }
          }

          h2 {
               text-align: center;
               font-size: 40px !important;
               @media only screen and (max-width: 600px) {
                    font-size: 30px !important;
               }
          }
          p {
               text-align: center;
               max-width: 100%;
               margin-top: 20px;
          }
          img {
               padding: 10px;
               display: block;
               width: 100%;
               height: auto;
          }
          .amazon {
               position: relative;
               top: 5px;
          }
          .ikea {
               width: 80%;
          }
     }

     .section5 {
          padding: 100px;
          padding-top: 150px;
          padding-bottom: 200px;
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

               @media only screen and (max-width: 600px) {
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
          .amazon {
               height: 60px;
               position: relative;
               top: 5px;
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
          margin: auto;
     }
</style>
