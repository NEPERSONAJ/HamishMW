import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';

export async function generateOgImage(props) {
  const { title, date } = props;

  // Create URL-safe query parameters
  const params = new URLSearchParams({
    title,
    date: date || '',
  });

  const hash = createHash('md5').update(title).digest('hex');
  const ogImageDir = path.join(process.cwd(), 'public/og');
  const imageName = `${hash}.png`;
  const imagePath = path.join(ogImageDir, imageName);
  const publicPath = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/og/${imageName}`;

  // Create directory if it doesn't exist
  fs.mkdirSync(ogImageDir, { recursive: true });

  try {
    // Check if image already exists
    fs.statSync(imagePath);
    return publicPath;
  } catch (error) {
    // Generate image if it doesn't exist
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/og?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Failed to generate OG image: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(imagePath, Buffer.from(buffer));

    return publicPath;
  }
}
