import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="29"
      viewBox="0 0 46 29"

      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M423.625,512h-98.57c-3.984,0-7.551-2.358-9.14-5.94l-118.97-247.306V502c0,5.522-4.477,10-10,10h-98.57
			c-5.523,0-10-4.478-10-10V10c0-5.523,4.477-10,10-10h109.39c3.843,0,7.346,2.202,9.012,5.665l108.269,225.077V10
			c0-5.523,4.478-10,10-10h98.58c5.522,0,10,4.477,10,10v492C433.625,507.522,429.148,512,423.625,512z M331.346,492h82.279V20
			h-78.58v254.6c0,4.666-3.228,8.712-7.777,9.75c-4.543,1.036-9.211-1.21-11.234-5.415L191.478,20H98.375v472h78.57V214.9
			c0-4.667,3.227-8.712,7.777-9.75c4.547-1.038,9.211,1.209,11.234,5.415L331.346,492z" />
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
