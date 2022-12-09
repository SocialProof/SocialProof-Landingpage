<template>
  <div class="home">
    <div class="herocontent ">
      <div class="container">
        <div class="veralign">
          <div>
            <h1
              data-aos="fade-in"
              data-aos-delay="100 "
              data-aos-duration="800"
            >
              Let you customers speak for your product
            </h1>
            <p
              class="herosub mt-4"
              data-aos="fade-in"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              Have customers raving about your products on their socials? Great,
              Now let us SocialProof that into your website!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="intermediate-1">
      <img
        src="@/assets/images/social-media-1.png"
        alt=""
        class="shoutout"
        data-aos="fade-top"
        data-aos-duration="600"
      />
      <img
        src="@/assets/images/filler-1.png"
        alt=""
        class="filler-left"
        data-aos="fade-top"
        data-aos-duration="200"
      />
      <img
        src="@/assets/images/filler-2.png"
        alt=""
        class="filler-right"
        data-aos="fade-top"
        data-aos-duration="600"
      />
    </div>

    <div class="section2 ">
      <div class="container">
        <div class="columns is-vcentered ">
          <div class="column">
            <div class="text">
              <h2>Potential Customers listen to actual customers</h2>
              <div>
                <p>
                  Social media is the voice of you current customer, SocialProof
                  is the megaphone that pushed a Potential customer to buy!
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <img src="@/assets/images/social-scrolling.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="section3 ">
      <img src="@/assets/images/heart.png" class="heart" alt="" />
      <img src="@/assets/images/wave.png" class="wave" alt="" />
      <div class="container">
        <div class="columns is-vcentered  m-0 p-0">
          <div class="column">
            <img src="@/assets/images/analytics.png" class="analytics" alt="" />
          </div>

          <div class="column">
            <div class="text">
              <h2>
                Your customers <span class="break">are talking about you!</span>
              </h2>
              <div>
                <p>
                  Let your website speak for your products through the words and
                  content of your invaluable customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section4 ">
      <div class="container">
        <div class="columns is-vcentered ">
          <div class="column">
            <div>
              <h2></h2>
              <div class="howitworks">
                <div
                  data-aos="fade-in"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  class="howitworksitem aos-init aos-animate"
                >
                  <div class="columns is-mobile">
                    <div class="column">
                      <h4>Discover</h4>
                      <p>
                        We make it easy to find content posted about your
                        product on various social media platforms
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-in"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  class="howitworksitem aos-init"
                >
                  <div class="columns  is-mobile">
                    <div class="column">
                      <h4>Segregate</h4>
                      <p>
                        Use our dashboard or browser extension to tag content to
                        specifc product SKUs or categories
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-in"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  class="howitworksitem aos-init"
                >
                  <div class="columns  is-mobile">
                    <div class="column">
                      <h4>Showcase</h4>
                      <p>
                        Use our prebuild components to add content into you
                        website or use our Api for Customizations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <img src="@/assets/images/how-it-works.png" alt="" class="img1" />
          </div>
        </div>
      </div>
    </div>
    <div class="section6">
      <div class="container">
        <img src="@/assets/images/store.png" alt="" class="happyshoppers" />
        <h2>Let you store find the socialproof it deserves!</h2>
        <!-- <p class="herosub mt-10">
                         Install extension and you’ll get notified on the best price
                    </p> -->
        <div class="subscribeForm mt-6">
          <a target="_blank" href="https://akmarnafi.typeform.com/to/dZ1oJW3K">
            <b-button
              type="is-primary"
              class="button  addtochromebtn"
              native-type="submit"
            >
              Request Demo
            </b-button>
          </a>
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
        let resp = await axios.post(
          "https://getwaitlist.com/api/v1/waitlists/submit",
          {
            email: submitted_email,
            api_key: your_api_key,
            referral_link: document.URL,
          }
        );

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

.addtochromebtn {
  padding: 0 40px;
}

.herocontent {
  background-color: #5458f7;
  text-align: left;
  position: relative;
  padding: 50px 0 300px 0;
  color: white;

  h1 {
    color: white;
    font-weight: 700;
    text-align: center;
  }

  p {
    max-width: 650px;
    font-weight: 400;
    margin: auto;
    color: white;
    text-align: center;
    font-size: 21px;
  }

  @media only screen and (max-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;

    p {
      max-width: auto;
    }
  }

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
}

