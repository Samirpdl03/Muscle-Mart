// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Product filtering functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter products
      productCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.classList.remove('hidden');
          // Trigger animation
          setTimeout(() => {
            card.style.animation = 'none';
            setTimeout(() => {
              card.style.animation = '';
            }, 10);
          }, 0);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
