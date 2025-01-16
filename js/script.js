fetch('https://api.sendgrid.com/v3/mail/send', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_SENDGRID_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    personalizations: [{ to: [{ email: 'recipient@example.com' }] }],
    from: { email: 'nduna700@gmail.com' },
    subject: 'Contact Form Submission',
    content: [
      {
        type: 'text/plain',
        value: `Full Name: ${formData.get('full_name')}\n
                Phone: ${formData.get('phone_number')}\n
                Email: ${formData.get('email_address')}\n
                Message: ${formData.get('message')}`,
      },
    ],
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


function sendMessage(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const message = document.getElementById('message').value;
    
    const whatsappMessage = `Full Name: ${fullName}%0APhone Number: ${phoneNumber}%0AEmail Address: ${emailAddress}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/0603168301?text=${whatsappMessage}`;
    
    const emailSubject = 'Contact Form Submission';
    const emailBody = `Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail Address: ${emailAddress}\nMessage: ${message}`;
    const mailtoUrl = `mailto:nduna700@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Open Email
    window.open(mailtoUrl, '_blank');
  }

