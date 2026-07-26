const WHATSAPP_NUMBER = '+27603168301';

export function sendWhatsApp(name, phone, email, message) {
  const trimmedName = name?.trim() || '';
  const trimmedPhone = phone?.trim() || '';
  const trimmedEmail = email?.trim() || '';
  const trimmedMessage = message?.trim() || '';

  if (!trimmedName || !trimmedPhone || !trimmedEmail || !trimmedMessage) {
    alert('Please fill in all fields before sending.');
    return;
  }

  const formattedMessage = [
    `Name: ${trimmedName}`,
    `Phone: ${trimmedPhone}`,
    `Email: ${trimmedEmail}`,
    `Message: ${trimmedMessage}`
  ].join('\n');

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(formattedMessage)}`;
  window.open(whatsappURL, '_blank', 'noopener,noreferrer');
}