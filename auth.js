// 🔴 PASTE YOUR firebaseConfig HERE
const firebaseConfig = {
  apiKey: "AIzaSyDyqUu420LI5xrGAuUUWGmXPXMDupudY4A",
  authDomain: "netflix-clone-12b13.firebaseapp.com",
  projectId: "netflix-clone-12b13",
  storageBucket: "netflix-clone-12b13.firebasestorage.app",
  messagingSenderId: "487742594809",
  appId: "1:487742594809:web:d9514d466cce8a9920cc28"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Email login
document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "browse.html";
        })
        .catch(err => alert(err.message));
});

// Google login
document.getElementById("google-btn").addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then(() => {
            window.location.href = "browse.html";
        })
        .catch(err => alert(err.message));
});

