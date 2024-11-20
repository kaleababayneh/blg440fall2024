window.addEventListener('load', function() {

    document.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('.sign-up')) {
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
            console.log('Response:', data);
            if (data.success) {
                window.location.href = 'http://localhost:3000/loggedin.html';
            }
            else {
                alert("Data is not valid");
            }
          })
      }
    });
});