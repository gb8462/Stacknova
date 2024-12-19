function redirectToPage(url) {
    window.location.href = url;
}

// Event listeners for the buttons
document.querySelector('.Home').addEventListener('click', () => {
    redirectToPage('index.html'); // Redirects to the homepage
});

document.querySelector('.Git').addEventListener('click', () => {
    redirectToPage('https://github.com'); // Redirects to GitHub
});