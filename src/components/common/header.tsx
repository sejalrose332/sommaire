/*
 * <header>header</header>
 * @Author: sejal mudaliar
 * @Date: 2025-09-01 17:19:07
 * @Last Modified by: sejal mudaliar
 * @Last Modified time: 2025-09-01 17:19:07
 */

import Link from "next/link";
import { FileHeart, FileText } from 'lucide-react';

export default function Header() {
  return (
    <nav className="container py-4 lg:px-8 mx-auto">
  <div className="flex items-center justify-between gap-x-8">
    <div className="flex lg:flex-1">
      <FileText
        className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out"
      />
      <Link href="/">Sommaire</Link>
    </div>

    <div>
      <Link href="/#pricing">Pricing</Link>
    </div>

    <div>
      <Link href="/sign-in">Sign-in</Link>
    </div>
  </div>
</nav>

  );
}
