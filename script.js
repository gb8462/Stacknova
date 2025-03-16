function redirectToPage(url) {
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  document.querySelector('.Home').addEventListener('click', () => {
      console.log('Home clicked');
      redirectToPage('index.html');
  });

  document.querySelector('.Credits').addEventListener('click', () => {
      console.log('Credits clicked');
      redirectToPage('Credits.html');
  });
});