// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation
// Initialize EmailJS with your User ID
(function () {
  emailjs.init('QeAb9XgFPq-vI5h1n'); // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Send email using EmailJS
  emailjs.send('service_a7qqmvo', 'template_e6olcq8', { // Replace with your Service ID and Template ID
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  })
  .then(() => {
    console.log('Email to you sent successfully!');

    // Send acknowledgment email to the user
    emailjs.send('service_a7qqmvo', 'template_w813cmp', {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
      .then(() => {
        console.log('Acknowledgment email sent to user!');
        // Show success message
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';

        // Reset the form
        this.reset();

        // Hide the success message after 5 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending acknowledgment email:', error);
        alert('Failed to send acknowledgment email. Please try again.');
      });
  })
  .catch((error) => {
    console.error('Error sending email to you:', error);
    alert('Failed to send message. Please try again.');
  });
});

  const heroBackground = document.querySelector('.hero-background');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const images = [
    'images/a.jpg',
    'images/b.jpg',
    'images/c.jpg',
    'images/d.jpg'
  ];
  let currentIndex = 0;
  let autoSwipeInterval;
  
  // Function to update the background image
  function updateBackground() {
    heroBackground.style.backgroundImage = `url('${images[currentIndex]}')`;
  }
  
  // Function to go to the next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
  }
  
  // Function to go to the previous image
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
  }
  
  // Start automatic swiping
  function startAutoSwipe() {
    autoSwipeInterval = setInterval(nextImage, 5000); // Change image every 5 seconds
  }
  
  // Stop automatic swiping
  function stopAutoSwipe() {
    clearInterval(autoSwipeInterval);
  }
  
  // Event listeners for buttons
  prevButton.addEventListener('click', () => {
    stopAutoSwipe(); // Stop auto swipe when manually navigating
    prevImage();
    startAutoSwipe(); // Restart auto swipe after manual navigation
  });
  
  nextButton.addEventListener('click', () => {
    stopAutoSwipe(); // Stop auto swipe when manually navigating
    nextImage();
    startAutoSwipe(); // Restart auto swipe after manual navigation
  });
  
  // Initialize with the first image and start auto swipe
  updateBackground();
  startAutoSwipe();
  // Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Get the form and success message elements
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  // Add a submit event listener to the form
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (name && email && subject && message) {
      // Show success message
      successMessage.style.display = 'block';

      // Reset the form
      contactForm.reset();

      // Hide the success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000); // 5000 milliseconds = 5 seconds
    } else {
      alert('Please fill out all fields.'); // Show an alert if any field is empty
    }
  });
});
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
// Function to handle smooth scrolling
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Add event listeners to each service
document.getElementById('seo-service').addEventListener('click', scrollToContact);
document.getElementById('social-media-service').addEventListener('click', scrollToContact);
document.getElementById('website-service').addEventListener('click', scrollToContact);
