const fs = require('fs');
const path = require('path');

const copies = [
  { src: 'Generated Images/MangoStartFrame.png', dest: 'public/images/mango/bottle.png' },
  { src: 'Generated Images/ChocolateJuiceEndFrame.png', dest: 'public/images/chocolate/bottle.png' },
  { src: 'Generated Images/PomegranateEndFrame.png', dest: 'public/images/pomegranate/bottle.png' }
];

copies.forEach(c => {
  if (fs.existsSync(c.src)) {
    fs.copyFileSync(c.src, c.dest);
    console.log(`Copied ${c.src} to ${c.dest}`);
  } else {
    console.error(`Missing: ${c.src}`);
  }
});
