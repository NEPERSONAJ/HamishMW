import { ImageResponse } from '@vercel/og';
import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';

export async function generateOgImage(props) {
  const { title, date } = props;

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
    // Load fonts
    const fontMedium = fs.readFileSync(
      path.join(process.cwd(), 'src/assets/fonts/gotham-medium.woff2')
    );
    const fontBook = fs.readFileSync(
      path.join(process.cwd(), 'src/assets/fonts/gotham-book.woff2')
    );

    // Generate image
    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#111111',
            padding: '60px',
          }}
        >
          {date && (
            <div
              style={{
                color: '#00e5ff',
                fontSize: '32px',
                fontFamily: 'Gotham',
                fontWeight: 400,
                marginBottom: '40px',
              }}
            >
              {new Date(date).toLocaleDateString('default', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              })}
            </div>
          )}
          <div
            style={{
              color: '#ffffff',
              fontSize: '60px',
              fontFamily: 'Gotham',
              fontWeight: 500,
              lineHeight: 1.2,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Gotham',
            data: fontMedium,
            weight: 500,
            style: 'normal',
          },
          {
            name: 'Gotham',
            data: fontBook,
            weight: 400,
            style: 'normal',
          },
        ],
      }
    );

    // Convert response to buffer and save
    const buffer = await imageResponse.arrayBuffer();
    fs.writeFileSync(imagePath, Buffer.from(buffer));

    return publicPath;
  }
}
