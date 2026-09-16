export const PRODUCT_CATEGORIES = ['All systems','Websites','E-commerce','Web apps','Business systems'];

export const products = [
  {
    id:'legal-executive', ref:'SYS-001', name:'Legal Executive', category:'Websites', industry:'Legal', type:'Premium practice website',
    summary:'A confident, cinematic legal-practice foundation for firms that need authority before the first consultation.',
    description:'Designed for attorneys, advocates and specialist legal practices that want a premium online presence without a generic corporate template feel.',
    accent:'#1F4E79', status:'READY', featured:true, image:'products/legal-executive.webp',
    tags:['Multi-page','Lead capture','Responsive','SEO-ready'],
    features:['Practice-area architecture','Attorney profiles','Consultation CTA system','Case-study / insight layouts','Responsive navigation','SEO and accessibility foundation'],
    stack:['React','Vite','CSS'],
    tiers:[
      {id:'source',label:'Source',price:899,note:'Reusable frontend files + setup notes'},
      {id:'launch',label:'Launch',price:2799,note:'Branding, content setup, domain + deployment'},
      {id:'custom',label:'Custom',price:null,note:'New functionality, integrations and tailored flows'}
    ]
  },
  {
    id:'legal-docket', ref:'SYS-002', name:'Legal Docket', category:'Websites', industry:'Legal', type:'Editorial legal website',
    summary:'A restrained case-file inspired legal site with a strong editorial rhythm and serious professional tone.',
    description:'A lighter legal-system edition for smaller firms that still need distinctive structure, trust and a professional mobile experience.',
    accent:'#294D67', status:'READY', featured:false, image:'products/legal-docket.webp',
    tags:['Editorial','Responsive','Fast','Lead capture'],
    features:['Case-file visual system','Services architecture','Attorney / firm profile','Contact conversion points','Mobile-first layout','Easy content replacement'],
    stack:['React','Vite','CSS'],
    tiers:[{id:'source',label:'Source',price:749,note:'Reusable frontend files + setup notes'},{id:'launch',label:'Launch',price:2299,note:'Branding, content setup + deployment'},{id:'custom',label:'Custom',price:null,note:'Tailored pages, forms and integrations'}]
  },
  {
    id:'sentinel', ref:'SYS-003', name:'Sentinel', category:'Business systems', industry:'Security', type:'Security company system',
    summary:'Services, coverage, quote intent and trust architecture built specifically for modern security companies.',
    description:'A commercial starting point for armed response, guarding, CCTV, tracking and risk-assessment providers.',
    accent:'#D9552E', status:'READY', featured:true, image:'products/sentinel.webp',
    tags:['Estimator','Services','Coverage','WhatsApp'],
    features:['Service catalogue','Quote estimator UI','Coverage-area section','Emergency / priority CTAs','Trust and compliance blocks','WhatsApp conversion path'],
    stack:['React','Vite','CSS'],
    tiers:[{id:'source',label:'Source',price:999,note:'Reusable frontend system'},{id:'launch',label:'Launch',price:2999,note:'Branding, services, deployment + setup'},{id:'custom',label:'Custom',price:null,note:'Live quoting, CRM or customer portal'}]
  },
  {
    id:'bloom-commerce', ref:'SYS-004', name:'Bloom Commerce', category:'E-commerce', industry:'Retail', type:'Boutique commerce starter',
    summary:'A conversion-focused storefront for beauty, wellness, handmade products and small local retailers.',
    description:'Built for founders who need something more deliberate than a catalogue page, with product discovery and checkout structure ready to extend.',
    accent:'#7D5D44', status:'READY', featured:true, image:'products/bloom-commerce.webp',
    tags:['Catalogue','Cart','Checkout','Mobile-first'],
    features:['Product catalogue','Product detail structure','Cart interactions','Checkout journey','Order confirmation','Responsive commerce layouts'],
    stack:['React','Vite','CSS'],
    tiers:[{id:'source',label:'Source',price:799,note:'Storefront source + setup notes'},{id:'launch',label:'Launch',price:2499,note:'Products loaded, branding + deployment'},{id:'custom',label:'Custom',price:null,note:'Payments, stock, accounts and integrations'}]
  },
  {
    id:'ink-studio', ref:'SYS-005', name:'INK Studio', category:'Websites', industry:'Creative', type:'Tattoo & creative studio',
    summary:'An image-led, expressive studio system for tattoo artists, barbers, photographers and alternative creatives.',
    description:'Strong identity, portfolio-led storytelling and appointment conversion without the usual generic creative-template look.',
    accent:'#442B57', status:'READY', featured:false, image:'products/ink-studio.webp',
    tags:['Portfolio','Artists','Appointments','Visual'],
    features:['Artist portfolio layouts','Studio story','Service presentation','Appointment CTA flow','Gallery system','Mobile image treatment'],
    stack:['React','Vite','CSS'],
    tiers:[{id:'source',label:'Source',price:749,note:'Reusable frontend source'},{id:'launch',label:'Launch',price:2299,note:'Brand, portfolio + deployment'},{id:'custom',label:'Custom',price:null,note:'Bookings, deposits and artist dashboards'}]
  },
  {
    id:'form-studio', ref:'SYS-006', name:'FORM', category:'Websites', industry:'Architecture', type:'Architecture & design portfolio',
    summary:'A high-clarity portfolio system for architects, interior studios, builders and spatial designers.',
    description:'Project-first presentation with room for case studies, drawings, 3D renders, services and consultation requests.',
    accent:'#5F6A61', status:'REBUILD', featured:false, image:'products/form-studio.webp',
    tags:['Portfolio','Projects','Case studies','Consultation'],
    features:['Large project presentation','Case-study layouts','Services pages','Before / after sections','Consultation CTA','Mobile portfolio navigation'],
    stack:['React','Vite','CSS'],
    tiers:[{id:'source',label:'Source',price:699,note:'Reusable frontend source'},{id:'launch',label:'Launch',price:2199,note:'Portfolio setup + deployment'},{id:'custom',label:'Custom',price:null,note:'Project CMS, uploads and lead workflow'}]
  },
  {
    id:'bereka-market', ref:'APP-001', name:'Bereka Market', category:'Web apps', industry:'Services', type:'Local services marketplace',
    summary:'A serious marketplace foundation for connecting customers with verified local trades and service providers.',
    description:'The most ambitious system in the catalogue: provider discovery, bookings, favourites, reviews and customer/provider flows ready for a real backend.',
    accent:'#246B62', status:'ADVANCED', featured:true, image:'products/bereka-market.webp',
    tags:['Marketplace','Profiles','Bookings','Maps-ready'],
    features:['Provider discovery','Trade and proximity filtering','Provider profiles','Bookings and favourites','Reviews and trust signals','Customer / provider account flows'],
    stack:['React','Vite','Capacitor-ready'],
    tiers:[{id:'source',label:'Starter',price:2499,note:'Frontend marketplace foundation'},{id:'launch',label:'Launch+',price:7499,note:'Brand, deployment + backend setup scope'},{id:'custom',label:'Custom',price:null,note:'Payments, maps, verification and native app'}]
  },
  {
    id:'drive-pro', ref:'SYS-007', name:'Drive Pro', category:'Websites', industry:'Education', type:'Driving school website',
    summary:'Packages, testimonials and high-intent enquiry flows for driving schools that live on mobile and WhatsApp.',
    description:'A ready foundation for learner-driver businesses, built around trust, packages and the fastest route to enquiry.',
    accent:'#CE6C2D', status:'READY', featured:false, image:'products/drive-pro.webp',
    tags:['Packages','Testimonials','WhatsApp','Mobile'],
    features:['Lesson package structure','Testimonials / video-ready section','Instructor content','Strong enquiry CTA','FAQ blocks','Responsive hero system'],
    stack:['React','Vite','CSS'],
    tiers:[{id:'source',label:'Source',price:649,note:'Reusable frontend source'},{id:'launch',label:'Launch',price:1999,note:'Brand, packages + deployment'},{id:'custom',label:'Custom',price:null,note:'Booking, payments and learner portal'}]
  },
  {
    id:'motorhaus', ref:'SYS-008', name:'Motorhaus', category:'Websites', industry:'Automotive', type:'Automotive business website',
    summary:'A premium automotive presentation system for workshops, detailers, dealers and vehicle specialists.',
    description:'Built to make services, workmanship and vehicle imagery carry the sale while keeping enquiries frictionless.',
    accent:'#4A586B', status:'READY', featured:false, image:'products/motorhaus.webp',
    tags:['Services','Gallery','Quote flow','Automotive'],
    features:['Automotive hero treatment','Service catalogue','Vehicle / work gallery','Quote request structure','Trust blocks','Responsive visual layouts'],
    stack:['React','Vite','CSS'],
    tiers:[{id:'source',label:'Source',price:749,note:'Reusable frontend source'},{id:'launch',label:'Launch',price:2299,note:'Brand, services + deployment'},{id:'custom',label:'Custom',price:null,note:'Inventory, booking or quote automation'}]
  },
  {
    id:'anvil', ref:'APP-002', name:'ANVIL', category:'Web apps', industry:'Fitness', type:'Training application starter',
    summary:'A no-nonsense fitness application foundation for training plans, progress, logging and accountability.',
    description:'A polished product-style frontend for coaches, gyms and fitness products that need something beyond a brochure site.',
    accent:'#6B2E2E', status:'ADVANCED', featured:false, image:'products/anvil.webp',
    tags:['Training','Progress','Logging','Mobile app UI'],
    features:['Workout-plan architecture','Progress metrics','Workout logging','Goal configuration','Hydration / habit patterns','Responsive app shell'],
    stack:['React','Vite','CSS'],
    tiers:[{id:'source',label:'Starter',price:1499,note:'Frontend application foundation'},{id:'launch',label:'Launch+',price:4499,note:'Brand, configuration + deployment'},{id:'custom',label:'Custom',price:null,note:'Accounts, cloud sync and coach tools'}]
  }
];

export const featuredProducts = products.filter(p => p.featured);
export const getProduct = id => products.find(p => p.id === id);
