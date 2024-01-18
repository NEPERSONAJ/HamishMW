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
          <path d="M5.942 0l7.18 18.35 9.72-18.442a.838.838 0 011.524.093l3.39 8.824a.846.846 0 01-.04.686L30.307 25.395A6.698 6.698 0 0124.367 29h-4.6a.84.84 0 01-.74-1.23l3.63-6.887-3.655-9.15-7.12 13.662A6.698 6.698 0 015.942 29h-4.6a.842.842 0 01-.748-1.23L15 0.446a.839.839 0 011.524.092z" />
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
