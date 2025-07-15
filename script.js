function filterGrid(category) {
  const items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    const match = category === 'all' || item.dataset.category === category;
    item.style.display = match ? 'block' : 'none';
  });
}
