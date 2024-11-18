// Smooth scrolling when clicking on Book Now button
document.querySelector('.book-now-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const formSection = document.querySelector('#signup-section'); // Target the form section ID
    formSection.scrollIntoView({ behavior: 'smooth' });
});
