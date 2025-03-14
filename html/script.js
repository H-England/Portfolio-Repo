document.addEventListener('DOMContentLoaded', function() {
 const darkModeToggle = document.getElementById('dark-mode-toggle');
 const body = document.body;

 function updateButtonIcon() {
    const img = darkModeToggle.querySelector('img');
    if(!img) return;

    img.src = body.classList.contains('dark-mode') ? "Screenshot_2.png" : "Screenshot_1.png"
 }

 // Check for saved user preference, if any, and apply it
 const userPrefersDark = localStorage.getItem('darkMode') === 'true';
 if (userPrefersDark) {
     body.classList.add('dark-mode');
 }

 window.onload = function () {
    body.classList.add('mode-loaded');
 }

 updateButtonIcon();

 darkModeToggle.addEventListener('click', function() {
     body.classList.toggle('dark-mode');

     // Save the user preference to local storage
     const isDarkMode = body.classList.contains('dark-mode');
     localStorage.setItem('darkMode', isDarkMode)

     updateButtonIcon();
 });
});

