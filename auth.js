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

const loginBtn = document.getElementById("login-btn");

// Email + Password (Login OR Auto-Signup)
loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || password.length < 6) {
        alert("Enter a valid email and password (min 6 chars)");
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Existing user
            window.location.href = "browse.html";
        })
        .catch(error => {
            // If user doesn't exist → create account
            if (
                error.code === "auth/user-not-found" ||
                error.code === "auth/invalid-login-credentials"
            ) {
                auth.createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        window.location.href = "browse.html";
                    })
                    .catch(err => {
                        alert(err.message);
                    });
            } else {
                alert(error.message);
            }
        });
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
