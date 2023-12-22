document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate username format (email)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(username)) {
    alert('Please enter a valid email address for username');
    return;
  }

  // Validation for password already handled by HTML pattern attribute
  // Custom message will be displayed if pattern is not matched
  // You can add additional validation logic here if needed

  // Simulate login (replace this with actual login logic)
  alert('Login successful');
});
