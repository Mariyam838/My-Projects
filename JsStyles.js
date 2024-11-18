// Smooth scrolling when clicking on "SIGN UP" buttons
document.querySelectorAll('.signup-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const signupSection = document.querySelector('#signup-section'); // Target the sign-up section ID
        signupSection.scrollIntoView({ behavior: 'smooth' });
    });
});
