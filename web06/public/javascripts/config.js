import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNbYL7KMAP0gkAuwSdzPA6-arqqx6bLiI",
    authDomain: "inha-69ff9.firebaseapp.com",
    projectId: "inha-69ff9",
    storageBucket: "inha-69ff9.appspot.com",
    messagingSenderId: "386326963046",
    appId: "1:386326963046:web:44fae873964bba312f1ea7",
    measurementId: "G-VP9Z065Y0R"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);