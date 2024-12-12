import createMiddleware from 'next-intl/middleware';

// 简化中间件的导出
export default createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'zh'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
