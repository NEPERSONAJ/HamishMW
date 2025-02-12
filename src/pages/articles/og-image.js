import path from 'path';
import fs from 'fs';
import { createHash } from 'crypto';

export async function generateOgImage(props) {
  const params = new URLSearchParams(props);
  const hash = createHash('md5').update(params.toString()).digest('hex');
  const imageName = `${hash}.png`;
  const ogImageDir = path.join(process.cwd(), 'public/og');
  const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const publicPath = `${websiteUrl}/og/${imageName}`;

  // For development/preview environments, return a default OG image
  if (!websiteUrl) {
    return `/static/og-blank.png`;
  }

  // Check if image already exists
  try {
    const imagePath = path.join(ogImageDir, imageName);
    fs.statSync(imagePath);
    return publicPath;
  } catch (error) {
    // If image doesn't exist, return default OG image
    return `${websiteUrl}/static/og-blank.png`;
  }
}
