document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate username and password
  if ((username === "moinkhanmb8@gmail.com" && password === "Aadmin@123") ||
      (username === "100nualvi" && password === "Agufran123@") ||
      (username === "drishti" && password === "Adrishti@123") ||
      (username === "kashif.mk1852@gmail.com" && password === "kashif@123")) {
    // Store the logged-in user's username in local storage
    localStorage.setItem("username", username);

    // Redirect to the home page
    window.location.href = "home.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});

window.addEventListener("DOMContentLoaded", function() {
  var username = localStorage.getItem("username");

  if (username) {
    // Hide the login form if a user is already logged in
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = "none";

    // Show the welcome message with the username
    var welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Welcome, " + username + "!";
    loginForm.parentNode.insertBefore(welcomeMessage, loginForm.nextSibling);
  }
// Logout function
function logout() {
  // Remove the username from localStorage
  localStorage.removeItem("username");

  // Redirect to the login page
  window.location.href = "login.html";
}

// Add event listener to the logout button
var logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", logout);
});
