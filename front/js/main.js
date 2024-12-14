function logout() {
  console.log("Logging out...");
  // Remove the JWT token
  sessionStorage.removeItem('token'); // If you use sessionStorage, replace with sessionStorage
  // Redirect to login page
  window.location.href = '/signin'; // Update the path as needed
}


function isLoggedIn() {
  const token = sessionStorage.getItem('token');
  console.log("Token:", token);
  if (!token) {
     window.location.href = 'http://localhost:3000/signin.html';
      return false;
  }

  try {
      const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
      const now = Math.floor(Date.now() / 1000); // Current time in seconds
      console.log("Decoded:", decoded);
      if (decoded.exp > now) {
          window.location.href = 'http://localhost:3000/loggedin.html';
          return true; // Token is still valid
      } else {
          sessionStorage.removeItem('token'); // Clear expired token
          window.location.href = 'http://localhost:3000/signin.html';
          return false;
      }
  } catch (err) {
      console.error("Error checking token:", err);
      return false;
  }
}



window.addEventListener('load', function() {

    console.log("Loaded");
    console.log(this.window.location.pathname);
    if (this.window.location.pathname == '/' || this.window.location.pathname == 'https://localhost:3000/') {
        console.log("Checking if logged in");
        isLoggedIn();
    }
    document.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('.sign-upp')) {
            e.preventDefault();
            const username = document.querySelector('.username').value;
            const email = document.querySelector('.email').value;
            const password = document.querySelector('.password').value;
            console.log("123", username, email, password);
            
           fetch('/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
          })
          .then(response => response.json())
          .then(data => {
            console.log('Response:', data);
            sessionStorage.setItem('token', data.token);
            if (data.success) {
                window.location.href = 'http://localhost:3000/loggedin.html';
            }
            else {
                alert("Data is not valid");
            }
          })
        }

        if (e.target.closest('.sign-in')) {
          e.preventDefault();
          const email = document.querySelector('.email').value;
          const password = document.querySelector('.password').value;
          console.log("123", email, password);
          
          fetch('/signin', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
          })
          .then(response => response.json())
          .then(data => {
            sessionStorage.setItem('token', data.token);
            console.log('Response:', data);
            if (data.success) {
                window.location.href = 'http://localhost:3000/loggedin.html';
            }
            else {
                alert("Data is not valid");
            }
          })
        }

        if (e.target.closest('.logout-button')) {
          e.preventDefault();
          logout();
        }

    });
});