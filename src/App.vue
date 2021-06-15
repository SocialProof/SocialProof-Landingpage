<template>
     <div id="app">
          <div class="container">
               <nav class="">
                    <router-link to="/"> <img src="@/assets/images/icon.png" alt="" class="logo"/></router-link>
               </nav>
          </div>

          <router-view />

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
                         <div class="link"><router-link to="/privacy">Privacy</router-link></div>
                         <div class="link">Terms</div>
                    </div>
               </div>
               <div class="copyright is-hidden-desktop">Copyright @ yourtrolli.com 2021. <br />All Rights Reserved.</div>
          </footer>
     </div>
</template>

<style lang="scss" scoped>
     #app {
          font-family: "Nunito", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
     }

     h1,
     h2,
     h3 {
          font-family: "Lato", sans-serif;
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
</style>
