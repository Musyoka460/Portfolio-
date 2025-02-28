// Initialize EmailJS with your User ID
emailjs.init('Qw5mt70DcCyii4Hcj'); // Replace with your User ID

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simple validation
  if (!name || !email || !message){
    showFormStatus('Please fill in all fields.', 'error');
    return;
  }

  if (!validateEmail(email)) {
    showFormStatus('Please enter a valid email address.', 'error');
    return;
  }

  // Send email using EmailJS
  emailjs.send('service_g7wsxul', 'template_b8taesl', { // Replace with your Service ID and Template ID
    name: name,
    email: email,
    message: message,
  })
  .then(() => {
    showFormStatus('Thank You,Message sent successfully! 🎉', 'success');
    contactForm.reset();
  })
  .catch(() => {
    showFormStatus('Oops! Something went wrong. Please try again later.', 'error');
  });
});

// Helper: Show form status message
function showFormStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
  setTimeout(() => {
    formStatus.textContent = '';
    formStatus.className = 'form-status';
  }, 6000);
}

// Helper: Validate email format
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}