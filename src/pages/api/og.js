import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');
    const date = searchParams.get('date');

    if (!title) {
      return new Response('Missing title parameter', { status: 400 });
    }

    // Load fonts
    const fontMedium = await fetch(
      new URL('../../../assets/fonts/gotham-medium.woff2', import.meta.url)
    ).then(res => res.arrayBuffer());

    const fontBook = await fetch(
      new URL('../../../assets/fonts/gotham-book.woff2', import.meta.url)
    ).then(res => res.arrayBuffer());

    return new ImageResponse(
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
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
