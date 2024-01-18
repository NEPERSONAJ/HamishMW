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
          <path d="M25.669 45.48l7.02-17.717h.003l9.503 17.805a.822.822 0 001.49-.09L47 36.959a.808.808 0 00-.04-.661L39.145 21.48A6.56 6.56 0 0033.336 18H28.84a.824.824 0 00-.382.094.806.806 0 00-.342 1.094l3.55 6.65-3.574 8.834-6.962-13.191A6.56 6.56 0 0015.322 18h-4.498a.855.855 0 00-.388.094.808.808 0 00-.343 1.094L24.18 45.569a.824.824 0 001.49-.089zm25.29-18.978a.808.808 0 00.379-.43l2.611-6.98a.807.807 0 00-.485-1.04.828.828 0 00-.283-.05h-6.432a.813.813 0 00-.72 1.195l3.82 6.977a.822.822 0 001.11.328z" />
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
