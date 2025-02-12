import { createCanvas, loadImage, registerFont } from 'canvas';
import path from 'path';
import { createHash } from 'crypto';

// Register fonts
registerFont(path.join(process.cwd(), 'src/assets/fonts/gotham-medium.woff2'), {
  family: 'Gotham',
  weight: '500'
});

registerFont(path.join(process.cwd(), 'src/assets/fonts/gotham-book.woff2'), {
  family: 'Gotham',
  weight: '400'
});

export async function generateOgImage(props) {
  const { title, date, banner } = props;

  // Create canvas
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // Draw background
  context.fillStyle = '#111111';
  context.fillRect(0, 0, width, height);

  // Draw banner image if exists
  if (banner) {
    try {
      const image = await loadImage(path.join(process.cwd(), 'public', banner));
      context.globalAlpha = 0.5;
      context.drawImage(image, 0, 0, width, height);
      context.globalAlpha = 1;
    } catch (error) {
      console.error('Error loading banner image:', error);
    }
  }

  // Add gradient overlay
  const gradient = context.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(17, 17, 17, 0.9)');
  gradient.addColorStop(1, 'rgba(17, 17, 17, 1)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  // Draw title
  context.font = '500 60px Gotham';
  context.fillStyle = '#ffffff';
  context.textAlign = 'left';
  
  // Word wrap title
  const words = title.split(' ');
  let line = '';
  let lines = [];
  const maxWidth = width - 120;
  const lineHeight = 72;

  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = context.measureText(testLine);
    
    if (metrics.width > maxWidth && i > 0) {
      lines.push(line);
      line = words[i] + ' ';
    } else {
      line = testLine;
    }
  }
  lines.push(line);

  // Draw wrapped title
  lines.forEach((line, index) => {
    context.fillText(line.trim(), 60, 200 + (index * lineHeight));
  });

  // Draw date
  const formattedDate = new Date(date).toLocaleDateString('default', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  });
  
  context.font = '400 32px Gotham';
  context.fillStyle = '#00e5ff';
  context.fillText(formattedDate, 60, 120);

  // Save image
  const hash = createHash('md5').update(title).digest('hex');
  const ogImageDir = path.join(process.cwd(), 'public/og');
  const imageName = `${hash}.png`;
  const publicPath = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/og/${imageName}`;

  // Create directory if it doesn't exist
  const fs = require('fs');
  fs.mkdirSync(ogImageDir, { recursive: true });

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(ogImageDir, imageName), buffer);

  return publicPath;
}
