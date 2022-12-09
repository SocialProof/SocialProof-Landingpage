<template>
  <div id="app">
    <div class="nav-section">
      <div class="container">
        <nav class="">
          <router-link to="/">
            <img src="@/assets/images/sp-logo-white.png" alt="" class="logo"
          /></router-link>
          <a
            target="_blank"
            href="https://akmarnafi.typeform.com/to/dZ1oJW3K"
            class="demo-btn is-hidden-mobile"
          >
            <b-button type="is-black">Request Demo</b-button>
          </a>
        </nav>
      </div>
    </div>

    <router-view />

    <footer>
      <div class="columns">
        <div class="column ">
          <img src="@/assets/images/sp-logo-white.png" alt="" class="logo" />

          <div class="copyright is-hidden-touch">
            Copyright @ socialproof.works 2023. All Rights Reserved.
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column links">
            <h3>Company</h3>
            <div class="link">Twitter</div>
            <div class="link">Linkedin</div>
            <div class="link">Facebook</div>
          </div>
          <div class="column links">
            <h3>Support</h3>
            <div class="link">Contact</div>
            <div class="link">
              <router-link to="/privacy">Privacy</router-link>
            </div>
            <div class="link">Terms</div>
          </div>
        </div>
      </div>
      <div class="copyright is-hidden-desktop">
        Copyright @ socialproof.works 2023. <br />All Rights Reserved.
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#app,
* {
  font-family: "Mulish", sans-serif;
}
.nav-section {
  background-color: #5458f7;
}
nav {
  display: flex;
  .demo-btn {
    margin-left: auto;
  }
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
  color: #bfbfbf;
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
  background: black;
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
