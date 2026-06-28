const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');
const topBtn = document.getElementById('topBtn');

searchInput.addEventListener('input', () => {
  const value = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? 'block' : 'none';
  });
});

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
