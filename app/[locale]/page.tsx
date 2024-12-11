'use client';  // 添加这行
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('home');  // 指定命名空间 'home'

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl text-center">
            {t('hero.title')}
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">
              {t('hero.subtitle')}
            </span>
          </h1>
          <p className="text-center max-w-[700px] text-lg text-muted-foreground">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">{t('features.innovation.title')}</h3>
            <p className="mt-2 text-muted-foreground">{t('features.innovation.description')}</p>
          </div>
          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">{t('features.support.title')}</h3>
            <p className="mt-2 text-muted-foreground">{t('features.support.description')}</p>
          </div>
          <div className="rounded-lg border p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">{t('features.custom.title')}</h3>
            <p className="mt-2 text-muted-foreground">{t('features.custom.description')}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="text-2xl font-bold mb-4">{t('cta.title')}</h2>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            {t('cta.button')}
          </button>
        </div>
      </section>
    </main>
  );
}
