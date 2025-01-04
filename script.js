//mostly made by chat gpt but yea, try and replace this code na lngs... -ren
function redirectToPage(url) {
    window.location.href = url;
}

// Event listeners for the buttons
document.querySelector('.Home').addEventListener('click', () => {
    redirectToPage('index.html'); // Redirects to the homepage
});

document.querySelector('.Git').addEventListener('click', () => {
    redirectToPage('github-acc.html'); // Redirects to GitHub
});

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  themeToggleButton.textContent =
    savedTheme === 'dark-theme' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-theme');
  themeToggleButton.textContent = isDarkMode
    ? 'Switch to Light Mode'
    : 'Switch to Dark Mode';
  
  // Save theme preference to localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark-theme' : '');
});
