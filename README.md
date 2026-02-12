# 🎉 Happy Birthday Website

A beautiful, animated birthday celebration webpage with confetti, floating elements, and photo gallery.

## 📋 Features

- ✨ Animated gradient background
- 🎊 Falling confetti animation
- ⭐ Floating stars and decorative elements
- 🎂 Bouncing and rotating cake emoji
- 🎈 Rising balloons animation
- 📸 Photo gallery with hover effects
- 💫 Glowing text animations
- 🎁 Sliding gift emojis
- 🎵 Optional background music support
- 📱 Mobile responsive design

## 🚀 How to Use

### Step 1: Add Your Photos
1. Place 3 photos in the same folder as `index.html`
2. Name them exactly as:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
3. Supported formats: `.jpg`, `.jpeg`, `.png`

### Step 2: Customize the Name
The default name is "Malarvizhi". To change it:

**Option 1: Edit HTML file**
- Open `index.html` in a text editor
- Find line with: `<div id="name" class="area">Malarvizhi</div>`
- Replace "Malarvizhi" with your desired name
- Also find: `<i id="nae">Malarvizhi</i>` and change it too

**Option 2: Use URL parameter**
- Open the page with: `index.html?name=YourName`
- Example: `index.html?name=Sarah`

### Step 3: Add Background Music (Optional)
1. Add a music file named `music.mp3` to the same folder
2. The music will play automatically when you click "Start"
3. Supported format: `.mp3`

### Step 4: Open the Website
1. Double-click `index.html` to open in your browser
2. Click the golden "Start" button
3. Enjoy the celebration! 🎉

## 🎨 Customization

### Change Colors
Edit `style.css` to customize:
- Background gradient colors (line 8-10)
- Text colors (line 95)
- Photo border colors (line 125)

### Adjust Animation Speed
In `style.css`, modify animation durations:
- `animation: spin 2s` - Change `2s` to speed up/slow down
- `animation: bounce 1s` - Adjust bounce speed

### Change Photo Size
In `style.css`, find `.gallery img` and change:
```css
width: 120px;  /* Change this value */
height: 120px; /* Change this value */
```

## 📁 File Structure

```
├── index.html      # Main HTML file
├── style.css       # Styling and animations
├── script.js       # JavaScript for interactions
├── photo1.jpg      # Your first photo
├── photo2.jpg      # Your second photo
├── photo3.jpg      # Your third photo
└── music.mp3       # Optional background music
```

## 🌐 Browser Compatibility

Works best on:
- ✅ Google Chrome
- ✅ Microsoft Edge
- ✅ Firefox
- ✅ Safari
- ✅ Opera

## 📱 Mobile Support

The website is fully responsive and works on:
- 📱 Smartphones
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktop computers

## 🎯 Tips

1. **Best Photo Size**: Use photos that are at least 500x500 pixels for best quality
2. **Music Autoplay**: Some browsers block autoplay - click the page if music doesn't start
3. **Performance**: Close other browser tabs for smooth animations
4. **Sharing**: You can host this on GitHub Pages, Netlify, or any web hosting service

## 🐛 Troubleshooting

**Photos not showing?**
- Check that photo files are named exactly: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
- Make sure photos are in the same folder as `index.html`
- Try using `.jpg` format instead of `.png`

**Name showing "NULL"?**
- Refresh the page (F5)
- Clear browser cache (Ctrl+Shift+Delete)
- Check that the name is set in the HTML file

**Animations not working?**
- Try a different browser (Chrome recommended)
- Make sure JavaScript is enabled
- Check browser console for errors (F12)

**Music not playing?**
- Click anywhere on the page after pressing Start
- Check that file is named `music.mp3`
- Try a different browser

## 💝 Made with Love

Created for birthday celebrations! Feel free to customize and share.

---

**Enjoy the celebration! 🎂🎉🎈**
