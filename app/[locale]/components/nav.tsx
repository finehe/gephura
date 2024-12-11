import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from './language-switcher';

export default function Nav() {
  const t = useTranslations('navLinks');

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <Link href="/" className="text-xl font-bold">
              Gephura
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-600">
              {t('home')}
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              {t('about')}
            </Link>
            <Link href="/products" className="hover:text-gray-600">
              {t('products')}
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              {t('contact')}
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
