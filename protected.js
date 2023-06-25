document.addEventListener("DOMContentLoaded", function() {
  // Check if the user is logged in
  var loggedInUsername = localStorage.getItem("username");

  if (loggedInUsername) {
    // Display the logged-in username on the page
    document.getElementById("loggedInUsername").textContent = loggedInUsername;
  } else {
    // Redirect to the login page if the user is not logged in
    window.location.href = "login.html";
  }
  
  // Logout function
  function logout() {
    // Remove the username from localStorage
    localStorage.removeItem("username");
    
    // Redirect to the login page
    window.location.href = "login.html";
  }
  
  // Add event listener to the logout button or link
  var logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", logout);
});
