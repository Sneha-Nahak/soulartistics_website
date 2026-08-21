# Adding Project Thumbnail Images - UI/UX & Branding

## What Changed

Each project in the UI/UX & Branding section now has an `image` field for thumbnail/preview images.

```javascript
{
  id: 'uiux-1',
  projectName: 'Mobile App Interface',
  description: '...',
  skills: ['Figma', 'UI Design', ...],
  image: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/uiux_designs/mobile_app_thumbnail.jpg',  // ← NEW FIELD
  behanceLink: 'https://www.behance.net/your-project-1',
}
```

---

## How to Add Your Images

### Step 1: Prepare Your Thumbnails

For each project, create or export a thumbnail image:
- Recommended size: 400x300px or 16:9 ratio
- Format: JPG or PNG
- File size: Keep under 500KB

Examples:
- `mobile_app_thumbnail.jpg`
- `web_dashboard_thumbnail.jpg`
- `logo_suite_thumbnail.jpg`
- etc.

### Step 2: Upload to Cloudinary

1. Go to **Cloudinary Media Library**
2. Create a folder: `project_thumbnails` (or similar)
3. Upload all your thumbnail images there
4. Get the full Cloudinary URL for each image

Example URL format:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/project_thumbnails/mobile_app_thumbnail.jpg
```

### Step 3: Update Config File

Open: `src/config/cloudinaryConfig.js`

For each project, add/update the `image` field:

```javascript
{
  id: 'uiux-1',
  projectName: 'Mobile App Interface',
  description: '...',
  skills: [...],
  image: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/project_thumbnails/mobile_app_thumbnail.jpg',  // ← Add this
  behanceLink: '...',
}
```

---

## Current Placeholder URLs

All projects currently have placeholder URLs:
```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/[FOLDER]/[IMAGE_NAME].jpg
```

Replace `YOUR_CLOUD_NAME` and add your actual thumbnail image URLs.

---

## Project Image Structure

### UI/UX Design Projects
- `mobile_app_thumbnail.jpg`
- `web_dashboard_thumbnail.jpg`
- `ecommerce_thumbnail.jpg`
- `wireframes_thumbnail.jpg`
- `userflow_thumbnail.jpg`
- `prototypes_thumbnail.jpg`

### Branding Projects
- `logo_suite_thumbnail.jpg`
- `brand_guidelines_thumbnail.jpg`
- `color_typography_thumbnail.jpg`
- `visual_identity_thumbnail.jpg`
- `marketing_collateral_thumbnail.jpg`
- `brand_mockups_thumbnail.jpg`

---

## Image Display

The images will display:
- **Desktop**: 400px height, object-fit cover
- **Tablet**: 160px height, responsive
- **Mobile**: 140px height, responsive
- **Hover effect**: Slight zoom on image
- **Lazy loading**: Images load on demand

---

## Example: Update One Project

**Original**:
```javascript
{
  id: 'uiux-1',
  projectName: 'Mobile App Interface',
  description: 'Modern mobile app interface design...',
  skills: ['Figma', 'Wireframing', 'UI Design', 'User Research'],
  image: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/uiux_designs/mobile_app_thumbnail.jpg',
  behanceLink: 'https://www.behance.net/your-project-1',
}
```

**After Adding Actual Image URL**:
```javascript
{
  id: 'uiux-1',
  projectName: 'Mobile App Interface',
  description: 'Modern mobile app interface design...',
  skills: ['Figma', 'Wireframing', 'UI Design', 'User Research'],
  image: 'https://res.cloudinary.com/sneha_portfolio/image/upload/w_400,h_300,c_fill/project_thumbnails/mobile_app_ui.jpg',
  behanceLink: 'https://www.behance.net/sneha-portfolio/mobile-app-interface',
}
```

---

## Optional: Cloudinary Transformations

You can add Cloudinary transformations to the URL for auto-optimization:

```javascript
image: 'https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_400,h_300,c_fill,q_auto,f_auto/project_thumbnails/image.jpg'
```

This:
- `w_400,h_300` - Resizes to 400x300px
- `c_fill` - Fills the space
- `q_auto` - Auto quality optimization
- `f_auto` - Auto format selection (WebP/JPG)

---

## Leaving Images Blank (Optional)

If you don't have thumbnails yet, you can:

1. **Leave as placeholder URLs** - They won't display (no error)
2. **Remove the image field** - Card displays without thumbnail
3. **Add later** - Update URLs anytime

The component handles missing images gracefully.

---

## Quick Checklist

- [ ] Prepare 12 thumbnail images (6 UI/UX + 6 Branding)
- [ ] Upload to Cloudinary
- [ ] Get full Cloudinary URLs for each
- [ ] Update `src/config/cloudinaryConfig.js`
- [ ] Replace all `YOUR_CLOUD_NAME` with actual cloud name
- [ ] Replace all `image` URLs with actual Cloudinary URLs
- [ ] Save and test with `npm run dev`
- [ ] Visit `/ui-ux-branding` page to see thumbnails

---

## File Location

**Config file**: `src/config/cloudinaryConfig.js`

Find these sections:
- `uiuxDesign.projects` - 6 UI/UX projects
- `branding.projects` - 6 Branding projects

Each project has an `image` field ready for your URLs.

---

## Troubleshooting

**Images not showing?**
- Check URL is complete and correct
- Verify image exists in Cloudinary
- Check for typos in URL
- Try opening URL directly in browser

**Wrong image sizes?**
- Edit `.project-image` height in `ProjectCard.css`
- Default: 200px on desktop, 160px tablet, 140px mobile

**Need different thumbnail dimensions?**
- Add Cloudinary transformations to URL
- Or resize images before uploading
