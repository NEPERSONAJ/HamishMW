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
          <path d="M11 35.9997V11.9997C11 10.7367 11.7911 9.60895 12.9787 9.17897C14.1663 8.74899 15.4961 9.10892 16.3047 10.0792L31 27.7136V11.9997C31 10.3429 32.3431 8.99978 34 8.99978C35.6569 8.99978 37 10.3429 37 11.9997V35.9997C37 37.2628 36.2089 38.3906 35.0213 38.8206C33.8337 39.2505 32.5039 38.8906 31.6953 37.9203L17 20.2859V35.9997C17 37.6566 15.6569 38.9997 14 38.9997C12.3431 38.9997 11 37.6566 11 35.9997ZM13 11.9997V35.9997C13 36.552 13.4477 36.9997 14 36.9997C14.5523 36.9997 15 36.552 15 35.9997V17.5238C15 17.1028 15.2637 16.7269 15.6596 16.5836C16.0554 16.4402 16.4987 16.5602 16.7682 16.8837L33.2318 36.6399C33.5013 36.9634 33.9445 37.0833 34.3404 36.94C34.7363 36.7967 35 36.4208 35 35.9997V11.9997C35 11.4475 34.5523 10.9997 34 10.9997C33.4477 10.9997 33 11.4475 33 11.9997V30.4756C33 30.8967 32.7363 31.2726 32.3404 31.4159C31.9445 31.5592 31.5013 31.4393 31.2318 31.1158L14.7682 11.3596C14.4987 11.0361 14.0554 10.91" />
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
