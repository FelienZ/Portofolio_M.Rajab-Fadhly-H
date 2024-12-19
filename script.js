
  document.addEventListener('DOMContentLoaded', function () {
    const reviewLink = document.querySelector('.nav-link[href="#"]');

    reviewLink.addEventListener('click', function (event) {
      event.preventDefault();

      const reviewSection = document.getElementById('review-section');
      reviewSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

