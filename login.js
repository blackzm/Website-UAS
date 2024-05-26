function login() {


  const usernameInput = document.querySelector('.username');
  const passwordInput = document.querySelector('.password');
  const loginButton = document.querySelector('.clkbtn');

  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
  });

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const credentials = {
    username: username,
    password: password
  };

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  
  .catch(error => {
    console.error('Error during login:', error);
  });
}

const loginButton = document.querySelector('.clkbtn');
if (loginButton) {
  loginButton.addEventListener('click', login);
}