
// Firebase initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAnoXunOy-o6TqnQFOFNldM4K-YxGHDfI",
  authDomain: "dascoaching-web.firebaseapp.com",
  projectId: "dascoaching-web",
  storageBucket: "dascoaching-web.appspot.com",
  messagingSenderId: "77147928826",
  appId: "1:77147928826:web:1af4e6685545bb7a05b143",
  measurementId: "G-HNN0XXFCRF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.sendOTP = function() {
  const phoneNumber = document.getElementById("phone").value;
  const appVerifier = new RecaptchaVerifier(auth, 'sendOTP', {
    'size': 'invisible'
  });
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent!");
    }).catch((error) => {
      console.error("SMS not sent", error);
    });
};
