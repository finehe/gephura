'use client'

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en';
    router.push(`/${newLocale}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md border hover:bg-gray-100"
    >
      {locale === 'en' ? '中文' : 'English'}
    </button>
  );
}
