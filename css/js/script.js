// script.js

// Handles login logic and redirects to dashboard if credentials match
function loginUser() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "uitmstudent" && pass === "123456") {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
    return false;
  } else {
    alert("Invalid Student ID or Password.");
    return false;
  }
}

// Logout user and redirect to homepage (index.html)
function logoutUser(event) {
  event.preventDefault();
  sessionStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// Protect restricted pages from unauthenticated access
document.addEventListener("DOMContentLoaded", () => {
  const protectedPages = [
    "dashboard.html",
    "dataview1.html",
    "dataview2.html",
    "profiles.html"
  ];

  const currentPage = window.location.pathname.split("/").pop();
  if (protectedPages.includes(currentPage)) {
    const isLoggedIn = sessionStorage.getItem("loggedIn");
    if (!isLoggedIn) {
      alert("Please log in to access this page.");
      window.location.href = "login.html";
    }
  }
});
