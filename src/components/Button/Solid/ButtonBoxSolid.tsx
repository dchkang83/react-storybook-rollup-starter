import React from 'react';
// import './_style.scss';

interface ButtonBoxSolidProps {
  // /**
  //  * Is this the principal call to action on the page?
  //  */
  // primary?: boolean;
  // /**
  //  * What background color to use
  //  */
  // backgroundColor?: string;
  // /**
  //  * How large should the button be?
  //  */
  // size?: 'small' | 'medium' | 'large';
  // /**
  //  * Button contents
  //  */
  label: string;
  // rightIcon: boolean;
  // leftIcon: boolean;
  type?: 'primary' | 'secondary' | 'tertiary';
  size?: 'large' | 'medium' | 'small';
  state: 'enabled' | 'pressed' | 'disabled';
  error: boolean;
  // className: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonBoxSolid = ({
  // rightIcon = false,
  // leftIcon = false,
  // className = '',
  label = 'ButtonBoxSolid label',
  type,
  size,
  state,
  error = false,
  ...props
}: ButtonBoxSolidProps) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    // <button type="button" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} style={{ backgroundColor }} {...props}>
    //   {label}
    // </button>
    <div className={`button-box-solid ${size} ${state} ${type} error-${error}`} {...props}>
      <div className="button-label">{label}</div>
      {state === 'pressed' && <div className="dim" />}
    </div>
  );
};
