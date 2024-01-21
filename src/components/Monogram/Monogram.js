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
      width="92"
      height="58"
      viewBox="0 0 92 58"

      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M47.58 4.42H16.42c-6.63 0-12 5.37-12 12v31.16c0 6.63 5.37 12 12 12h31.16c6.63 0 12-5.37 12-12V16.42c0-6.63-5.37-12-12-12zm4.25 47.27c0 .55-.45 1-1 1H39.36c-.33 0-.641-.17-.83-.44L25.61 33.31v18.38c0 .55-.44 1-1 1H13.17c-.55 0-1-.45-1-1V12.31c0-.55.45-1 1-1h11.36c.34 0 .64.17.83.44l13 19.1V12.31c0-.55.449-1 1-1h11.47c.55 0 1 .45 1 1v39.38z" />
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
