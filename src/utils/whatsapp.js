export function sendWhatsApp(name, phone, email, message) {
  if (!name || !phone || !email || !message) {
    alert("Please fill in all fields before sending.");
    return;
  }

  let formattedMessage = `Name: ${name}%0A` +
                         `Phone: ${phone}%0A` +
                         `Email: ${email}%0A` +
                         `Message: ${message}`;
  
  let whatsappURL = `https://wa.me/27603168301?text=${encodeURIComponent(formattedMessage)}`;

  if (confirm("You are about to send a message via WhatsApp. Proceed?")) {
    window.open(whatsappURL, "_blank");
  }
}