// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBWzjL1b71xgapeAv6rOO_v8c6a0POMmWg",
    authDomain: "priestbookingwebsite.firebaseapp.com",
    projectId: "priestbookingwebsite",
    storageBucket: "priestbookingwebsite.firebasestorage.app",
    messagingSenderId: "826420010758",
    appId: "1:826420010758:web:22ccde7a9ff51003410887",
    measurementId: "G-4845GWB77E"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup function
function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Signup Successful!");
            window.location.href = "user_dashboard.html";
        })
        .catch(error => alert(error.message));
}

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login Successful!");
            window.location.href = "user_dashboard.html"; // Redirect to dashboard
        })
        .catch(error => alert(error.message));
}
