
// Like Button Functionality
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

// Initialize likes from localStorage or set to 0
let likes = localStorage.getItem('likes') || 0;
likeCount.textContent = likes;

// Add event listener to the like button
likeButton.addEventListener('click', () => {
  likes++; // Increment likes
  likeCount.textContent = likes; // Update the like count display
  localStorage.setItem('likes', likes); // Save likes to localStorage
});