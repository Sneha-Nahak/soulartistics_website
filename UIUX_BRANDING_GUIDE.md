# UI/UX & Branding Page - Quick Reference Guide

## Overview
The UI/UX & Branding page displays projects in a card-based format with metadata instead of image galleries. Each project includes:
- Project name
- Description
- Skills/technologies used
- Behance portfolio link

## Project Object Structure

```javascript
{
  id: 'uiux-1',                          // Unique identifier (use lowercase with hyphens)
  projectName: 'Mobile App Interface',    // Project title (displayed as heading)
  description: 'Modern mobile app interface design with intuitive navigation and user-centric layouts',  // Full description
  skills: [                               // Array of skills/technologies
    'Figma',
    'Wireframing',
    'UI Design',
    'User Research'
  ],
  behanceLink: 'https://www.behance.net/your-project-1'  // Behance portfolio URL
}
```

## File Location
**Config file**: `src/config/cloudinaryConfig.js`

## Adding New Projects

### Step 1: Open the config file
```
src/config/cloudinaryConfig.js
```

### Step 2: Find the category you want to add to
- **UI/UX Design**: Look for `uiuxDesign.projects`
- **Branding**: Look for `branding.projects`

### Step 3: Add a new project object
```javascript
{
  id: 'uiux-7',                          // Increment the ID number
  projectName: 'Your Project Name',
  description: 'Your detailed project description...',
  skills: ['Skill1', 'Skill2', 'Skill3'],
  behanceLink: 'https://www.behance.net/your-project-7',
}
```

### Step 4: Save and test
The component automatically picks up the new project!

## Adding New Categories

### Example: Adding "Motion Design" category

```javascript
export const imageCategories = {
  uiuxDesign: { /* ... existing ... */ },
  branding: { /* ... existing ... */ },
  
  // Add new category
  motionDesign: {
    id: 'motion-design',
    name: 'Motion Design',
    description: 'Animation and Motion Graphics Projects',
    projects: [
      {
        id: 'motion-1',
        projectName: 'App Intro Animation',
        description: 'Smooth app onboarding animation sequence',
        skills: ['After Effects', 'Animation', 'Motion Design'],
        behanceLink: 'https://www.behance.net/motion-1',
      },
      // Add more projects...
    ],
  },
};
```

The TabNavigator automatically creates tabs for all categories!

## Component Flow

```
UIUXBranding.jsx
├── TabNavigator (displays category tabs)
├── Category Description (displays selected category description)
└── ProjectCard (rendered for each project)
    ├── Project Name
    ├── Description
    ├── Skill Tags
    └── Behance Link Button
```

## Styling Guide

### Project Card Styling
- Background: Semi-transparent white (8-12% opacity)
- Hover effect: Slight lift with shadow
- Border: Subtle white border (15% opacity)
- Cards respond to hover with vertical lift and enhanced shadow

### Skill Tags
- Style: Pill-shaped badges
- Default: Semi-transparent background with white text
- Hover: Enhanced opacity and visibility

### Behance Link
- Style: Circular icon button
- Icon: External link icon (FiExternalLink from react-icons)
- Opens in new tab with security attributes

## Responsive Design

### Desktop (>768px)
- Single column layout
- Full-width project cards with max-width container
- Normal spacing and typography

### Tablet (768px - 600px)
- Adjusted padding and margins
- Slightly smaller typography
- Reduced skill tag padding

### Mobile (<600px)
- Minimal padding
- Smaller typography
- Compact skill tag sizing
- Responsive button sizing

## Customization

### Changing Tab Label Text
In `src/config/cloudinaryConfig.js`:
```javascript
{
  id: 'uiux-design',
  name: 'UI/UX Design',  // Change this text
  description: '...',
  projects: [...]
}
```

### Updating Behance Links
Replace URL in project object:
```javascript
behanceLink: 'https://www.behance.net/your-actual-project-url'
```

### Adjusting Card Styling
Edit `src/styles/ProjectCard.css`:
- `.project-card` - Main card container
- `.project-name` - Project title styling
- `.project-description` - Description text styling
- `.skill-tag` - Skill badge styling
- `.behance-link` - Button styling

## Common Customizations

### Add more skill tags per project
```javascript
skills: ['Skill1', 'Skill2', 'Skill3', 'Skill4', 'Skill5']
```

### Longer descriptions
```javascript
description: 'Very long description with multiple sentences explaining the project details, outcomes, and technical approach...'
```

### Update category descriptions
```javascript
export const imageCategories = {
  uiuxDesign: {
    id: 'uiux-design',
    name: 'UI/UX Design',
    description: 'Your custom category description here',  // Edit this
    projects: [...]
  }
}
```

## Tips & Best Practices

1. **Use consistent naming**: `id` should be lowercase with hyphens (e.g., `uiux-1`, `brand-2`)
2. **Keep descriptions concise**: 1-2 sentences that convey the project essence
3. **Limit skills**: 3-5 skills per project for clarity
4. **Valid Behance URLs**: Ensure Behance links are complete and working
5. **Use title case**: Project names should use proper title case
6. **Group related projects**: Keep similar projects together in the same category

## Troubleshooting

### Projects not showing up?
- Check the config file for syntax errors
- Ensure `projects` array is not empty
- Verify the category `id` matches the expected format

### Tabs not switching?
- Check browser console for errors
- Verify `id` values are unique within `imageCategories`
- Ensure `getProjectsByCategory()` is called correctly

### Styling looks off?
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS imports in UIUXBranding.jsx
- Verify CSS file paths are correct

## Need Help?

Refer to these files:
- **Component**: `src/pages/UIUXBranding.jsx`
- **Config**: `src/config/cloudinaryConfig.js`
- **Card Component**: `src/components/ProjectCard.jsx`
- **Styles**: `src/styles/ProjectCard.css` & `src/styles/UIUXBranding.css`
