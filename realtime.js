// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjDbEIGhOkpUdh_vEBk-Nf8M7oFWJ8PBI",
  authDomain: "gdg-lome-workshop.firebaseapp.com",
  databaseURL: "https://gdg-lome-workshop-default-rtdb.firebaseio.com",
  projectId: "gdg-lome-workshop",
  storageBucket: "gdg-lome-workshop.firebasestorage.app",
  messagingSenderId: "1054947915727",
  appId: "1:1054947915727:web:1caa16eb94caa916ebc4ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); 
const statusRef = ref(db, 'status');

// Ecriture des données dans la base de données 

document.getElementById("btnSave").addEventListener("click", ()=> {
    const text = document.getElementById("statusInput").value;
    set(statusRef, text);
}); 

// Lecture des données en temps réel
onValue(statusRef, (snapshot) => {
    const data = snapshot.val();
    document.getElementById("statusDisplay").innerText = data || "Aucun status"; 

});