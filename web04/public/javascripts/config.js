// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcD0NbXPvK3Qj6EVAujt_5CrfN8bvBWMI",
    authDomain: "inha-81809.firebaseapp.com",
    projectId: "inha-81809",
    storageBucket: "inha-81809.appspot.com",
    messagingSenderId: "128493860982",
    appId: "1:128493860982:web:ba5a77fbca5ae7094fc757",
    measurementId: "G-WD6NYE4KEV",
};

// Initialize Firebase
// app export (내보내기)
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
