# Cloudinary Dynamic Portfolio Setup

## How It Works

The portfolio system now uses **folder-based dynamic image discovery**. Instead of hardcoding filenames, the system reads an `images.json` manifest file from each Cloudinary folder to automatically discover all images.

## ✅ Setup Steps

### Step 1: Create images.json for Each Portfolio Section

For each Cloudinary folder (creatives, logos, editing_and_enhancement, etc.), create a JSON file listing all your images:

**Example: `creatives/images.json`**
```json
[
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
  "pic-7.jpg",
  "pic-8.jpg",
  "pic-9.jpg",
  "pic-10.jpg",
  "pic-11.jpg",
  "pic-12.jpg",
  "pic-13.jpg",
  "pic-14.jpg",
  "pic-15.jpg",
  "pic-16.jpg",
  "pic-17.jpg",
  "pic-18.jpg",
  "pic-19.jpg",
  "pic-20.jpg",
  "pic-21.jpg",
  "pic-22.jpg",
  "pic-23.jpg",
  "pic-24.jpg",
  "pic-25.jpg"
]
```

### Step 2: Upload images.json to Cloudinary

1. Go to your Cloudinary dashboard
2. For each folder (creatives, logos, posters, etc.):
   - Create the `images.json` file with filenames listed
   - Upload it to the same folder as your images

### Step 3: Portfolio Sections Configured

The following portfolio sections are set up and ready:

- `creatives` → `/creatives`
- `logos` → `/logos`
- `editing_and_enhancement` → `/editing_and_enhancement`
- `posters` → `/posters`
- `social_media_designs` → `/social_media_designs`
- `typography` → `/typography`
- `book_covers` → `/book_covers`

### Step 4: Test It Out

Visit any portfolio section in your browser:
- http://localhost:5174/creatives
- http://localhost:5174/logos
- http://localhost:5174/editing_and_enhancement

The system will:
1. Extract section ID from URL (`creatives` from `/creatives`)
2. Fetch `images.json` from that folder in Cloudinary
3. Build URLs for all images: `https://res.cloudinary.com/dyaqgdk28/image/upload/creatives/pic-1.jpg`, etc.
4. Display all images dynamically

## 🎯 Benefits

✅ **No hardcoding filenames** - Just update `images.json` when you add/remove images
✅ **Handles mixed formats** - jpg, png, jpeg all work (just list in `images.json`)
✅ **Scalable** - Add 100+ images with one simple JSON edit
✅ **One reusable component** - All 7 portfolio sections use the same `PortfolioPage` component
✅ **Single source of truth** - Config stays minimal, data lives in `images.json`

## 📝 Adding/Updating Images

When you add new images:
1. Upload them to Cloudinary folder
2. Update the `images.json` file in that folder with the new filenames
3. Done! Site updates automatically on next load

## 🔧 Technical Details

**Files changed:**
- `src/config/cloudinaryConfig.js` - Portfolio sections config (folder names only)
- `src/pages/PortfolioPage.jsx` - Generic component that fetches images dynamically
- `src/utils/cloudinaryHelper.js` - Utility to fetch and build image URLs
- `src/sections/MyWork.jsx` - Uses dynamic section discovery
- `src/routes/AllRoutes.jsx` - Routes all portfolio sections to PortfolioPage

**How it works:**
```javascript
// User visits /creatives
// PortfolioPage extracts "creatives" from URL
// Fetches images.json from https://res.cloudinary.com/dyaqgdk28/image/upload/creatives/images.json
// Gets array: ["pic-1.jpg", "pic-2.jpg", ...]
// Builds URLs: ["https://res.cloudinary.com/dyaqgdk28/image/upload/creatives/pic-1.jpg", ...]
// Renders all images dynamically
```

## ⚠️ Troubleshooting

**No images showing?**
- Check browser console for error messages
- Verify `images.json` is uploaded to the Cloudinary folder
- Verify `images.json` contains valid JSON array of filenames

**Getting 404 errors?**
- Make sure images.json filename is exactly `images.json` (lowercase)
- Verify images exist in the Cloudinary folder

**Mixed formats not working?**
- Filenames in `images.json` must include correct extension: `pic-1.jpg`, `logo-1.png`, etc.
