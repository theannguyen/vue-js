import "./assets/main.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const vue = createApp(App);
vue.use(router).mount("#app");

const firebaseConfig = {
  apiKey: "AIzaSyABM7HBbKRmTcW7URASv0EV364y4pDxhes",
  authDomain: "landing-page-pda-it.firebaseapp.com",
  projectId: "landing-page-pda-it",
  storageBucket: "landing-page-pda-it.appspot.com",
  messagingSenderId: "1023507380286",
  appId: "1:1023507380286:web:45ac688cc36bd3ee8ab96f",
  measurementId: "G-DWT1JFKQM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
