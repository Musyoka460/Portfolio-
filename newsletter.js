// Newsletter Subscription Form
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the email input value
  const emailInput = newsletterForm.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  // Simple validation
  if (!email) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  // Show thank you message
  showToast('Oops! Something went wrong. Please try again later.', 'success');

  // Clear the input field
  emailInput.value = '';
});

// Function to show toast notification
function showToast(message, type) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;

  // Add toast to the body
  document.body.appendChild(toast);

  // Remove toast after 5 seconds
  setTimeout(() => {
    toast.remove();
  }, 7000);
}