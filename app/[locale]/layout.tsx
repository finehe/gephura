import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
