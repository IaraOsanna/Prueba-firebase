script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAwUMIMqBy0auX5PvTWhPjvTJBhFZ7E0WQ",
    authDomain: "bicicleteria-b2ae3.firebaseapp.com",
    databaseURL: "https://bicicleteria-b2ae3-default-rtdb.firebaseio.com",
    projectId: "bicicleteria-b2ae3",
    storageBucket: "bicicleteria-b2ae3.firebasestorage.app",
    messagingSenderId: "759510024682",
    appId: "1:759510024682:web:7c1bb3a06dccb9c982f293",
    measurementId: "G-9SQ9NXGQZH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

let firebaseConfig = {
    apiKey: "AIzaSyAwUMIMqBy0auX5PvTWhPjvTJBhFZ7E0WQ",
    authDomain: "bicicleteria-b2ae3.firebaseapp.com",
    databaseURL: "https://bicicleteria-b2ae3-default-rtdb.firebaseio.com",
    projectId: "bicicleteria-b2ae3",
    storageBucket: "bicicleteria-b2ae3.firebasestorage.app",
    messagingSenderId: "759510024682",
    appId: "1:759510024682:web:7c1bb3a06dccb9c982f293",
    measurementId: "G-9SQ9NXGQZH"
};

let app = initializeApp(firebaseConfig);
let baseDatos = getDatabase(app);