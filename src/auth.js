function navigateTo(page) {
    window.location.href = page;
}

// function handleFormSubmit(event) {
//     event.preventDefault();
//
//     // Retrieve username and password from form
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//
//     // Store user data in localStorage
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);
//
//     window.location.href = 'profile.html';
// }
//
// // Check if user is already logged in
// window.addEventListener('DOMContentLoaded', () => {
//     const username = localStorage.getItem('username');
//     const password = localStorage.getItem('password');
//
//     if (username && password) {
//         window.location.href = 'profile.html';
//     }
// });

document.querySelector('form').addEventListener('submit', handleFormSubmit);
