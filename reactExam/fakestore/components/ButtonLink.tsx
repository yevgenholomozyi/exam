// Base
import { ReactNode } from 'react';

import Link from 'next/link';

interface IButtonLink {
  children: ReactNode;
  href: string;
}
function ButtonLink ({ children, href}: IButtonLink) {
  return (
    <Link
      href={href}
      className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
    >
      {children}
    </Link>
  )
};

export default ButtonLink;
