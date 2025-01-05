//mostly made by chat gpt but yea, try and replace this code na lngs... -ren
//doesn't work before I fixed it -worms

function redirectToPage(url) {
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  document.querySelector('.Home').addEventListener('click', () => {
      console.log('Home clicked');
      redirectToPage('index.html');
  });

  document.querySelector('.Git').addEventListener('click', () => {
      console.log('Git clicked');
      redirectToPage('github.html');
  });
});


// const themeToggleButton = document.getElementById('theme-toggle');
// const body = document.body;

// Check for saved theme preference
// const savedTheme = localStorage.getItem('theme');
// if (savedTheme) {
//   body.classList.add(savedTheme);
//   themeToggleButton.textContent =
//     savedTheme === 'dark-theme' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
// }

// Toggle theme on button click
// themeToggleButton.addEventListener('click', () => {
//   const isDarkMode = body.classList.toggle('dark-theme');
//   themeToggleButton.textContent = isDarkMode
//     ? 'Switch to Light Mode'
//     : 'Switch to Dark Mode';
  
//   // Save theme preference to localStorage
//   localStorage.setItem('theme', isDarkMode ? 'dark-theme' : '');
// });
