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
      viewBox="0 0 92 58"

      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M47.685 7.107h-5.084c-2.206 0-4 1.794-4 4V28.59l.001.928L25.583 8.966a3.982 3.982 0 0 0-3.379-1.858h-5.889c-2.206 0-4 1.794-4 4v41.785c0 2.206 1.794 4 4 4h5.083c2.206 0 4-1.794 4-4V35.038l-.002-1.505.175.279 13.268 21.202a3.976 3.976 0 0 0 3.391 1.878h5.455c2.206 0 4-1.794 4-4V11.107c0-2.205-1.794-4-4-4zm1 45.786c0 .551-.448 1-1 1H42.23a.998.998 0 0 1-.848-.469L28.114 32.22a202.982 202.982 0 0 1-2.975-4.885 1.508 1.508 0 0 0-1.698-.683 1.501 1.501 0 0 0-1.095 1.469c.035 2.116.052 4.385.052 6.917v17.854c0 .551-.448 1-1 1h-5.083c-.552 0-1-.449-1-1V11.107c0-.551.448-1 1-1h5.889c.345 0 .661.174.845.465l13.392 21.14c.84 1.327 1.655 2.66 2.423 3.961.338.577 1.07.865 1.701.682a1.503 1.503 0 0 0 1.091-1.473 311.703 311.703 0 0 1-.055-6.292V11.107c0-.551.448-1 1-1h5.084c.552 0 1 .449 1 1v41.786z" />
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
