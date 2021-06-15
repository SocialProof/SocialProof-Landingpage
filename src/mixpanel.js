import mixpanel from "mixpanel-browser";

mixpanel.init("46a02a18fab60ac8ea0e832bebd1203b");
mixpanel.track("Sign up");

export default {
     test() {
          try {
               mixpanel.track("Test");
          } catch (e) {}
     },
     custom(event) {
          try {
               mixpanel.track(event);
          } catch (e) {}
     },
};
