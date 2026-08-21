/**
 * Portfolio Sections Configuration
 * Simple config with folder names and image counts
 */

export const portfolioSections = {
  creatives: {
    id: 'creatives',
    name: 'Creatives',
    folder: 'creatives',
    imageCount: 25,
  },
  editing_and_enhancement: {
    id: 'editing_and_enhancement',
    name: 'Editing and Enhancement',
    folder: 'editing_and_enhancement',
    imageCount: 20,
  },
  logos: {
    id: 'logos',
    name: 'Logos',
    folder: 'logos',
    imageCount: 9,
  },
  posters: {
    id: 'posters',
    name: 'Posters',
    folder: 'posters',
    imageCount: 5,
  },
  social_media_designs: {
    id: 'social_media_designs',
    name: 'Social Media Designs',
    folder: 'social_media_designs',
    imageCount: 7,
  },
  typography: {
    id: 'typography',
    name: 'Typography',
    folder: 'typography',
    imageCount: 7,
  },
  book_covers: {
    id: 'book_covers',
    name: 'Book Covers',
    folder: 'book_covers',
    imageCount: 6,
  },
};

/**
 * UI/UX & Branding Categories
 */
export const imageCategories = {
  uiuxDesign: {
    id: 'uiux-design',
    name: 'UI/UX Design',
    description: 'User Interface and User Experience Design Projects',
    projects: [
      {
        id: 'uiux-1',
        projectName: 'Soulartistics — Design Portfolio',
        description: 'A conceptual design portfolio exploring the intersection of conceptual art direction and strategic brand identity through a curated digital experience.',
        skills: ['UI/UX Design', 'Art Direction', 'Visual Storytelling', 'Brand Identity', 'Web Design'],
        image: 'https://res.cloudinary.com/dyagqdk28/image/upload/w_400,h_300,c_fill,q_auto,f_auto/uiux_designs/soulartistics_thumbnail.jpg',
        behanceLink: 'https://www.behance.net/gallery/238817483/Soulartistics%28Design-Portfolio%29',
      },
      {
        id: 'uiux-2',
        projectName: 'IYC RO Access Portal UI/UX Case Study',
        description: 'An enterprise-grade administration suite designed to digitize and automate complex state-wide election lifecycles through structured workflows, multi-tier governance, real-time incident triage, and an accessible digital interface.',
        skills: ['UI/UX Design', 'UX Research', 'Information Architecture', 'Dashboard Design', 'Design Systems', 'Enterprise UX'],
        image: 'https://res.cloudinary.com/dyagqdk28/image/upload/w_400,h_300,c_fill,q_auto,f_auto/uiux_designs/iyc_ro_access_portal_thumbnail.jpg',
        behanceLink: 'https://www.behance.net/gallery/249586321/IYC-RO-Access-Portal-UIUX-Case-Study',
      },
      {
        id: 'uiux-3',
        projectName: 'MediMatch HealthCare Website | UI/UX Case Study 2026',
        description: 'An AI-powered healthcare platform designed to simplify provider discovery, symptom assessment, and appointment booking through a clear, accessible, and responsive digital experience.',
        skills: ['UI/UX Design', 'UX Research', 'Journey Mapping', 'Information Architecture', 'Design System', 'Responsive Web Design'],
        image: 'https://res.cloudinary.com/dyagqdk28/image/upload/w_400,h_300,c_fill,q_auto,f_auto/uiux_designs/medimatch_healthcare_thumbnail.jpg',
        behanceLink: 'https://www.behance.net/gallery/250890103/MediMatch-HealthCare-WebSite-UIUX-Case-Study-2026',
      },
      {
        id: 'uiux-4',
        projectName: 'Peptide — CRO Agency Landing Page',
        description: 'A conceptual landing page for a peptide-focused CRO agency, combining premium visual design with funnels, analytics, experimentation, and conversion-focused storytelling.',
        skills: ['UI/UX Design', 'Landing Page Design', 'Visual Design', 'Art Direction', 'Conversion-Focused Design', 'Figma'],
        image: 'https://res.cloudinary.com/dyagqdk28/image/upload/w_400,h_300,c_fill,q_auto,f_auto/uiux_designs/peptide_cro_thumbnail.jpg',
        behanceLink: 'https://www.behance.net/gallery/254550587/Peptide-CRO-Agency-Landing-Page',
      },
    ],
  },
  branding: {
    id: 'branding',
    name: 'Branding',
    description: 'Brand Identity and Visual Communication Projects',
    projects: [
      {
        id: 'brand-1',
        projectName: 'Roast Rituals Branding',
        description: 'A premium coffee brand identity inspired by the idea of turning everyday coffee into a mindful ritual, combining warm earthy tones, elegant typography, and a timeless visual language.',
        skills: ['Brand Identity', 'Logo Design', 'Packaging Design', 'Typography', 'Visual Identity', 'Art Direction'],
        image: 'https://res.cloudinary.com/dyagqdk28/image/upload/w_400,h_300,c_fill,q_auto,f_auto/branding/roast_rituals_thumbnail.jpg',
        behanceLink: 'https://www.behance.net/gallery/247593537/Roast-Rituals-Branding',
      },
    ],
  },
};

/**
 * Get portfolio section by ID
 */
export const getPortfolioSection = (sectionId) => {
  return portfolioSections[sectionId] || null;
};

/**
 * Get all portfolio sections (for MyWork grid)
 */
export const getAllPortfolioSections = () => {
  return Object.values(portfolioSections).map((section) => ({
    id: section.id,
    name: section.name,
  }));
};

/**
 * Get projects by category
 */
export const getProjectsByCategory = (categoryId) => {
  const category = Object.values(imageCategories).find((cat) => cat.id === categoryId);
  return category ? category.projects : [];
};

/**
 * Get all categories
 */
export const getAllCategories = () => {
  return Object.values(imageCategories).map((cat) => ({
    id: cat.id,
    name: cat.name,
    description: cat.description,
  }));
};
