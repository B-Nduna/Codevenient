import { useEffect } from 'react';

export default function OrganizationSchema() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Codevenient Consulting',
      url: 'https://codevenient.co.za/',
      logo: 'https://codevenient.co.za/images/logo.png',
      description: 'Web development, ecommerce, applications and ready-built digital systems for modern businesses.',
      areaServed: { '@type': 'Country', name: 'South Africa' },
      sameAs: []
    };
    let script = document.getElementById('codevenient-schema');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'codevenient-schema';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
    return () => script?.remove();
  }, []);
  return null;
}
