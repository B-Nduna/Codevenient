// Function to send email using SendGrid
function sendEmail(formData) {
  return fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_SENDGRID_API_KEY', // Replace with your SendGrid API key
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: 'nduna700@gmail.com' }] }],
      from: { email: 'nduna700@gmail.com' },
      subject: 'Contact Form Submission',
      content: [
        {
          type: 'text/plain',
          value: `Full Name: ${formData.get('fullName')}\n
                  Phone: ${formData.get('phoneNumber')}\n
                  Email: ${formData.get('emailAddress')}\n
                  Message: ${formData.get('message')}`,
        },
      ],
    }),
  });
}

// Function to handle contact form submission
function sendMessage(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const loadingAnimation = document.getElementById('loadingAnimation');
  
  // Show loading animation
  loadingAnimation.style.display = 'flex';
  
  sendEmail(formData)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Message sent successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to send message.');
    })
    .finally(() => {
      // Hide loading animation
      loadingAnimation.style.display = 'none';
    });
}

// Function to handle subscribe form submission
function subscribe(event) {
  event.preventDefault();
  
  const email = document.getElementById('subscribeEmail').value;
  const formData = new FormData();
  formData.append('fullName', 'Subscriber');
  formData.append('phoneNumber', '');
  formData.append('emailAddress', email);
  formData.append('message', 'Please subscribe me to the newsletter.');
  
  const loadingAnimation = document.getElementById('loadingAnimation');
  
  // Show loading animation
  loadingAnimation.style.display = 'flex';
  
  sendEmail(formData)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Subscription successful!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to subscribe.');
    })
    .finally(() => {
      // Hide loading animation
      loadingAnimation.style.display = 'none';
    });
}

// Add event listeners to forms
document.getElementById('contactForm').addEventListener('submit', sendMessage);
document.getElementById('subscribeForm').addEventListener('submit', subscribe);
