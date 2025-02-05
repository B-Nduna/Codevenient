// Function to handle WhatsApp message sending
function sendWhatsApp() {
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !phone || !email || !message) {
    alert("Please fill in all fields before sending.");
    return;
  }

  let formattedMessage = `Name: ${name}%0A` +
                         `Phone: ${phone}%0A` +
                         `Email: ${email}%0A` +
                         `Message: ${message}`;
  
  let whatsappURL = `https://wa.me/27814588898?text=${encodeURIComponent(formattedMessage)}`;

  if (confirm("You are about to send a message via WhatsApp. Proceed?")) {
    window.open(whatsappURL, "_blank");
  }
}

// Handle form submission
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("subscribe-form");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission
    sendWhatsApp();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("subscribe-form");

  if (!form) {
    console.error("Subscribe form not found!");
    return;
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let email = document.getElementById("email").value.trim();

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Subscribed successfully with ${email}!`);
    form.reset(); // Clear the input field
  });
});