.intermediate-1 {
  position: relative;

  .shoutout {
    margin: 50px auto;
    width: 550px;
    display: block;
    position: relative;
    top: -320px;
  }

  .filler-left {
    position: absolute;
    top: -200px;
    left: -90px;
    width: 300px;

    @media only screen and (max-width: 800px) {
      width: 100px;
      left: -20px;
      top: -100px;
    }
  }

  .filler-right {
    position: absolute;
    top: -200px;
    right: -120px;
    width: 350px;

    @media only screen and (max-width: 800px) {
      width: 120px;
      right: -30px;
      top: -100px;
    }
  }
}

h1 {
  font-size: 50px;
  font-style: normal;
  font-weight: 400;

  color: #232d42;

  @media only screen and (max-width: 600px) {
    font-size: 29px;

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
    font-size: 17px;
  }
}

.section3 {
  position: relative;

  img.analytics {
    position: relative;
    max-width: 600px;
  }

  .heart {
    position: absolute;
    top: -130px;
    left: -60px;
    max-width: 220px;
  }

  .wave {
    position: absolute;
    bottom: -130px;
    right: -60px;
    max-width: 250px;
  }

  padding-bottom: 100px;
  padding-top: 100px;

  .text {
    margin-left: 50px;
    max-width: 500px;
  }

  @media only screen and (max-width: 800px) {
    padding: 100px 30px 100px 30px;
    text-align: center;

    .columns {
      display: flex;

      flex-direction: column-reverse;
    }

    .text {
      margin-left: 0;
      max-width: auto;
      margin-bottom: 30px;
    }

    img.analytics {
      margin: auto;
      max-width: 350px;
    }

    .heart {
      position: absolute;
      top: -80px;
      left: -30px;
      max-width: 100px;
    }

    .wave {
      position: absolute;
      bottom: -130px;
      right: -60px;
      max-width: 200px;
    }
  }

  h2 {
    max-width: 500px;

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

    @media only screen and (max-width: 800px) {
      text-align: center;
      // max-width: 330px;
      display: inline-block;

      font-size: 17px;
    }
  }
}

.section2 {
  @media only screen and (max-width: 800px) {
    padding: 0px 30px 100px 30px;
    text-align: center;
  }

  .text {
    max-width: 500px;
  }

  h2 {
    font-weight: 700;

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
    font-size: 21px;
    margin-top: 20px;

    @media only screen and (max-width: 800px) {
      text-align: center;
      // max-width: 330px;
      display: inline-block;
      margin-bottom: 20px;
      font-size: 17px;
    }
  }

  margin-top: -150px;

  @media only screen and (max-width: 800px) {
    margin-top: -250px;
    padding: 0 40px 120px 40px;
    text-align: center;

    p {
      display: inline-block;
    }
  }

  padding-bottom: 170px;

  img {
    width: auto;
    margin-left: 30px;
    max-width: 420px;

    @media only screen and (max-width: 800px) {
      height: 400px;
      margin: auto;
    }

    display: block;
  }
}

.section4 {
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
    background: #5458f7;
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

  padding: 150px;
  padding-top: 150px;
  padding-bottom: 170px;

  img {
    @media only screen and (max-width: 800px) {
      width: 100%;
      margin: auto;
      margin-top: 50px;
      max-width: 350px;
    }

    display: block;
    max-width: 550px;
  }
}

.section6 {
  background: black;
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
    margin-top: 50px;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    font-size: 40px !important;
    font-weight: 700;

    @media only screen and (max-width: 800px) {
      font-size: 27px !important;
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
      max-width: 220px;
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

    @media only screen and (max-width: 800px) {
      width: 100%;
      min-width: 90px;
      max-width: 150px;
      margin: auto;
      display: block;
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

  color: #5458f7;
}

.herosub {
  max-width: 600px;

  @media only screen and (max-width: 800) {
    max-width: auto;
    margin: auto;
  }
}
</style>
<style lang="scss">
.subscribeForm {
  button {
    margin-top: 10px;
    font-size: 18px;
  }
}
</style>
