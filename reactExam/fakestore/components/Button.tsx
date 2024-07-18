// Base
import { ReactNode } from 'react';

interface IButton {
  onClick: Function;
  isSubmit?: boolean;
  disabled?: boolean;
  children: ReactNode | string;
}
function ButtonLink ({
    children,
    onClick,
    disabled=false,
    isSubmit=false,
}: IButton) {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick}
      type={isSubmit ? 'submit' : 'button'}
      className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
    >
      {children}
    </button>
  )
};

export default ButtonLink;